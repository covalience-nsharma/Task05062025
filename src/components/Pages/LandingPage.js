import CodeGame from "../CodeGame/CodeGame";
import ColorPicker from "../ColorPicker/ColorPicker";
import Quiz from "../E&Q/Quiz";
import Gifbox1 from "../GifBox/GIFBOX1/Gifbox1";
import Gifbox2 from "../GifBox/GIFBOX2/GifBox2";
import Gifbox3 from "../GifBox/GIFBOX3/Gifbox3";
import HowTo from "../HowToSection/HowTo";
import Kickstart from "../Kickstart/Kickstart";
import LanguagesRender from "../LanguageBox/LanguagesRender";
import LanguageBox2Render from "../LanguageBox2/LanguageBox2Render";
import LanguageBox2Render2 from "../LanguageBox2/LanguageBox2Render2";
import LanguageBox2Render3 from "../LanguageBox2/LanguageBox2Render3";
import MainLanguageRender from "../Main-languages/MainLanguageRender";
import MainPage from "../Main/MainPage";
import ProUser from "../ProUser/ProUser";
import WebTemp from "../WebTemplate/WebTemp";
import NavHome from "../navbar/Navbar";
import Footer from "../Footer/Footer";

function LandingPage() {
    return (
      <>
        <NavHome />
        <MainPage />
        <MainLanguageRender />
        <LanguagesRender />
        <LanguageBox2Render />
        <LanguageBox2Render2 />
        <LanguageBox2Render3 />
        <Gifbox1 />
        <Gifbox2 />
        <Gifbox3 />
        <ProUser />
        <ColorPicker />
        <CodeGame />
        <Quiz />
        <WebTemp />
        <Kickstart />
        <HowTo />
        <Footer />
      </>
  );
  }
  
  export default LandingPage;