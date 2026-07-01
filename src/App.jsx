import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import ScrollToTop from "./components/common/ScrollToTop";
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
import NotFoundPage from "./modules/not-found/pages/NotFoundPage";
import ProgramDetailPage from "./modules/programs/pages/ProgramDetailPage";
import BBA from "./modules/services/pages/UG/BBA";
import BA from "./modules/services/pages/UG/BA";
import BCom from "./modules/services/pages/UG/BCom";
import BCA from "./modules/services/pages/UG/BCA";
import BTech from "./modules/services/pages/UG/BTech";
import BSc from "./modules/services/pages/UG/BSc";
import MBA from "./modules/services/pages/PG/MBA";
import MCom from "./modules/services/pages/PG/MCom";
import MTech from "./modules/services/pages/PG/MTech";
import MA from "./modules/services/pages/PG/MA";
import MCA from "./modules/services/pages/PG/MCA";


function App() {


  return (
    <Router>
      {/* Reset scroll to the top on each route change */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/services" element={<ServicePageLayout />} />

          <Route path="courses" >
            <Route path="dba" element={<DBA />} />
            <Route path="phd" element={<PhD />} />
            <Route path="honary_doctorate" element={<HonaryDoctorate />} />
          </Route>
           <Route path="courses" >
            <Route path="bba" element={<BBA />} />
            <Route path="bsc" element={<BSc />} />
            <Route path="bcom" element={<BCom />} />
            <Route path="ba" element={<BA />} />
             <Route path="bca" element={<BCA />} />
              <Route path="btech" element={<BTech />} />
          </Route>
           <Route path="courses" >
            <Route path="mba" element={<MBA />} />
           
            <Route path="mcom" element={<MCom />} />
            <Route path="mtech" element={<MTech />} />
            <Route path="ma" element={<MA />} />
            <Route path="mca" element={<MCA />} />
          </Route>


          <Route path="publications">
            <Route path="abdc" element={<AbdcPublication />} />
            <Route path="scopus" element={<ScopusPublication />} />
            <Route path="pubmed" element={<PubMedPublication />} />
            <Route path="web_of_science" element={<WebOfSciencePublication />} />
          </Route>

          <Route path="programs/:slug" element={<ProgramDetailPage />} />

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

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Toaster position="top-right" />
    </Router>
  )
}

export default App;