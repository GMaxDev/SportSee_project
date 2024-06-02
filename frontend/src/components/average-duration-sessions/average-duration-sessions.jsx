/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 rounded shadow-lg ">
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

// Définition du composant CustomCursor
const CustomCursor = ({ points, width, height }) => {
  const { x } = points[0];
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.1)"
      x={x}
      y={0}
      width={width - x}
      height={height}
    />
  );
};

// Fonction de formatage des jours
const dayFormatter = (day) => {
  const days = ["L", "M", "M", "J", "V", "S", "D"];
  return days[day - 1];
};

export default function AverageDurationSessions({data}) {
  // eslint-disable-next-line no-unused-vars
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleMouseMove = (state) => {
    if (state.isTooltipActive) {
      setHoverIndex(state.activeTooltipIndex);
    } else {
      setHoverIndex(null);
    }
  };

  return (
    <div className="relative rounded-md bg-pure-red">
      <h2 className="absolute top-0 left-0 z-10 m-4 text-lg font-bold text-white/50 ">
        Durée moyenne des sessions
      </h2>
      <div className="h-64 px-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={300}
            height={100}
            data={data}
            onMouseMove={handleMouseMove}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#aaa" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
            </defs>
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="url(#colorPv)"
              strokeWidth={2}
              dot={false}
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#fff"}}
              tickFormatter={dayFormatter}
            />
            <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
