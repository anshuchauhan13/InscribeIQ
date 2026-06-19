import PageViewer from "@/components/common/PageViewer";
import FaqsHero from "../components/FaqsHero";
import FaqsSection from "../components/FaqsSection";

function FaqsPage() {
  return (
    <PageViewer className="bg-gradient-to-b from-muted/50 via-muted/20 to-transparent">
      <FaqsHero />
      <FaqsSection />
    </PageViewer>
  );
}

export default FaqsPage;
