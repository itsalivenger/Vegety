import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import './index.scss';
import FirstSection from "./firstSection/firstSection";
import SecondSection from "./secondSection/secondSection";
import ThirdSection from './thirdSection/thirdSection';
import FourthSection from "./fourthSection/fourthSection";
import FifthSection from "./fifthSection/fifthSection";
import SixthSection from "./sixthSection/sixthSection";

export default function App() {
  return (
    <div>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <Footer />
    </div>
  )
}
