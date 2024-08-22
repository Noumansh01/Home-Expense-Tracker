import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Items from "./pages/Items";
import ShoppingList from "./pages/Shopping-List";
import AddItems from "./pages/Add-Items";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./components/Layout/AppLayout";


function App() {


      const router = createBrowserRouter([

       {
        path: "/",
        element: <AppLayout/>,
        errorElement: <ErrorPage/>,
        children: [

         {
          path: "/",
        element: <Dashboard/>,
         },
          {
            path: "/items",
            element: <Items/>,
           },
    
           {
            path: "/shoppinglist",
            element: <ShoppingList/>,
           },
    
           {
            path: "/additems",
            element: <AddItems/>,
           },
           {
            path: "/login",
            element: <Login/>,
           },
    
        ]
       },

     
      

      ]);

      return <RouterProvider router={router} />
      
      // return (
      //    <main className="w-full h-screen bg-sky-700"> 

      // </main> 
      // )
      

};

export default App
