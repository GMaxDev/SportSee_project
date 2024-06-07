import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/header/header";
import LateralNav from "./components/lateral-nav/lateral-nav";
import Content from "./components/content/content";
import {
  fetchUserData,
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
} from "./services/apiService";
import "./App.css";

export default function App() {
  const [personalData, setPersonalData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageData, setAverageData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);

  const { id } = useParams();
  let userId = id ? id : 12;
  // console.log(params);

  useEffect(() => {
    async function fetchData() {
      try {
        const personalData = await fetchUserData(userId);
        setPersonalData(personalData);

        const activityData = await fetchUserActivity(userId);
        setActivityData(activityData);

        const averageData = await fetchUserAverageSessions(userId);
        setAverageData(averageData);

        const performanceData = await fetchUserPerformance(userId);
        setPerformanceData(performanceData);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [userId]);

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
