import { Route, Routes } from "react-router-dom";
import Layout from "@/layout";
import { AboutPage, Error404, Error500, HomePage } from "@/pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
      <Route path="*" element={<Error404 />} />
      <Route path="/500" element={<Error500 />} />
    </Routes>
  );
};

export default Router;
