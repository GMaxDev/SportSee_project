import SquareIcon from "../square-icon/square-icon";
import yogaLogo from "../../img/sport_yoga.svg"
import natationLogo from "../../img/sport_natation.svg"
import veloLogo from "../../img/sport_velo.svg"
import muscuLogo from "../../img/sport_muscu.svg"

export default function LateralNav() {
  return (
    <div className="flex flex-col items-center h-auto font-medium text-white bg-black justify-evenly w-28">
      <div>
        <SquareIcon logo={yogaLogo}/>
        <SquareIcon logo={natationLogo}/>
        <SquareIcon logo={veloLogo}/>
        <SquareIcon logo={muscuLogo}/>
      </div>
      <p className="w-40 text-xs -rotate-90">Copyryght, SportSee 2024</p>
    </div>
  );
}
