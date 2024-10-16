// Import FontAwesomeIcon and icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faChartLine, faShieldAlt, faDollarSign, faMosque } from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {
  return (
    <div className="max-w-screen-xl items-center justify-center mx-auto mt-20 md:mt-0">
      <div className='md:px-20 px-5'>
        <h1 className="third md:text-6xl text-4xl text-[#2F3239] font-light md:text-center md:border-[#1FB689] md:border-4 md:max-w-screen-sm md:py-5 justify-center mx-auto">
          <span className='text-[#1FB689] md:pr-3'>
            Scope
          </span>
          of Services
        </h1>
        <div className='md:mt-16 mt-8 mx-auto'>
          <p className='fourth md:text-xl text-lg text-[#2F3239]'>
            With the advisory license, Hilal ESG Holdings LTD will provide the following offerings:
          </p>
          <div className='relative border-l-4 border-[#1FB689] mt-12 max-w-screen-lg ml-5'>
            {/* Timeline item 1 */}
            <div className='mb-14 ml-8 group items-center'>
              <div className='absolute w-12 h-12 bg-gradient-to-r from-[#1FB689] to-[#30b88f] rounded-full -left-6 border-4 border-white shadow-md flex items-center justify-center'>
                <FontAwesomeIcon icon={faBriefcase} className='text-white text-xl' />
              </div>
              <div className='pl-6 items-center pt-2'>
                <p className='fourth md:text-xl text-lg text-[#2F3239] group-hover:text-[#1FB689] transition duration-300'>
                  <span className='font-semibold'>Investment advisory services</span> exclusively for Institutional and Ultra High Networth individuals.
                </p>
              </div>
            </div>
            {/* Timeline item 2 */}
            <div className='mb-14 ml-8 group items-center'>
              <div className='absolute w-12 h-12 bg-gradient-to-r from-[#1FB689] to-[#1FB689] rounded-full -left-6 border-4 border-white shadow-md flex items-center justify-center'>
                <FontAwesomeIcon icon={faChartLine} className='text-white text-xl' />
              </div>
              <div className='pl-6 items-center pt-2'>
                <p className='fourth md:text-xl text-lg text-[#2F3239] group-hover:text-[#1FB689] transition duration-300'>
                  <span className='font-semibold'>Portfolio management</span> and asset allocation strategies tailored to client needs.
                </p>
              </div>
            </div>
            {/* Timeline item 3 */}
            <div className='mb-14 ml-8 group items-center'>
              <div className='absolute w-12 h-12 bg-gradient-to-r from-[#1FB689] to-[#1FB689] rounded-full -left-6 border-4 border-white shadow-md flex items-center justify-center'>
                <FontAwesomeIcon icon={faShieldAlt} className='text-white text-xl' />
              </div>
              <div className='pl-6 items-center pt-2'>
                <p className='fourth md:text-xl text-lg text-[#2F3239] group-hover:text-[#1FB689] transition duration-300'>
                  <span className='font-semibold'>Risk management</span> and ESG-compliant investment solutions.
                </p>
              </div>
            </div>
            {/* Timeline item 4 */}
            <div className='mb-14 ml-8 group items-center'>
              <div className='absolute w-12 h-12 bg-gradient-to-r from-[#1FB689] to-[#1FB689] rounded-full -left-6 border-4 border-white shadow-md flex items-center justify-center'>
                <FontAwesomeIcon icon={faDollarSign} className='text-white text-xl' />
              </div>
              <div className='pl-6 items-center pt-2'>
                <p className='fourth md:text-xl text-lg text-[#2F3239] group-hover:text-[#1FB689] transition duration-300'>
                  <span className='font-semibold'>Financial planning</span> and wealth management advisory services.
                </p>
              </div>
            </div>
            {/* Timeline item 5 */}
            <div className='mb-14 ml-8 group items-center'>
              <div className='absolute w-12 h-12 bg-gradient-to-r from-[#1FB689] to-[#1FB689] rounded-full -left-6 border-4 border-white shadow-md flex items-center justify-center'>
                <FontAwesomeIcon icon={faMosque} className='text-white text-xl' />
              </div>
              <div className='pl-6 items-center pt-2'>
                <p className='fourth md:text-xl text-lg text-[#2F3239] group-hover:text-[#1FB689] transition duration-300'>
                  <span className='font-semibold'>Compliance with Sharia-compliant</span> investment principles.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Timeline;