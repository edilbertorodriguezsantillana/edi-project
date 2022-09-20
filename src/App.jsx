import Dealers from "./components/Dealers";
import DownloadSection from "./components/DownloadSection";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import FormSection from "./components/FormSection";
import Header from "./components/Header";
import StepsSection from "./components/StepsSection";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <FormSection />
      <StepsSection />
      <Testimonials title={"Testimoniales"} />
      <Favorites title={"Restaurantes Favoritos"} />
      <Dealers title={"Gana dinero con AppComida"} />
      <DownloadSection />
      <Footer />
    </>
  );
}

export default App;
