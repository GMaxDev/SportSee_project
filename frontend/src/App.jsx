import { useEffect, useState } from "react";
import Header from "./components/header/header";
import LateralNav from "./components/lateral-nav/lateral-nav";
import Content from "./components/content/content";
import "./App.css";

export default function App() {
  const [personalData, setPersonalData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageData, setAverageData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);

  const userId = 12

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const data = await response.json();
        console.log(data);
        setPersonalData(data);

        const activityResponse = await fetch(
          `http://localhost:3000/user/${userId}/activity`
        );
        const activityData = await activityResponse.json();
        console.log(activityData);
        setActivityData(activityData);

        const averageResponse = await fetch(
          `http://localhost:3000/user/${userId}/average-sessions`
        );
        const averageData = await averageResponse.json();
        console.log(averageData);
        setAverageData(averageData);

        const performanceResponse = await fetch(`http://localhost:3000/user/${userId}/performance`);
        const performanceData = await performanceResponse.json();
        console.log(performanceData);
        setPerformanceData(performanceData);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  // Affiche un message de chargement pendant que les données sont récupérées
  if (!personalData || !activityData || !averageData || !performanceData) {
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
          performanceData={performanceData}
        />
      </div>
    </div>
  );
}
