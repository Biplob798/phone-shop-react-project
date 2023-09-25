import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Components/Header/NavBar/NavBar";
import { useEffect } from "react";


const MainLayOut = () => {

  const loc = useLocation();

  console.log(loc);

  useEffect(()=>{
console.log(loc.pathname)

if(loc.pathname === '/'){
 document.title = `phone-Home`
}
  else{
    document.title = ` phone ${loc.pathname.replace('/','-')}`
  }

  },[loc.pathname])
  return (
    <div>
      <div className="max-w-[1100px] mx-auto">
        <NavBar></NavBar>
        <div className="py-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayOut;
