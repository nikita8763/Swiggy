import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login_page from "./Sections/login_page/login_page";
import Main_Page from "./Pages/Main_Page/Main_Page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login_page" element={<Login_page />}/>
        <Route path="/main_page" element={<Main_Page/>}/>
      </Routes>
    </BrowserRouter>
  );
}