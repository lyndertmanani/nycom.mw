import { Outlet, useLocation } from "react-router-dom";
// import NavBar from "@/components/menu/nav/navigation";
import Footer from "@/components/menu/footer";
 
// import MomentumScroll from "../components/smoothscroll/smoothscroll";

const BaseLayout = () => {
  const location = useLocation();
  const isloginPage = location.pathname.includes("/login");
  // const isSignupPage = location.pathname.includes("/signup");
  const isEventPage = location.pathname.includes("/event");
  const isAwardPage = location.pathname.includes("/Awards");
  const isAdminPage = location.pathname.includes("admin/dashboard");
  const isAdmindashPage = location.pathname.includes("admin");
  const isAdminAccountPage = location.pathname.includes("admin/accounts");
  const is404Page = location.pathname.includes('*');
 

  return (
    <>
      {/* Render Sidebar only on admin routes */}
 
      {/* {!isAwardPage && !isAdminPage && !isAdmindashPage && !isAdminAccountPage && !is404Page &&!isloginPage&&!isSignupPage&& <NavBar />} */}
      {/* <MomentumScroll> */}
      <main>  
          <Outlet />
        </main>
       
        {!isEventPage && !isAwardPage && !isAdminPage && !isAdmindashPage && !isAdminAccountPage && !is404Page && !isloginPage&& <Footer />}
        {/* </MomentumScroll> */}
    </>
  );
};

export default BaseLayout;