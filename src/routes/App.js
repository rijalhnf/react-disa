import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../containers/Home/index";
import Calendar from "../containers/calendar/Calendar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
