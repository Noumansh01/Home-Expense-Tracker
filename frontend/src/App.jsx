import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Items from "./pages/items";
import ShoppingList from "./pages/Shopping-List";
import AddItems from "./pages/Add-Items";
import Login from "./pages/Login";

function App() {
  

  return (
    <>
     <Router>
    <main className="w-full h-screen bg-sky-700">

   <Sidebar/>
   <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/items"  component={Items} />
      <Route path="/shopping-list"  component={ShoppingList } />
      <Route path="/add-items"  component={AddItems  } />
      <Route path="/logout"  component={Login } />
      
      
    </Switch>

   </main>
   </Router>

   </>
  )
}

export default App
