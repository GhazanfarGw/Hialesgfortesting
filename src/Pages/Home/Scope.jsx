// import React from 'react'

// export default function Scope() {
//   return (
//     <>
//     <div>
//         <div className='mx-auto justify-between pt-16 max-w-screen-xl md:px-10 px-5'>
//             <h1 className='third md:text-4xl font-light text-2xl text-[#444444]'>
//                 Scope of Services
//             </h1>
//             <p className='fourth max-w-screen-lg pt-5 md:pt-8 text-[#777] md:text-lg text-sm'>
//                 With the advisory license, Hilal ESG Holdings LTD will provide the following offerings:
//             </p>
//             <br/>
//             <div className='flex gap-2 items-center pt-2'>
//                 <div className='bg-[#0C6E33] w-2 h-2 rounded-full items-center'/>
//                 <span className='text-[#777] flex gap-1'>
//                     <p className='font-bold'>Investment advisory services</p>exclusively for Institutional and Ultra High Networth individuals.
//                 </span>
//             </div>
//             <div className='flex gap-2 items-center pt-2'>
//                 <div className='bg-[#0C6E33] w-2 h-2 rounded-full items-center'/>
//                 <span className='text-[#777] flex gap-1'>
//                     <p className='font-bold'>Portfolio management</p>and asset allocation strategies tailored to client needs.
//                 </span>
//             </div>
//             <div className='flex gap-2 items-center pt-2'>
//                 <div className='bg-[#0C6E33] w-2 h-2 rounded-full items-center'/>
//                 <span className='text-[#777] flex gap-1'>
//                     <p className='font-bold'>Risk management</p>and ESG-compliant investment solutions.
//                 </span>
//             </div>
//             <div className='flex gap-2 items-center pt-2'>
//                 <div className='bg-[#0C6E33] w-2 h-2 rounded-full items-center'/>
//                 <span className='text-[#777] flex gap-1'>
//                     <p className='font-bold'>Financial planning</p> and wealth management advisory services.
//                 </span>
//             </div>
//             <div className='flex gap-2 items-center pt-2'>
//                 <div className='bg-[#0C6E33] w-2 h-2 rounded-full items-center'/>
//                 <span className='text-[#777] flex gap-1'>
//                     <p className='font-bold'>Compliance </p>with Sharia-compliant investment principles.
//                 </span>
//             </div>
//             <div className="border-b md:pb-10 pb-5"/>
//         </div>
//     </div>
//     </>
//   )
// }


