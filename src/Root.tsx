import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<h1>404 Error: Page Not Found</h1>} />
      </Routes>
    </HashRouter>
  );
};
