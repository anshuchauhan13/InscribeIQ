import PageViewer from '@/components/common/PageViewer';
import PaymentHero from '../components/PaymentHero';
import PaymentOption from '../components/PaymentOption';
import PaymentDetails from '../components/PaymentDetails';
import PaymentBankDetails from '../components/PaymentBankDetails';
import PaymentWhatsApp from '../components/PaymentWhatsApp';

function PaymentPage() {
  return (
    <PageViewer className="space-y-0">
      <PaymentHero />
      <PaymentOption />
      <PaymentDetails />
      <PaymentBankDetails />
      <PaymentWhatsApp />
    </PageViewer>
  )
}

export default PaymentPage
