import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CompanyLogos from "@/components/CompanyLogos";
import LiveActivity from "@/components/LiveActivity";
import Testimonials from "@/components/Testimonials";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <HeroSection />
            <CompanyLogos />
            <LiveActivity />
            <Testimonials />
        </div>
    );
};

export default Index;