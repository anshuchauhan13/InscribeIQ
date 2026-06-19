import PageViewer from "@/components/common/PageViewer";
import { PartnershipHero } from "../components/PartnershipHero";
import PartnerStats from "../components/PartnerStats";
import PartnerAudience from "../components/PartnerAudience";
import PartnershipProgram from "../components/PartnershipProgram";
import PartnerProcess from "../components/PartnerProcess";
import PartnerTestimonial from "../components/PartnerTestimonial";
import PartnerApplicationForm from "../components/PartnerApplicationForm";

function PartnershipPage() {
  return (
    <PageViewer>
      <PartnershipHero
        title={
          <>
            Partner with <br />
            <span className="text-light-blue">Inscribe IQ</span>
          </>
        }
        subtitle="Join a fast-growing network of consultants, coaching centres and institutions earning attractive commissions by connecting scholars and professionals to world-class academic, publishing and doctorate services."
        primaryCta={{ text: "Apply to Partner", href: "#apply" }}
        secondaryCta={{ text: "See Partnership Tiers", href: "#programs" }}
        badges={[
          "Education Consultants",
          "Coaching Centres",
          "Corporate HR Teams",
          "University Agents",
        ]}
        backgroundImage="/partner/partnerhero.jpg"
      />

      <PartnerStats />
      <PartnerAudience />
      <PartnershipProgram />
      <PartnerProcess />
      <PartnerTestimonial />
      <PartnerApplicationForm />
    </PageViewer>
  );
}

export default PartnershipPage;
