import { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  // Legend,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

const data = [
  {
    name: "completion",
    uv: 12,
    fill: "#ff0101",
  },
];

// const style = {
//   top: "50%",
//   right: 0,
//   transform: "translate(0, -50%)",
//   lineHeight: "24px",
// };

export default class Completion extends PureComponent {
  render() {
    return (
      <div className="relative flex items-center justify-center h-64 rounded-md bg-zinc-50">
      <h2 className="absolute top-0 left-0 z-10 m-4 text-lgtext-black ">
        Score
      </h2>
        <h3 className="absolute flex flex-col items-center text-[#74798C]">
          <span className="text-2xl font-bold text-black">
            {`${data[0].uv}`}% <br />
          </span>{" "}
          de votre <br />
          objectif
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="70%"
            barSize={10}
            data={data}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]} // Domain fixé de 0 à 100 pour représenter les pourcentages
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              minAngle={15}
              background
              clockWise
              dataKey="uv"
              cornerRadius={10}
            />
            {/* <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            /> */}
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
