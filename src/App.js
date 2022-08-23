import Navbar from "./components/Navbar";
import Mininav from "./components/Mininav";
import Categorybar from "./components/Categorybar";
import Intro from "./components/Intro";
import Heading from "./components/Heading";
import FeaturedProducts from "./components/FeaturedProducts";

function App() {
  return (
    <>
      <Navbar />
      <Mininav />
      <Categorybar />
      <Intro />
      <Heading text="FEATURED PRODUCTS" />
      <FeaturedProducts />
    </>
  );
}

export default App;
