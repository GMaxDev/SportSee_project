import { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Intensité",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Vitesse",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Force",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Endurance ",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Energie",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Cardio ",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default class RadarData extends PureComponent {
  render() {
    return (
      <div className="relative h-64 rounded-md bg-zinc-800 ">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" className="text-xs" />
            <PolarRadiusAxis className="text-xs" tick={false} axisLine={false}/>
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#FF0101B2"
              fill="#FF0101B2"
              fillOpacity={0.7}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
