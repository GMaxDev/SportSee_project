import SquareIcon from "../square-icon/square-icon";

/* eslint-disable react/prop-types */
export default function MonoData({ img, data, name, label, bgColor }) {
  return (
    <div className="flex items-center h-auto px-8 py-4 mb-6 min-w-64 justify-evenly bg-base-gray">
        <SquareIcon bgColor={bgColor} logo={img}/>
      <div>
        <h4 className="text-xl font-bold">{data}{label}</h4>
        <p className="text-sm text-gray-500">{name}</p>
      </div>
    </div>
  );
}
