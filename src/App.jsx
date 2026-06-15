import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Layout from './Layout'
import ServicePageLayout from "./modules/services/pages/ServicePageLayout";
import AboutUsPage from "./modules/about/pages/AboutUsPage";
import PaymentPage from "./modules/payment/pages/PaymentPage";
import HomePage from "./modules/home/pages/HomePage";
import HonaryDoctorate from "./modules/services/pages/HonaryDoctorate";
import DBA from "./modules/services/pages/DBA";
import PhD from "./modules/services/pages/PhD";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/services" element={<ServicePageLayout />} />

          <Route path="courses" >
            <Route index element={<DBA />} />
            <Route path="phd" element={<PhD />} />
            <Route path="honary-doctorate" element={<HonaryDoctorate />} />
          </Route>


          <Route path="/about" element={<AboutUsPage />} />

          <Route path="/payment" element={<PaymentPage />} />
        </Route>
      </Routes>

      <Toaster position="top-right" />
    </Router>
  )
}

export default App;