/* eslint-disable react/prop-types */
import { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

export default class RadarData extends PureComponent {
  // Transformer les données pour qu'elles soient compatibles avec RadarChart
  transformData = (data) => {
    const { kind, data: values } = data;
    return values.map((item) => ({
      subject: kind[item.kind],
      value: item.value,
    }));
  };
  
  render() {
    const { data } = this.props;
    const transformedData = this.transformData(data);

    return (
      <div className="relative h-64 rounded-md bg-zinc-800 ">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={transformedData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" className="text-xs" />
            <PolarRadiusAxis
              className="text-xs"
              tick={false}
              axisLine={false}
            />
            <Radar
              name="Performance"
              dataKey="value"
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
