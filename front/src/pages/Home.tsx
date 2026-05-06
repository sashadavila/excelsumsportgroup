import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import Ecosystem from "../sections/Ecosystem";
import Architecture from "../sections/Architecture";
import CTA from "../sections/CTA";
import Footer from "../components/layout/footer";

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Ecosystem />
            <Architecture />
            <CTA />
            <Footer />
        </>
    );
}

export default Home;