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
export default function Content({ personalData, activityData, averageData, performanceData }) {

  return (
    <div className="flex flex-wrap mx-28">
      <div className="mt-9">
        <h1 className="text-5xl font-medium">
          Bonjour{" "}
          <span className="text-pure-red">
            {personalData.data.userInfos.firstName}
          </span>
        </h1>
        <h2 className="my-10">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </h2>
      </div>

      <div className="grid w-full h-auto grid-cols-4 grid-rows-2 gap-8">
        <div className="col-start-1 col-end-4">
          <DailyActivity data={activityData.data.sessions} />
        </div>

        <div className="col-start-1 col-end-2" style={{ maxWidth: "258px" }}>
          <AverageDurationSessions data={averageData.data.sessions} />
        </div>

        <div className="col-start-2 col-end-3" style={{ maxWidth: "258px" }}>
          <RadarData data={performanceData.data} />
        </div>

        <div className="col-start-3 col-end-4" style={{ maxWidth: "258px" }}>
          <Completion data={personalData.data} />
        </div>

        <div className="col-start-4 col-end-5 row-start-1 row-end-4 ">
          <MonoData
            img={icon_fire}
            data={personalData.data.keyData.calorieCount}
            name="Calories"
            label="kCal"
            bgColor="rgba(255, 0, 0, 0.1)"
          />
          <MonoData
            img={icon_chicken}
            data={personalData.data.keyData.proteinCount}
            name="Proteines"
            label="g"
            bgColor="rgba(74, 184, 255, 0.1)"
          />
          <MonoData
            img={icon_apple}
            data={personalData.data.keyData.carbohydrateCount}
            name="Glucides"
            label="g"
            bgColor="rgba(249, 206, 35, 0.1)"
          />
          <MonoData
            img={icon_cheeseburger}
            data={personalData.data.keyData.lipidCount}
            name="Lipides"
            label="g"
            bgColor="rgba(253, 81, 129, 0.1)"
          />
        </div>
      </div>
    </div>
  );
}
