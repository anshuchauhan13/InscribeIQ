import SectionViewer from '@/components/common/SectionViewer';
import ServicesHeroSectionFirst from '../components/ServicesHeroSectionFirst';

function HonaryDoctorate() {
    return (
        <SectionViewer className="py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left — hero content */}
                <ServicesHeroSectionFirst />

                {/* Right — placeholder for image / form */}
                <div className="hidden lg:flex items-center justify-center rounded-2xl bg-muted min-h-[520px]">
                    <span className="text-muted-foreground text-sm">Right side content</span>
                </div>

            </div>
        </SectionViewer>
    );
}

export default HonaryDoctorate;
