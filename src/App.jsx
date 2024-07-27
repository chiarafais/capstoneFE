import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyHome from "./components/Homepage/MyHome";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path={"/"}
              element={
                <>
                  <MyHome />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
