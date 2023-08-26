/* eslint-disable react/prop-types */
const WeatherCard = ({ data }) => {
  return (
    <div className="flex flex-wrap w-full mt-8 rounded-md p-2 bg-slate-500">
      <div className="flex flex-col w-full md:w-8/12 border-b-2 md:border-b-0 md:border-e-2 py-1">
        <div className="flex bg-slate-400 px-1 rounded-full w-max ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="w-auto">{data.city}</h2>
        </div>
        <div className="flex justify-center">
          <span className="flex flex-col items-center xl:px-8">
            <img
              className="w-28"
              src={`../../public/icons/weather_icons/${data.weather[0].icon}.png`}
            ></img>
            <h1>{data.weather[0].description}</h1>
          </span>
          <h1 className=" text-7xl md:text-8xl">{Math.round(data.main.temp)}°</h1>
          <span className="flex flex-col xl:px-8 justify-end">
            <h3> {data.main.humidity}% Humidity</h3>
            <h3>{data.wind.speed}m/s</h3>
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full  md:w-4/12">
        <div className="flex flex-col py-2 px-2 lg:px-12 w-full">
          <h1 className="mb-2">Details</h1>
          <span className="flex justify-between">
            <p>Feels like:</p> <p>{data.main.feels_like}°C</p>
          </span>
          <span className="flex justify-between">
            <p>Wind speed:</p> <p>{data.wind.speed} m/s</p>
          </span>
          <span className="flex justify-between">
            <p>Humidity:</p> <p>{data.main.humidity } %</p>
          </span>
          <span className="flex justify-between">
            <p>Pressure:</p> <p>{data.main.pressure } Pa</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