import React from 'react'
import { useState, Fragment } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Climate() {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <>
        <Box 
            className="mx-auto justify-between md:pb-52 pb-10 pt-24 max-w-screen-xl md:px-10 px-5"
            >
                <h1 className='third md:text-4xl font-light text-2xl text-[#444444]'>
                    Scope of Services
                </h1>
                <p className='fourth max-w-screen-lg pt-5 md:pt-8 text-[#777] md:text-lg text-sm'>
                    With the advisory license, Hilal ESG Holdings LTD will provide the following offerings:
                </p>
                <div className='items-center text-left mt-10 pt-10 pb-52 bg-[#eee]'>
                    <Tabs className='border-[#fff] border-b border-opacity-20'
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable force tabs example"
                    >
                        <Tab
                            label="Investment advisory services" {...a11yProps(0)}
                            sx={{
                                
                                fontSize: { xs: 14, md: 14, },
                                
                                textAlign: 'left',
                                color: '#444444',
                                paddingBottom:{xs: 3, md: 0,},
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#084d33', // Change the text color to #403F68 for the selected tab
                                }
                            }}
                        />
                        <Tab
                            label="Portfolio management"
                            {...a11yProps(1)}
                            sx={{
                                
                                fontSize: { xs: 14, md: 14, },
                                
                                textAlign: 'left',
                                color: '#444444',
                                paddingBottom:{xs: 3, md: 0,},
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#084d33', // Change the text color to #403F68 for the selected tab
                                }
                            }}
                        />
                        <Tab 
                            label="Risk management" {...a11yProps(2)}
                            sx={{
                                
                                fontSize: { xs: 14, md: 14, },
                                
                                textAlign: 'left',
                                color: '#444444',
                                paddingBottom:{xs: 3, md: 0,},
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#084d33', // Change the text color to #403F68 for the selected tab
                                }
                            }}
                        />
                        <Tab 
                            label="Financial planning" {...a11yProps(3)}
                            sx={{
                                
                                fontSize: { xs: 14, md: 14, },
                                
                                textAlign: 'left',
                                color: '#444444',
                                paddingBottom:{xs: 3, md: 0,},
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#084d33', // Change the text color to #403F68 for the selected tab
                                }
                            }}
                        />
                        <Tab 
                            label="Sharia-compliant" {...a11yProps(4)}
                            sx={{
                                
                                fontSize: { xs: 14, md: 14, },
                                
                                textAlign: 'left',
                                color: '#444444',
                                paddingBottom:{xs: 3, md: 0,},
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#084d33', // Change the text color to #403F68 for the selected tab
                                }
                            }}
                        />
                    </Tabs>
                </div>

                <div className='mx-auto max-w-screen-2xl justify-center md:px-10 px-5 items-center'>
                    <TabPanel value={value} index={0}>
                        <div className='rounded-md gap-10 border md:-mt-40 -mt-44 bg-white flex grid-cols-2'>
                            <div className='lg:hidden block'>
                                <img className='' src='././Scop/1676218020958.jpeg' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 py-20'>
                                <h1 className='md:text-3xl font-light text-2xl text-[#444444]'>
                                    Investment advisory services
                                </h1>
                                <p className='pt-5 text-[#777]'>
                                    Investment advisory services exclusively for Institutional and Ultra High Networth individuals.
                                </p>
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='././Scop/1676218020958.jpeg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <div className='rounded-md gap-10 border md:-mt-40 -mt-44 bg-white flex grid-cols-2'>
                            <div className='md:px-20 md:max-w-xl px-5 py-20'>
                                <h1 className='md:text-3xl font-light text-2xl text-[#444444]'>
                                    Portfolio management
                                </h1>
                                <p className='pt-5 text-[#777]'>
                                    Portfolio management and asset allocation strategies tailored to client needs.
                                </p>
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='././Scop/01.jpg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        <div className='rounded-md gap-10 border md:-mt-40 -mt-44 bg-white flex grid-cols-2'>
                            <div className='lg:hidden block'>
                                <img className='' src='././Scop/04.jpg' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 py-20'>
                                <h1 className='md:text-3xl font-light text-2xl text-[#444444]'>
                                    Risk management
                                </h1>
                                <p className='pt-5 text-[#777]'>
                                    Risk management and ESG-compliant investment solutions.
                                </p>
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='././Scop/04.jpg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={3}>
                        <div className='rounded-md gap-10 border md:-mt-40 -mt-44 bg-white flex grid-cols-2'>
                            <div className='lg:hidden block'>
                                <img className='' src='././Scop/02.jpg' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 py-20'>
                                <h1 className='md:text-3xl font-light text-2xl text-[#444444]'>
                                    Financial planning
                                </h1>
                                <p className='pt-5 text-[#777]'>
                                    Financial planning and wealth management advisory services.
                                </p>
        
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='././Scop/02.jpg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <div className='rounded-md gap-10 border md:-mt-40 -mt-44 bg-white flex grid-cols-2'>
                            <div className='lg:hidden block'>
                                <img className='' src='././Scop/03.jpg' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 py-20'>
                                <h1 className='md:text-3xl font-light text-2xl text-[#444444]'>
                                    Compliance with Sharia-compliant
                                </h1>
                                <p className='pt-5 text-[#777]'>
                                    Compliance with Sharia-compliant investment principles.
                                </p>
        
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='././Scop/03.jpg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>
                </div>
            </Box>
    </>
  )
}