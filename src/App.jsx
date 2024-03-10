import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboards from "./Components/Dashboards";
import LoactionPermission from "./Components/LoactionPermission";

function App() {
  return (
    <>
      {/* <LoactionPermission /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboards />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
