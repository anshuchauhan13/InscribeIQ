import { Outlet } from "react-router-dom";
import { NavbarMenu } from "./components/Navbar/NavbarMenu";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMenu />

      <main className="flex-1 inter">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;