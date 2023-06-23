import AboutSection from "./components/about";
import FooterSection from "./components/footer";
import GallerySection from "./components/gallery";
import HeaderLandscape from "./components/header";
import DestinationsSection from "./components/destinations";
import { useState } from 'react'

function App() {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div className={`overflow-hidden ${darkMode ? 'dark' : 'light'}`}>
            <HeaderLandscape darkMode={darkMode} setDarkMode={setDarkMode} />
            <DestinationsSection />

            <div className="dark:bg-[#000000a2]">
                <AboutSection />
            </div>

            <GallerySection />
            <FooterSection />
        </div>
    );
}

export default App;
