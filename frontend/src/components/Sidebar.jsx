// MUI icons start here 
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
// MUI icons end here 

import { useState } from 'react';

const Sidebar = () => {

    const [toggle, settoggle]= useState(false);
      function handletoggle () {
            settoggle(!toggle);
      }

  return (
    <>
    <aside className="w-1/5 h-screen bg-white flex items-center justify-evenly flex-col fixed ">

   <div className="top-sidebar-wrapper w-full h-16 bg-orange-400 flex items-center justify-between relative">
   <div className="bg-amber-700 text-xl p-2">Home Expense Tracker</div>

   <button id="toggle-sidebar" className="w-11 h-8 bg-red-400" onClick={handletoggle}>

    {toggle? <WestIcon fontSize="large" /> : <EastIcon fontSize="large"/> }
    
         </button>
   </div>
 


    <div className="w-4/5 bg-slate-600 flex items-center">
       
       <img src="/images/avatar.png" alt="" id="userpic" className="w-12 h-12 m-3 rounded-full bg-lime-600" />
       <div id="username" className="text-sm ">Nouman Sheikh</div>

    </div>


    <nav className="h-3/5 w-2/3 bg-slate-500 flex items-center justify-center flex-col ">
        <ul className="w-full h-full bg-amber-300 flex flex-col justify-evenly">
            <li className="text-lg hover:text-cyan-600"><a href="#"> <HomeIcon/> Dashboard </a></li>
            <li className="text-lg hover:text-cyan-600"><a href="#"> <CategoryIcon/> Items </a></li>
            <li className="text-lg hover:text-cyan-600"><a href="#"> <AddShoppingCartIcon/> Shopping List </a></li>
            <li className="text-lg hover:text-cyan-600"> <a href="#"> <AddCircleOutlineIcon/> Add Items </a></li>
            <li className="text-lg hover:text-cyan-600"><a href="#"> < LogoutIcon/> Logout </a></li>
        </ul>
    </nav>

    </aside>
    
    </>
  )
}

export default Sidebar