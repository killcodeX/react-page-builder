import { RouterProvider } from "react-router-dom";
import Router from "./Routes";
import Header from "./Home/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <>
      <Header/>
      <Router />
    </>
  )
}

export default App;
