import DailyActivity from "../daily-activity/daily-activity";
import AverageDurationSessions from "../average-duration-sessions/average-duration-sessions";
import RadarData from "../radar-data/radar-data";
import Completion from "../completion/completion";

import icon_fire from "/src/img/icon_fire.svg";
import icon_chicken from "/src/img/icon_chicken.svg";
import icon_apple from "/src/img/icon_apple.svg";
import icon_cheeseburger from "/src/img/icon_cheeseburger.svg";
import MonoData from "../mono-data/mono-data";

/* eslint-disable react/prop-types */
export default function Content({ name }) {
  fetch("http://localhost:3000/user/12").then(console.log);

  return (
    <div className="flex flex-wrap mx-28">
      <div className="my-16">
        <h1 className="text-5xl font-medium">
          Bonjour <span className="text-pure-red">{name}</span>
        </h1>
        <h2 className="my-10">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </h2>
      </div>
      <div className="grid w-full grid-cols-4 grid-rows-2 gap-8">
        <div className="col-start-1 col-end-4">
          <DailyActivity />
        </div>
        <div className="col-start-1 col-end-2" style={{ maxWidth: "258px"}}>
          <AverageDurationSessions />
        </div>
        <div className="col-start-2 col-end-3" style={{ maxWidth: "258px"}}>
          <RadarData />
        </div>
        <div className="col-start-3 col-end-4" style={{ maxWidth: "258px"}}>
          <Completion />
        </div>
        <div className="col-start-4 col-end-5 row-start-1 row-end-4 "> 
          <MonoData
            img={icon_fire}
            data="1930"
            name="Calories"
            label="kCal"
            bgColor="rgba(255, 0, 0, 0.1)"
          />
          <MonoData
            img={icon_chicken}
            data="155"
            name="Proteines"
            label="g"
            bgColor="rgba(74, 184, 255, 0.1)"
          />
          <MonoData
            img={icon_apple}
            data="290"
            name="Glucides"
            label="g"
            bgColor="rgba(249, 206, 35, 0.1)"
          />
          <MonoData
            img={icon_cheeseburger}
            data="50"
            name="Lipides"
            label="g"
            bgColor="rgba(253, 81, 129, 0.1)"
          />
        </div>
      </div>
    </div>
  );
}
