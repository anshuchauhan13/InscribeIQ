import PublicationPage from "../components/PublicationPage";
import scopus from "../data/scopus";

function ScopusPublication() {
  return <PublicationPage data={scopus} />;
}

export default ScopusPublication;
