import { useEffect, useState } from "react";
import Header from "./components/header/header";
import LateralNav from "./components/lateral-nav/lateral-nav";
import Content from "./components/content/content";
import "./App.css";

export default function App() {
  const [personalData, setPersonalData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageData, setAverageData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/user/12");
        const data = await response.json();
        console.log(data);
        setPersonalData(data);

        const activityResponse = await fetch(
          "http://localhost:3000/user/12/activity"
        );
        const activityData = await activityResponse.json();
        console.log(activityData);
        setActivityData(activityData);

        const averageResponse = await fetch(
          "http://localhost:3000/user/12/average-sessions"
        );
        const averageData = await averageResponse.json();
        console.log(averageData.data.sessions);
        setAverageData(averageData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // Affiche un message de chargement pendant que les données sont récupérées
  if (!personalData || !activityData || !averageData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <LateralNav />
        <Content
          personalData={personalData}
          activityData={activityData}
          averageData={averageData}
        />
      </div>
    </div>
  );
}
