import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

const Weather = () => {
    const inputRef = useRef();
    const [weatherData, setweatherData] = useState(false)

    const search = async (city) => {

        if(city === "") {
            return null
        }

        const allIcons = {
            "01d": "/Assets/clear.png",
            "01n": "/Assets/clear.png",
            "02d": "/Assets/cloud.png",
            "02n": "/Assets/cloud.png",
            "03d": "/Assets/cloud.png",
            "03n": "/Assets/cloud.png",
            "04d": "/Assets/drizzle.png",
            "09d": "/Assets/drizzle.png",
            "09n": "/Assets/rain.png",
            "10d": "/Assets/snow.png",
            "10n": "/Assets/rain.png",
            "13d": "/Assets/snow.png",
            "13n": "/Assets/rain.png",
        }

        
        try {

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'65dfa591eec921fba0e4d3c07cc39cf7'}`
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)

            const icon = allIcons[data.weather[0].icon] || "/Assets/clear.png"

            setweatherData({
                humidity: data.main.humidity,
                tempreature: Math.floor(data.main.temp),
                location: data.name,
                windSpeed: data.wind.speed,
                icon: icon
            })
            
        } catch (error) {
            setweatherData(false);
            console.log("Error in fetching wether data")
        }
    }


    useEffect(() => {
     search("Delhi")
    }, [])
    
   
  return (
    <motion.div initial={{opacity:0}} animate={{opacity: 1}} transition={{duration: 4}}>
        <div className='sm:mt-5 mt-12 bg-[#500ea4] py-5 flex-col mx-auto w-full sm:w-2/3 flex items-center'>
            <div className="flex items-center py-5 px-10 gap-5 w-full justify-center">
                <input ref={inputRef} className='py-2 pl-5 bg-[#fff] w-full outline-[#500ea4] text-[#333333] rounded-full font-bold' type="text" placeholder='Search'/>
                <img onClick={() => search(inputRef.current.value)} className='bg-[#fff] py-2 px-3 rounded-full' src="/Assets/search.png" alt="" />
            
            </div>

            {
                weatherData ? <>

                    <div className="flex flex-col gap-6 sm:gap-10">
                        <img className='w-30 sm:w-40' src={weatherData.icon} alt="" />
                        <p className='sm:text-5xl text-2xl font-extrabold text-center text-[#ffffffe3]'>{weatherData.tempreature}°C</p>
                        <p className='sm:text-5xl text-2xl text-center font-bold text-[#ffffffe5]'>{weatherData.location}</p>
                    </div>

                    <div className="flex mt-12 sm:mt-20 w-full px-10 items-center justify-between">
                        <div className="flex items-center gap-5">
                            <img className='w-6' src="/Assets/humidity.png" alt="" />
                            <div className="">
                                <p className='sm:text-2xl text-lg font-bold text-[#ffffffef]'>{weatherData.humidity} %</p>
                                <p className='sm:text-2xl text-lg font-bold text-[#ffffffe5]'>Humidity</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <img className='w-6' src="Assets/wind.png" alt="" />
                            <div className="">
                                <p className='sm:text-xl text-lg font-bold text-[#ffffffef]'>{weatherData.windSpeed} km/h</p>
                                <p className='sm:text-xl text-lg font-bold text-[#ffffffe5]'>Wind Speed</p>
                            </div>
                        </div>
                    </div>

                </> : <></>
            }
        </div>
   
    </motion.div>
  )
}

export default Weather
