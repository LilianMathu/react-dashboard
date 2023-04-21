// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/login/Login";

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
