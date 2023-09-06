import { Routes, Route } from "react-router-dom";
import PageBuilder from "./Home/pageBuilder";
import Preview from "./Home/preview";
import JSONGenerator from "./Home/jsonGenerator";

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<PageBuilder/>} />
        <Route path="/preview" element={<Preview/>} />
        <Route path="/json-generator" element={<JSONGenerator/>} />
      </Routes>
  )
}

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PageBuilder/>,
//   },
//   {
//     path: "/preview",
//     element: <Preview/>,
//   },
//   {
//     path: "/json-generator",
//     element: <JSONGenerator/>,
//   }
// ]);

export default Router;