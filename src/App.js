import './App.css';
import MainDash from './componets/MainDash/MainDash';
import Sidebar from './componets/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div class="AppGlass">
          <Sidebar />
          <MainDash />
        </div>
    </div>
  );
}

export default App;
