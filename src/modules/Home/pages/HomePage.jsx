import PageViewer from '@/components/common/PageViewer';
import HeroSection from '../components/HeroSection';
import Impact from '../components/Impact';
import WhyInscribe from '../components/WhyInscribe';
import CoreServices from '../components/CoreServices';
import Flow from '../components/Flow';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import Outcome from '../components/Outcome';
import UniversityPartnership from '../components/UniversityPartnership';
import LeadForm from '../components/LeadForm';
import FAQs from '../components/FAQs';
import Resources from '../components/Resources';

function HomePage() {
  return (
    <PageViewer>
      <div className="light-gradiant">
        <HeroSection />
        <Impact />
      </div>
      <WhyInscribe />
      <CoreServices />
      <Flow />
      <Outcome />
      <Programs />
      <Testimonials />
      <UniversityPartnership />
      <LeadForm />
      <Resources />
      <FAQs />
    </PageViewer>
  )
}

export default HomePage