import DailyActivity from "../daily-activity/daily-activity";

/* eslint-disable react/prop-types */
export default function Content({name}) {
  return (<div className="mx-28">
    <div className="my-16">
      <h1 className="font-medium  text-5xl">Bonjour <span className="text-pure-red">{name}</span></h1>
      <h2 className="my-10">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
    <div style={{ width: '800px', height: '400px' }}>
      <DailyActivity />
    </div>
  </div>);
}
