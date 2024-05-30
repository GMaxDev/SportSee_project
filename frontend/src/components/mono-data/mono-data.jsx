import SquareIcon from "../square-icon/square-icon";

/* eslint-disable react/prop-types */
export default function MonoData({ img, data, name, label, bgColor }) {
  return (
    <div className="flex items-center h-32 mb-10 max-w-64 justify-evenly bg-base-gray">
        <SquareIcon bgColor={bgColor} logo={img}/>
      <div>
        <h4 className="text-xl font-bold">{data}{label}</h4>
        <p className="text-sm text-gray-500">{name}</p>
      </div>
    </div>
  );
}
