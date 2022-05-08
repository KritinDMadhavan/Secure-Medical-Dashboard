import seperator from "../../assets/images/separator.png";
import howlsafe from "../../assets/images/howsafe.png";


const Logo = () => {
    return (
        <div>

            <div className="text-center">
                <img
                    src={howlsafe}
                    style={{ height: "600px" }}
                    className="m-lg-0"
                    lt
                />
            </div>

            <div className="col-4" />

            <div className="row m-0 p-0">
                <div className="col-3 m-0 p-0" />
                <div className="col-6 m-0 p-0">
                    <img
                        src={seperator}
                        style={{ width: "100%" }}
                        alt=""
                    />
                </div>
                <div className="col-3" />
            </div>

        </div>
    )
}

export default Logo