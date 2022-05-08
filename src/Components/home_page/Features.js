import Card from './Card';

import decentralized from "../../assets/images/decentralized.png";
import security from "../../assets/images/security.png";
import scalability from "../../assets/images/scalability.png";


const Features = () => {
    return (
        <div>

            <div className="row mt-5 ps-3 pb-5">
                <div className="col-1" />

                <Card title="DECENTRALIZED" image={decentralized}
                    desc="Decentralized architecture with scattered nodes 
                    connected to blockchain, but control of access and 
                    sharing of data lies solely with the user" />


                <Card title="SECURITY" image={security}
                    desc="Multiple authentication features and high level accessiblity.
                    Protocols on Ethereum secure and screen all data for malicious
                    programs" />


                <Card title="SCALABILITY" image={scalability}
                    desc="Highly scalable as nodes are willing to join instead having to
                    depend on local servers. Using crust and polygon, the cost can
                    be made negliible" />

                <div className="col-1" />
            </div>

        </div>
    )
}

export default Features