import {
  Header,
  Download,
  Features,
  SectionWrapper,
  Newsletter,
} from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <Header />

      <SectionWrapper
        title="Product One"
        description="Product Discription One"
        showBtn
        mockupImg={assets.Img}
        banner="banner"
      />




      <SectionWrapper
        title="Fourt Product"
        description="This product contains two screens.."
        mockupImg={assets.Img}
        banner="banner02"
        showBtn
      />
      <SectionWrapper
        title="Product Two"
        description="Product Discription Two"
        showBtn
        mockupImg={assets.Img}
        reverse
      />
      
      <SectionWrapper
        title="Product Three"
        description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.Img}
        reverse
        showBtn
        banner="banner3"
      />

      <SectionWrapper
        title="Fourt Product"
        description="This product contains two screens.."
        mockupImg={assets.Img}
        banner="banner02"
        showBtn
      />


      <Features />
      <Download />

      <Newsletter />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by{" "}
          <span className="text-black font-bold"><a href="fg.kl" target="_blank">ASGP Glorious Tech</a></span>{" "}
        </p>
      </div>
    </>
  );
};

export default App;
