import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyHome from "./components/Homepage/MyHome";
import MyHomeBack from "./components/BackOffice/MyHomeBack";
import MyNavbarBack from "./components/BackOffice/HeaderBack/MyNavbarBack";
import MyBeachBack from "./components/BackOffice/PagesBack/MyBeachBack";
import MyReservationBack from "./components/BackOffice/PagesBack/MyReservationBack";
import MyUserBack from "./components/BackOffice/PagesBack/MyUserBack";

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
            <Route
              path={"/admin"}
              element={
                <>
                  <MyNavbarBack />
                  <MyHomeBack />
                </>
              }
            />
            <Route
              path={"/admin/beach"}
              element={
                <>
                  <MyNavbarBack />
                  <MyBeachBack />
                </>
              }
            />
            <Route
              path={"/admin/reservation"}
              element={
                <>
                  <MyNavbarBack />
                  <MyReservationBack />
                </>
              }
            />
            <Route
              path={"/admin/users"}
              element={
                <>
                  <MyNavbarBack />
                  <MyUserBack />
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
