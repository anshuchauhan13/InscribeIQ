import { useParams } from "react-router-dom";
import { getProgram } from "../data/programs.data";
import ProgramDetail from "../components/ProgramDetail";
import NotFoundPage from "@/modules/not-found/pages/NotFoundPage";

// Single dynamic route for all certification programs. Looks the dataset up by
// slug; an unknown slug renders the shared 404 page.
export default function ProgramDetailPage() {
  const { slug } = useParams();
  const program = getProgram(slug);

  if (!program) return <NotFoundPage />;

  return <ProgramDetail program={program} />;
}
