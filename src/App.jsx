import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todolist from "./Todolist.jsx";
import MyCalendar from "./Calendar.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todolist />} />

        <Route path="/second" element={<MyCalendar />} />
      </Routes>
    </Router>
  );
}
/*

 */

export default App;
