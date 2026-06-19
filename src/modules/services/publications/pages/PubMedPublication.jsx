import PublicationPage from "../components/PublicationPage";
import pubmed from "../data/pubmed";

function PubMedPublication() {
  return <PublicationPage data={pubmed} />;
}

export default PubMedPublication;
