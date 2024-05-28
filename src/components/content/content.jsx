/* eslint-disable react/prop-types */
export default function Content({name}) {
  return (<div className="">
    <div className="my-16 mx-28">
      <h1 className="font-medium  text-5xl">Bonjour <span className="text-pure-red">{name}</span></h1>
    </div>
  </div>);
}
