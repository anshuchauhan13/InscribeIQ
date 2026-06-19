import { Outlet } from "react-router-dom";
import { NavbarMenu } from "./components/Navbar/NavbarMenu";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/common/BackToTop";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMenu />

      <main className="flex-1 inter">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating scroll-to-top control (appears after scrolling down) */}
      <BackToTop />
    </div>
  );
};

export default Layout;