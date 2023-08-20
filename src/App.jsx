import './App.css';

export default function App() {
  return (
    <>
      <div className="content">
        <div className="overview">
          <div className="overviewTopWrapper">
            <div className="overvieTimeline box"></div>
            <div className="overviewProjects box"></div>
          </div>
          <div className="overviewWorkflow box"></div>
        </div>
      </div>
      <div className="profileCardNavBarWrapper">
        <div className="profileCardNavBar">
          <div className="profileCard box"></div>
          <div className="navBar box"></div>
        </div>
      </div>
    </>
  );
}
