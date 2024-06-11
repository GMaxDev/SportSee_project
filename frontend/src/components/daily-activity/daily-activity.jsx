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

import { formatDate } from "../../utils/dateUtils";

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
            {entry.value === "kilogram"
              ? "Poids (kg)"
              : "Calories brûlées (kCal)"}
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
          <p>{`${data.kilogram} kg`}</p>
          <p>{`${data.calories}`} kCal</p>
        </div>
      );
    }

    return null;
  };
  render() {
    const { data } = this.props;
    const maxCalories = data.reduce(
      (max, session) => (session.calories > max ? session.calories : max),
      0
    );

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          className="px-12 py-6 rounded-md bg-zinc-50"
          width={500}
          height={300}
          data={data}
        >
          <text className="text-lg" y='10%' textAnchor="start">
            Activité quotidienne
          </text>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tick={{ dy: 15 }} tickLine={false} tickFormatter={formatDate} />
          <YAxis
            dataKey="kilogram"
            orientation="right"
            domain={[0, maxCalories]}
          />
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
            dataKey="kilogram"
            fill="#282D30"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
