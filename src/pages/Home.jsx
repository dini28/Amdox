import UserPaths from '../components/Home/UserPaths';
import HomeFeatures from '../components/Home/HomeFeatures';
import HomeCTA from '../components/Home/HomeCTA';
import HomeHero from '../components/Home/HomeHero';

const Home = () => {
    return (
        <div className="min-h-screen bg-white selection:bg-green-500/30">
            <HomeHero />
            <UserPaths />
            <HomeFeatures />
            <HomeCTA />
        </div>
    );
};

export default Home;