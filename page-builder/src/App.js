import {
  createBrowserRouter,
} from "react-router-dom";
import PageBuilder from "./Home/pageBuilder";
import Preview from "./Home/preview";
import JSONGenerator from "./Home/jsonGenerator";
import 'bootstrap/dist/css/bootstrap.min.css';

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
