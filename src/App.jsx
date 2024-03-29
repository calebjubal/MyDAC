import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
      </Route>
    </Routes>
  );
};

export default App;
