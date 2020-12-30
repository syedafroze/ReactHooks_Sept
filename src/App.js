import logo from "./logo.svg";
import "./App.css";
import State from "./React_Hooks/State";
import LifeCycle from "./React_Hooks/LifeCycle";
import Ref from "./React_Hooks/Ref";
import Memo from "./React_Hooks/Memo";
import ContextApi from "./contextApi";
import ContextComp from "./React_Hooks/ContextComp";
function App() {
  return (
    <div className="App">
      <ContextApi.Provider value="Syeds">
        {/* <State></State> */}
        {/* <LifeCycle></LifeCycle> */}
        {/* <Ref></Ref> */}
        <Memo></Memo>
        <ContextComp></ContextComp>
      </ContextApi.Provider>
    </div>
  );
}

export default App;
