import DailyActivity from "../daily-activity/daily-activity";
import AverageDurationSessions from "../average-duration-sessions/average-duration-sessions";
import RadarData from "../radar-data/radar-data";

/* eslint-disable react/prop-types */
export default function Content({ name }) {
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
      <div style={{ width: "835px", height: "320px" }}>
        <DailyActivity />
      </div>
      <div style={{ width: "258px", height: "263px" }}>
        <AverageDurationSessions />
      </div>
      <div style={{ width: "258px", height: "263px" }}>
        <RadarData />
      </div>
    </div>
  );
}
