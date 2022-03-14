import './App.css';
import {LeftMenu} from './components/LeftMenu/LeftMenu.js'
import {MainContainer} from './components/MainContainer/MainContainer.js'
import {RightMenu} from './components/RightMenu/RightMenu.js'
function App() {
  return (
    <div className="App">
      <LeftMenu/>
      <MainContainer/>
      <RightMenu/>

      <div className="background"></div>
    </div>
  );
}

export default App;
