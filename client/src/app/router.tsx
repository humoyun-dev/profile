import { Route, Routes } from "react-router-dom";
import Layout from "@/layout";
import { AboutPage, HomePage } from "@/pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
