import Navbar from "./components/Navbar";
import Mininav from "./components/Mininav";
import Categorybar from "./components/Categorybar";
import Intro from "./components/Intro";
import Heading from "./components/Heading";
import FeaturedProducts from "./components/FeaturedProducts";
import Hotaccess from "./components/Hotaccess";
import Topfooter from "./components/footers/Topfooter";
import Middlefooter from "./components/footers/Middlefooter";

function App() {
  return (
    <>
      <Navbar />
      <Mininav />
      <Categorybar />
      <Intro />
      <Heading text="FEATURED PRODUCTS" />
      <FeaturedProducts />
      <Heading text="HOT ACCESSORIES" />
      <Hotaccess />
      <Topfooter />
      <Middlefooter />
    </>
  );
}

export default App;
