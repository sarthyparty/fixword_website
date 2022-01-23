import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Extension from "./Extension";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="ext" element={<Extension />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
