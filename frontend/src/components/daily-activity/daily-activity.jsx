/* eslint-disable react/prop-types */
import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1",
    kg: 4000,
    Kcal: 2400,
    amt: 2400,
  },
  {
    name: "2",
    kg: 3000,
    Kcal: 1398,
    amt: 2210,
  },
  {
    name: "3",
    kg: 2000,
    Kcal: 9800,
    amt: 2290,
  },
  {
    name: "4",
    kg: 2780,
    Kcal: 3908,
    amt: 2000,
  },
  {
    name: "5",
    kg: 1890,
    Kcal: 4800,
    amt: 2181,
  },
  {
    name: "6",
    kg: 2390,
    Kcal: 3800,
    amt: 2500,
  },
  {
    name: "7",
    kg: 3490,
    Kcal: 4300,
    amt: 2100,
  },
  {
    name: "8",
    kg: 4000,
    Kcal: 2400,
    amt: 2400,
  },
  {
    name: "9",
    kg: 3000,
    Kcal: 1398,
    amt: 2210,
  },
  {
    name: "10",
    kg: 2000,
    Kcal: 9800,
    amt: 2290,
  },
];

// Custom Legend Component
// eslint-disable-next-line react-refresh/only-export-components
const CustomLegend = (props) => {
  const { payload } = props;
  return (
    <div className="flex mb-10">
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center mt-8 mr-14">
          <div
            className="w-2.5 h-2.5 mr-5 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></div>
          <span>
            {entry.value === "kg" ? "Poids (kg)" : "Calories brûlées (kCal)"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default class DailyActivity extends PureComponent {
  renderTooltip = (props) => {
    const { active, payload } = props;

    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-[#E60000] text-white p-2 rounded">
          <p>{`${data.kg} kg`}</p>
          <p>{`${data.Kcal} kg`} kCal</p>
        </div>
      );
    }

    return null;
  };
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          className="px-12 py-6 rounded-md bg-zinc-50"
          width={500}
          height={300}
          data={data}
          // margin={{
          //   top: 5,
          //   right: 30,
          //   left: 20,
          //   bottom: 5,
          // }}
        >
          <text textAnchor="start">Activité quotidienne</text>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ dy: 15 }} tickLine={false} />
          <YAxis orientation="right" />
          <Tooltip content={this.renderTooltip} />
          <Legend
            content={<CustomLegend />}
            layout="vertical"
            verticalAlign="top"
            wrapperStyle={{
              top: 0,
              right: 0,
              transform: "translate(0, 0)",
            }}
          />
          <Bar
            dataKey="kg"
            fill="#282D30"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="Kcal"
            fill="#E60000"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
