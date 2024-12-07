import Navbar from "./navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

const home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-3 mb-3">
        <Jumbotron />
        <div className="mb-3"></div> 
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default home;
