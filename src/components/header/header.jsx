import { useState } from "react";
import sportsee_LOGO from "/src/img/sportSee_LOGO.svg";

export default function App() {
  return (
    <div className="font-medium text-2xl text-white flex bg-black h-24 items-center px-7">
      <div className="flex flex-row items-center">
        <div className="bg-[#ff0101] h-14 w-14 rounded-full">
          <img src={sportsee_LOGO} alt="Logo de SportSee" />
        </div>
        <p className="text-[#ff0101] ml-2.5">SportSee</p>
      </div>

      <ul className=" flex flex-row justify-around w-full">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglages</li>
        <li>Communauté</li>
      </ul>
    </div>
  );
}
