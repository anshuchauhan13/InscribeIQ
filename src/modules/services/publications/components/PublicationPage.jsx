import { useEffect } from "react";
import PageViewer from "@/components/common/PageViewer";
import PublicationHero from "./PublicationHero";
import PublicationTrustStrip from "./PublicationTrustStrip";
import PublicationWhyChoose from "./PublicationWhyChoose";
import JournalOptions from "./JournalOptions";
import PublicationProcess from "./PublicationProcess";
import WhoCanApply from "./WhoCanApply";
import SubjectAreas from "./SubjectAreas";
import PublicationWhyInscribe from "./PublicationWhyInscribe";
import AuthorNote from "./AuthorNote";
import PublicationLeadForm from "./PublicationLeadForm";
import PublicationFaq from "./PublicationFaq";
import PublicationFinalCta from "./PublicationFinalCta";

// Shared composition for every publication service page. Each route passes its
// own `data` object (abdc / scopus / pubmed / webOfScience) and the sections
// render themselves from it — one layout, four datasets.
export default function PublicationPage({ data }) {
  // Land at the top whenever the active service changes.
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [data.slug]);

  return (
    <PageViewer>
      <PublicationHero data={data} />
      <PublicationTrustStrip data={data} />
      <PublicationWhyChoose data={data} />
      <JournalOptions data={data} />
      <PublicationProcess data={data} />
      <WhoCanApply data={data} />
      <SubjectAreas data={data} />
      <PublicationWhyInscribe data={data} />
      <AuthorNote data={data} />
      <PublicationLeadForm data={data} />
      <PublicationFaq data={data} />
      <PublicationFinalCta data={data} />
    </PageViewer>
  );
}
