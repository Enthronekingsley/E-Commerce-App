import Hero from "../component/Hero.tsx";
import LatestCollection from "../component/LatestCollection.tsx";
import BestSeller from "../component/BestSeller.tsx";
import OurPolicy from "../component/OurPolicy.tsx";
import NewsletterBox from "../component/NewsletterBox.tsx";


const Home = () => {
    return (
        <div>
            <Hero />
            <LatestCollection />
            <BestSeller />
            <OurPolicy />
            <NewsletterBox />
        </div>
    )
}
export default Home;