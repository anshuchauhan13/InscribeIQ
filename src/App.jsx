import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from "./Layout";

import HomePage from "./modules/home/pages/HomePage";
import ServicePageLayout from "./modules/services/pages/ServicePageLayout";
import HonaryDoctorate from "./modules/services/pages/HonaryDoctorate";
import AboutUsPage from "./modules/about/pages/AboutUsPage";
import PaymentPage from "./modules/payment/pages/PaymentPage";
import PhD from "./modules/services/pages/PhD";
import DBA from "./modules/services/pages/DBA";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

       
            <Route path="/courses/honorary-doctorate" element={<HonaryDoctorate />} />
             <Route path="/courses/DBA" element={<DBA />} />
              <Route path="/courses/Phd" element={<PhD />} />

          <Route path="about" element={<AboutUsPage />} />
          <Route path="payment" element={<PaymentPage />} />
        </Route>
      </Routes>

      <Toaster position="top-right" />
    </Router>
  );
}

export default App;