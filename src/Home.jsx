import Navbar from './Navbar';
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div className="container mt-3 mb-3">
                    <Jumbotron />
                    <div className="mb-3"></div>
                    <Cards />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home