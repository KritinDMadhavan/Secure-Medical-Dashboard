import "../../assets/styles/home_page/style.css";

import decentralized from "../../assets/images/decentralized.png";
import security from "../../assets/images/security.png";
import scalability from "../../assets/images/scalability.png";

import Logo from "./Logo";
import Button from './Button';
import Features from "./Features";


const Home = () => {
    // TODO : Implement form action

    return (
        <div className="parallax1">

            <Logo />

            <Button />

            <Features />

        </div>
    );
};

export default Home;
