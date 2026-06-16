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
import ContactUsPage from "./modules/contact-us/pages/ContactUsPage";
import PartnershipPage from "./modules/partner-with-us/pages/PartnershipPage";
import FaqsPage from "./modules/faqs/pages/FaqsPage";
import ConsultationPage from "./modules/consultations/pages/ConsultationPage";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/services" element={<ServicePageLayout />} />

          <Route path="courses" >
            <Route path="dba" element={<DBA />} />
            <Route path="phd" element={<PhD />} />
            <Route path="honary_doctorate" element={<HonaryDoctorate />} />
          </Route>

          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/partner_with_us" element={<PartnershipPage />} />
          <Route path="/faqs" element={<FaqsPage />} />

          <Route path="/about" element={<AboutUsPage />} />

          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/contact_us" element={<ContactUsPage />} />
        </Route>
      </Routes>

      <Toaster position="top-right" />
    </Router>
  )
}

export default App;