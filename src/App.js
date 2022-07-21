import SideNav from './app/SideNav';
import MainApp from './app/index';
import './style.css';

function App() {
  return (
    <div>
      <div className="header">
        Clockify
      </div>
      <div className="App">
        <SideNav />
        <MainApp />
      </div>
    </div>
  );
}

export default App;
