import Barner from "../barner";
import Footer from "../footer/index";
import Header from "../header/index";
import Container from "./styled";

import { Slider } from "./data";
import Services from "../cardServices/index";
import CardAdvantage from "../cardAdvantage/index";

const Home = () => {
  return (
    <><Header></Header>
      <Barner Slider={Slider}></Barner>
      <Services />
      <CardAdvantage></CardAdvantage>
      <Footer></Footer>
    </>
  );
};
export default Home;
