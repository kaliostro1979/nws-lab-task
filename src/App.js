import Images from "./components/Images";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <div className="App">
      <div className={"Container"}>
          <Sidebar/>
          <Images/>
      </div>
    </div>
  );
}

export default App;
