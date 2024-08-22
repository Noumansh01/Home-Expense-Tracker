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
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  // this func is for to handle sidebar open and close functionality 
  const [toggle, settoggle] = useState(false);
  function handletoggle() {

    settoggle(!toggle);

  };


// this func is for to handle active link text color 
  function handleactive ({isActive}){
  //  this isactive prop is coming from navlink by default
    return{
      color: isActive? "green": "",
    }
  }

  return (
    <>
      <aside className={` bg-white h-screen flex items-center justify-evenly flex-col fixed m-3 rounded-2xl duration-500 ${toggle ? " w-1/5  " : "w-20"} `}>

        <div className={`top-sidebar-wrapper w-11/12 h-16 bg-orange-400 flex items-center  relative ${toggle ? "justify-between duration-500" : "justify-center"}`}>
          <div className={`bg-amber-700  ${toggle ? " block duration-700 " : "hidden"} `}> <span className='text-base p-2'> Home Expense Tracker </span></div>

          <button id="toggle-sidebar" className= {`w-11 h-8 bg-lime-700 duration-100 ${toggle? "hover:pr-2 rounded-l-[15px]":"hover:pl-2 rounded-r-[15px]" }  `} onClick={handletoggle}>

            {toggle ? <WestIcon fontSize="large" /> : <EastIcon fontSize="large" />}

          </button>
        </div>



        <div className="w-4/5 bg-slate-600 flex items-center">

          <img src="/images/avatar.png" alt="" id="userpic" className="w-12 h-12 m-3 rounded-full bg-lime-600" />
          <div id="username" className={`text-sm ${toggle ? "block" : "hidden"} `}>Nouman Sheikh</div>

        </div>


        <nav className="h-3/5 w-2/3 bg-slate-500 flex items-center justify-center flex-col ">
          <ul className={`w-full h-full bg-amber-300 flex flex-col  ${toggle ? "justify-evenly" : "items-center justify-evenly"} `}>
            <li className="text-lg hover:text-cyan-600"><NavLink to="/" style={handleactive} > <HomeIcon /> <span className={`${toggle ? "inline-block" : "hidden"}`} > Dashboard </span> </NavLink></li>
            <li className="text-lg hover:text-cyan-600"><NavLink to="/items" style={handleactive} > <CategoryIcon /> <span className={`${toggle ? "inline-block" : "hidden"}`}>  Items </span> </NavLink></li>
            <li className="text-lg hover:text-cyan-600"><NavLink to="/shoppinglist" style={handleactive} > <AddShoppingCartIcon /> <span className={`${toggle ? "inline-block" : "hidden"}`}>  Shopping List </span> </NavLink></li>
            <li className="text-lg hover:text-cyan-600"> <NavLink to="/additems" style={handleactive} > <AddCircleOutlineIcon /> <span className={`${toggle ? "inline-block" : "hidden"}`}>  Add Items </span> </NavLink></li>
            <li className="text-lg hover:text-cyan-600"><NavLink to="/login" style={handleactive} > < LogoutIcon /> <span className={`${toggle ? "inline-block" : "hidden"}`}>  Logout </span> </NavLink> </li>
          </ul>
        </nav>

      </aside>

    </>
  )
}

export default Sidebar