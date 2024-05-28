/* eslint-disable react/prop-types */
export default function SquareIcon({ color = "white", logo }) {
  return (
    <div className="flex justify-center items-center w-16 h-16 my-2.5 rounded-md " style={{ backgroundColor: color }}>
      <img className="size-1/2" src={logo} alt= {`Logo de ${logo}`} />
    </div>
  );
}
