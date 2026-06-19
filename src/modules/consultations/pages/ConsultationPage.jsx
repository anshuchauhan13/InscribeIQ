import PageViewer from "@/components/common/PageViewer";
import ConsultationHero from "../components/ConsultationHero";
import ConsultationTrust from "../components/ConsultationTrust";
import ConsultationFAQ from "../components/ConsultationFAQ";
import ConsultationCTA from "../components/ConsultationCTA";

function ConsultationPage() {
  return (
    <PageViewer id="top">
      <ConsultationHero />
      <ConsultationTrust />
      <ConsultationFAQ />
      <ConsultationCTA />
    </PageViewer>
  );
}

export default ConsultationPage;
