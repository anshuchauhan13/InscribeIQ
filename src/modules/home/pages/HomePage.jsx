import PageViewer from '@/components/common/PageViewer';
import HeroSection from '../components/HeroSection';
import Impact from '../components/Impact';
import WhyInscribe from '../components/WhyInscribe';
import CoreServices from '../components/CoreServices';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import Outcome from '../components/Outcome';
import UniversityPartnership from '../components/UniversityPartnership';
import LeadForm from '../components/LeadForm';

function HomePage() {
  return (
    <PageViewer>
      <div className="light-gradiant">
        <HeroSection />
        <Impact />
      </div>
      <WhyInscribe />
      <CoreServices />
      <Outcome />
      <Programs />
      <Testimonials />
      <UniversityPartnership />
      <LeadForm />
    </PageViewer>
  )
}

export default HomePage