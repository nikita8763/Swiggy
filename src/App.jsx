import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login_page from "./components/login_page/login_page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login_page" element={<Login_page />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}