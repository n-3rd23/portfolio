import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import Layout from "./components/shared/layout/layout";
// comment
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Home />} path="/" />
      </Route>
    </Routes>
  );
}

export default App;
