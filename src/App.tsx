import AboutSection from "./components/about";
import FooterSection from "./components/footer";
import GallerySection from "./components/gallery";
import HeaderLandscape from "./components/header";
import DestinationsSection from "./components/destinations";

function App() {
    return (
        <div className="overflow-hidden">
            <HeaderLandscape />
            <DestinationsSection />
            <AboutSection />
            <GallerySection />
            <FooterSection />
        </div>
    );
}

export default App;
