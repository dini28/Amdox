import AboutHero from '../components/About/AboutHero';
import AboutMission from '../components/About/AboutMission';
import AboutContact from '../components/About/AboutContact';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white">
            <AboutHero />
            <AboutMission />
            <AboutContact />
        </div>
    );
};

export default AboutUs;
