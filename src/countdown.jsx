import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [days, setDays] = useState(160); // Start with 166 days
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;
    const storedRemainingTime = (75 * 24 * 60 * 60 * 1000); // 166 days in milliseconds
    const totalSeconds = Math.floor(storedRemainingTime / 1000);
    const remainingDays = Math.floor(totalSeconds / (60 * 60 * 24));
    const remainingHours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const remainingMinutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const remainingSeconds = totalSeconds % 60;

    setDays(remainingDays);
    setHours(remainingHours);
    setMinutes(remainingMinutes);
    setSeconds(remainingSeconds);

    interval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 0) {
          setMinutes(prevMinutes => {
            if (prevMinutes === 0) {
              setHours(prevHours => {
                if (prevHours === 0) {
                  setDays(prevDays => {
                    if (prevDays === 0) {
                      clearInterval(interval);
                      return 0;
                    }
                    return prevDays - 1;
                  });
                  return 23;
                }
                return prevHours - 1;
              });
              return 59;
            }
            return prevMinutes - 1;
          });
          return 59;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  
    return (
    <>
      <section>
        <div className='w-full'>
        </div>
        <div className="justify-center mx-auto align-middle max-w-screen-xl">
          <div className="md:pt-10 pt-3 justify-center text-center overflow-hidden">
            <div className="flex md:gap-16 gap-10 justify-start text-center">
              <div className="">
                <p className="md:text-7xl lg:text-7xl text-3xl">{days}</p>
                <span className='text-[#1FB689] text-xs lg:text-base'>Days
                </span>
              </div>
              <div className="">
                <p className="md:text-7xl lg:text-7xl text-3xl">{hours}</p>
                <span className='text-[#1FB689] text-xs lg:text-base'>Hours
                </span>
              </div>
              <div className="">
                <p className="md:text-7xl lg:text-7xl text-3xl">{minutes}</p>
                <span className='text-[#1FB689] text-xs lg:text-base'>Minutes
                </span>
              </div>
              <div className="">
                <p className="md:text-7xl lg:text-7xl text-3xl">{seconds}</p>
                <span className='text-[#1FB689] text-xs lg:text-base'>Seconds
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
};

export default Countdown;
