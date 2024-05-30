import Header from "./components/header/header";
import LateralNav from "./components/lateral-nav/lateral-nav";
import Content from "./components/content/content";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <LateralNav />
        <Content name="Thomas" />
      </div>
    </div>
  );
}
