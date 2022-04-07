import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/routes/Home";
import Items from "./components/routes/Items";
import ItemCreate from "./components/routes/ItemCreate";
import Item from "./components/routes/Item";
import ItemEdit from "./components/routes/ItemEdit";

function App() {
  return (
    <div className="App">
      {/* With complex applications, sometimes we will need to access the history of the objects closest Route match */}
      {/* in Routerv5 it had withRouter, deprecated in v6. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/create-item" element={<ItemCreate />} />
        <Route path="/items/:id" element={<Item />} />
        <Route path="/items/:id/edit" element={<ItemEdit />} />
      </Routes>
    </div>
  );
}

// function withRouter(Child){
//    return function withRouter(props){
//      const location = useLocation()
//      return <Child { ...props} location={location} />
//    }
// }

export default App;
