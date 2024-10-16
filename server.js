// server.js
const express = require('express');
const dotenv = require('dotenv');
const Stripe = require('stripe');
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');

dotenv.config();

const app = express();
app.use(express.json());

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Initialize Alchemy Web3
const alchemyWeb3 = createAlchemyWeb3(process.env.ALCHEMY_API_URL);

// USDC Contract Address and ABI
const USDC_CONTRACT_ADDRESS = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
const USDC_ABI = [{"inputs":[{"internalType":"address","name":"implementationContract","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"}];

// Create USDC Contract Instance
const usdcContract = new alchemyWeb3.eth.Contract(USDC_ABI, USDC_CONTRACT_ADDRESS);

// Create an Express route to generate the login link for the connected account.
app.post('/create-login-link', async (req, res) => {
    const { connectedAccountId } = req.body;

    try {
        if (!connectedAccountId) {
            return res.status(400).json({ error: 'Connected account ID is required' });
        }

        // Retrieve the connected account details
        const account = await stripe.accounts.retrieve(connectedAccountId);

        // Log the account details for debugging
        console.log('Connected account details:', account);

        // Check the account type
        if (account.type === 'express') {
            const expressDashboardUrl = `https://connect.stripe.com/express/${connectedAccountId}/dashboard`;
            return res.json({ loginLink: expressDashboardUrl });
        } else if (account.type === 'custom') {
            const loginLink = await stripe.accounts.createLoginLink(connectedAccountId);
            return res.json({ loginLink: loginLink.url });
        } else {
            return res.status(400).json({ error: 'Unsupported account type for login link' });
        }
    } catch (error) {
        console.error('Error creating login link:', error);
        res.status(500).json({ error: error.message });
    }
});

// Endpoint to create a payout in USDC
app.post('/create-payout', async (req, res) => {
    const { recipient_polygon_usdc_address, amount } = req.body;

    try {
        // Create a payout in USDC using Stripe
        const payout = await stripe.payouts.create({
            amount: amount, // amount in cents
            currency: 'usdc',
            destination: recipient_polygon_usdc_address,
        });

        // Prepare transaction data
        const transferAmount = alchemyWeb3.utils.toWei((amount / 100).toString(), 'ether'); // Convert to wei
        const tx = {
            to: USDC_CONTRACT_ADDRESS,
            value: 0, // No ETH transfer
            gas: 2000000,
            gasPrice: await alchemyWeb3.eth.getGasPrice(),
            nonce: await alchemyWeb3.eth.getTransactionCount(process.env.YOUR_POLYGON_WALLET_ADDRESS),
            chainId: 137, // Chain ID for Polygon Mainnet
        };

        // Create transfer data
        const data = usdcContract.methods.transfer(recipient_polygon_usdc_address, transferAmount).encodeABI();
        tx.data = data;

        // Sign the transaction
        const signedTx = await alchemyWeb3.eth.accounts.signTransaction(tx, process.env.PRIVATE_KEY);

        // Send the signed transaction
        const receipt = await alchemyWeb3.eth.sendSignedTransaction(signedTx.rawTransaction);

        res.json({
            success: true,
            message: 'Payout created successfully!',
            payout,
            transactionReceipt: receipt,
        });
    } catch (error) {
        console.error('Error creating payout:', error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});


app.get('/account-details', async (req, res) => {
    try {
        // Retrieve the account details, including holder name
        const accountDetails = await stripe.accounts.retrieve();
        console.log('Account Details:', accountDetails);

        // Retrieve the account balance, including pending transactions
        const balance = await stripe.balance.retrieve();
        console.log('Balance Details:', balance);

        // Retrieve recent balance transactions (for sending history)
        const balanceTransactions = await stripe.balanceTransactions.list({
            limit: 10 // You can adjust the limit
        });
        console.log('Balance Transactions:', balanceTransactions);

        // Get current date and time
        const currentDate = new Date().toLocaleString();

        // Formatting the data to send in response
        const accountData = {
            currentDateTime: currentDate, // Include current date and time
            holderName: accountDetails.business_profile.name || accountDetails.individual.first_name + ' ' + accountDetails.individual.last_name,
            email: accountDetails.email,
            availableBalance: balance.available.map((balanceEntry) => ({
                amount: balanceEntry.amount / 100, // convert to currency units
                currency: balanceEntry.currency
            })),
            pendingBalance: balance.pending.map((pendingEntry) => ({
                amount: pendingEntry.amount / 100,
                currency: pendingEntry.currency
            })),
            transactions: balanceTransactions.data.map((transaction) => ({
                id: transaction.id,
                amount: transaction.amount / 100,
                currency: transaction.currency,
                description: transaction.description,
                status: transaction.status,
                created: new Date(transaction.created * 1000).toLocaleString() // Convert timestamp to readable format
            }))
        };

        res.json(accountData);
    } catch (error) {
        console.error('Error retrieving account details:', error);
        res.status(500).send({ error: 'Error retrieving account details' });
    }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

console.log('Stripe Secret Key:', process.env.STRIPE_SECRET_KEY);
console.log('ALCHEMY API:', process.env.ALCHEMY_API_URL);


// require('dotenv').config(); // Load environment variables from .env
// const express = require('express');
// const stripe = require('stripe')
// (process.env.STRIPE_SECRET_KEY); // Ensure you're using the Stripe Secret Key

// const app = express();
// app.use(express.json());

// app.get('/customers', async (req, res) => {
//     try {
//         const customers = await stripe.customers.list();
//         res.json(customers.data); // This will return all customers
//     } catch (error) {
//         console.error('Error retrieving customers:', error);
//         res.status(500).json({ error: error.message });
//     }
// });


// app.get('/account-details', async (req, res) => {
//     try {
//         // Retrieve the account details, including holder name
//         const accountDetails = await stripe.accounts.retrieve();
//         console.log('Account Details:', accountDetails);

//         // Retrieve the account balance, including pending transactions
//         const balance = await stripe.balance.retrieve();
//         console.log('Balance Details:', balance);

//         // Retrieve recent balance transactions (for sending history)
//         const balanceTransactions = await stripe.balanceTransactions.list({
//             limit: 10 // You can adjust the limit
//         });
//         console.log('Balance Transactions:', balanceTransactions);

//         // Get current date and time
//         const currentDate = new Date().toLocaleString();

//         // Formatting the data to send in response
//         const accountData = {
//             currentDateTime: currentDate, // Include current date and time
//             holderName: accountDetails.business_profile.name || accountDetails.individual.first_name + ' ' + accountDetails.individual.last_name,
//             email: accountDetails.email,
//             availableBalance: balance.available.map((balanceEntry) => ({
//                 amount: balanceEntry.amount / 100, // convert to currency units
//                 currency: balanceEntry.currency
//             })),
//             pendingBalance: balance.pending.map((pendingEntry) => ({
//                 amount: pendingEntry.amount / 100,
//                 currency: pendingEntry.currency
//             })),
//             transactions: balanceTransactions.data.map((transaction) => ({
//                 id: transaction.id,
//                 amount: transaction.amount / 100,
//                 currency: transaction.currency,
//                 description: transaction.description,
//                 status: transaction.status,
//                 created: new Date(transaction.created * 1000).toLocaleString() // Convert timestamp to readable format
//             }))
//         };

//         res.json(accountData);
//     } catch (error) {
//         console.error('Error retrieving account details:', error);
//         res.status(500).send({ error: 'Error retrieving account details' });
//     }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// console.log('Stripe Secret Key:', process.env.STRIPE_SECRET_KEY);