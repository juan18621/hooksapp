import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, AboutPage, Navbar } from "./";
import { UserProvider } from "./context";

export const MainApp = () => {
  return (
    <>
      <UserProvider>
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<AboutPage />} />
          {/* <Route path="/*" element={<LoginPage/>}/> */}
          <Route path="/*" element={<Navigate to="about" />} />
        </Routes>
      </UserProvider>
    </>
  );
};
