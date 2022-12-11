import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./Styles/GlobalStyle";
import MainPage from "./MainPage/MainPage";

function App() {
  const [goMain, setGoMain] = useState(true);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={<MainPage goMain={goMain} setGoMain={setGoMain} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
