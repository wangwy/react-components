import './App.css';
import { SplitScreenTest } from "./components/SplitScreen/test";
import { ListTest } from "./components/List/test";
import { ModalTest } from "./components/Modal/test";
function App() {
  return (
    <div className="App">
      <SplitScreenTest />
      <ListTest />
      <ModalTest/>
    </div>
  );
}

export default App;
