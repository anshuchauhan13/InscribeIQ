import PageViewer from "@/components/common/PageViewer";
import PolicyPage from "../components/PolicyPage";
import refundPolicy from "../data/refundPolicy";

function RefundPolicy() {
  return (
    <PageViewer className="bg-gradient-to-b from-muted/50 via-muted/20 to-transparent">
      <PolicyPage {...refundPolicy} />
    </PageViewer>
  );
}

export default RefundPolicy;
