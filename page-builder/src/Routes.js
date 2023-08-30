import {
  createBrowserRouter,
} from "react-router-dom";
import PageBuilder from "./Home/pageBuilder";
import Preview from "./Home/preview";
import JSONGenerator from "./Home/jsonGenerator";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <PageBuilder/>,
  },
  {
    path: "/preview",
    element: <Preview/>,
  },
  {
    path: "/json-generator",
    element: <JSONGenerator/>,
  }
]);

export default Router;