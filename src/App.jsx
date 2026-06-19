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
import AbdcPublication from "./modules/services/publications/pages/AbdcPublication";
import ScopusPublication from "./modules/services/publications/pages/ScopusPublication";
import PubMedPublication from "./modules/services/publications/pages/PubMedPublication";
import WebOfSciencePublication from "./modules/services/publications/pages/WebOfSciencePublication";
import ThesisWriting from "./modules/services/writing/pages/ThesisWriting";
import DissertationWriting from "./modules/services/writing/pages/DissertationWriting";
import ResearchPaperWriting from "./modules/services/writing/pages/ResearchPaperWriting";
import OtherWriting from "./modules/services/writing/pages/OtherWriting";


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

          <Route path="publications">
            <Route path="abdc" element={<AbdcPublication />} />
            <Route path="scopus" element={<ScopusPublication />} />
            <Route path="pubmed" element={<PubMedPublication />} />
            <Route path="web_of_science" element={<WebOfSciencePublication />} />
          </Route>

          <Route path="writing">
            <Route path="thesis" element={<ThesisWriting />} />
            <Route path="dissertation" element={<DissertationWriting />} />
            <Route path="research_paper" element={<ResearchPaperWriting />} />
            <Route path="other" element={<OtherWriting />} />
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