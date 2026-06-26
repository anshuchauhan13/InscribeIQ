import { useEffect } from "react";
import PageViewer from "@/components/common/PageViewer";
import WritingHero from "./WritingHero";
import ProblemAware from "./ProblemAware";
import JourneyRoadmap from "./JourneyRoadmap";
import SupportItems from "./SupportItems";
import SupportPackages from "./SupportPackages";
import QualityEnhancement from "./QualityEnhancement";
import FormattingSupport from "./FormattingSupport";
import SpecializedSupport from "./SpecializedSupport";
import WhoThisIsFor from "./WhoThisIsFor";
import DomainsSupported from "./DomainsSupported";
import WritingWhyChoose from "./WritingWhyChoose";
import EthicalNote from "./EthicalNote";
import WritingLeadForm from "./WritingLeadForm";
import WritingFaq from "./WritingFaq";
import WritingFinalCta from "./WritingFinalCta";

// Shared composition for every writing service page. Each route passes its own
// `data` object (thesis / dissertation / researchPaper / otherWriting) and the
// sections render themselves from it — one layout, four datasets.
export default function WritingPage({ data }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [data.slug]);

  return (
    <PageViewer>
      <WritingHero data={data} />
      <ProblemAware data={data} />
      <JourneyRoadmap data={data} />
      <SupportItems data={data} />
      <SupportPackages data={data} />
      <QualityEnhancement data={data} />
      <FormattingSupport data={data} />
      <SpecializedSupport data={data} />
      <WhoThisIsFor data={data} />
      <DomainsSupported data={data} />
      <WritingWhyChoose data={data} />
      <EthicalNote data={data} />
      <WritingLeadForm data={data} />
      <WritingFaq data={data} />
      <WritingFinalCta data={data} />
    </PageViewer>
  );
}
