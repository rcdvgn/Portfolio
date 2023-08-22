import './styles/App.css';
import Overview from './components/Overview.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  return (
    <>
      <div className="content">
        <Overview />
        <Projects />
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
