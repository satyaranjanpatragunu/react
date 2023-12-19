import logo from './logo.svg';
import './App.css';
import Channel from './component/Channel';
import { Hooks } from './component/HOOKS/Usestate';
function App() {
  return (
    <div className="App">
      <Channel />
      <Hooks />
    </div>
  );
}

export default App;
