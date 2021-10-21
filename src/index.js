import React from "react";
import ReactDOM from "react-dom";
import SearchPage from "./pages/Search";
import reportWebVitals from "./reportWebVitals";
import { ThemeContextProvider } from "./contexts/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SearchPage />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
