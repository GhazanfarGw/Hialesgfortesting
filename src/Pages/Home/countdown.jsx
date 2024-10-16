import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [days, setDays] = useState(160); // Start with 166 days
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval;
    const storedRemainingTime = (70 * 24 * 60 * 60 * 1000); // 166 days in milliseconds
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
      <section className='mt-5'>
        <div className="max-w-screen-xl">
          <div className="py-3 overflow-hidden">
            <div className="flex md:gap-10 gap-10 text-[#444444] font-normal">
              <div className="text-center">
                <p className="md:text-4xl lg:text-4xl text-2xl ">{days}</p>
                <span className='text-xs lg:text-xs text-center justify-center mx-auto'>Days
                </span>
              </div>
              <div className="text-center">
                <p className="md:text-4xl lg:text-4xl text-2xl">{hours}</p>
                <span className='text-xs lg:text-xs text-center justify-center mx-auto'>Hours
                </span>
              </div>
              <div className="text-center">
                <p className="md:text-4xl lg:text-4xl text-2xl">{minutes}</p>
                <span className='text-xs lg:text-xs text-center justify-center mx-auto'>Minutes
                </span>
              </div>
              <div className="text-center">
                <p className="md:text-4xl lg:text-4xl text-2xl">{seconds}</p>
                <span className='text-xs lg:text-xs text-center justify-center mx-auto'>Seconds
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