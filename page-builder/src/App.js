import { RouterProvider } from "react-router-dom";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Router from "./Routes";
import Header from "./Home/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <DndProvider backend={HTML5Backend}>
      <Header/>
      <Router />
    </DndProvider>
  )
}

export default App;
