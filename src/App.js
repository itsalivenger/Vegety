import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import './index.scss';
import FirstSection from "./firstSection/firstSection";
import SecondSection from "./secondSection/secondSection";
import ThirdSection from './thirdSection/thirdSection';

export default function App() {
  return (
    <div>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <Footer />
    </div>
  )
}
