/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
const Week_Days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastWeek = Week_Days.slice(dayInWeek).concat(
    Week_Days.slice(0, dayInWeek)
  );

  return (
    <>
      <div className="pt-5 mt-10 border-t-2 ">
        <label className="text-xl font-bold mb-4 text-white">Daily forecast</label>
        <Accordion>
          {data.list.splice(0, 7).map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className=" h-10 bg-slate-100 rounded-lg my-2 flex justify-center items-center px-2 hover:cursor-pointer">
                    <img
                      className="w-8 h-8"
                      src={`/icons/weather_icons/${item.weather[0].icon}.png`}
                    ></img>
                    <label className="flex-1 font-semibold pl-2">
                      {forecastWeek[index]}
                    </label>
                    <label className="flex-1 md:text-end md:pr-2 font-semibold">
                      {item.weather[0].description}
                    </label>
                    <label className="text-gray-500 text-sm">
                      {Math.round(item.main.temp_min)}°C /{" "}
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="grid grid-cols-2 px-3 gap-1 text-white">
                  <div className="flex justify-between pr-2">
                    <label className="font-semibold">Feels like:</label>
                    <label>{Math.round(item.main.feels_like)}°C</label>
                  </div>
                  <div className="flex justify-between pr-2">
                    <label className="font-semibold">Pressure:</label>
                    <label>{item.main.pressure} Pa</label>
                  </div>
                  <div className="flex justify-between pr-2">
                    <label className="font-semibold">Humidity:</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="flex justify-between pr-2">
                    <label className="font-semibold">Clouds:</label>
                    <label>{item.clouds.all}</label>
                  </div>
                  <div className="flex justify-between pr-2">
                    <label className="font-semibold">Wind:</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="flex justify-between pr-2">
                    <label className="font-semibold">Sea level:</label>
                    <label>{item.main.sea_level} m</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Forecast;
