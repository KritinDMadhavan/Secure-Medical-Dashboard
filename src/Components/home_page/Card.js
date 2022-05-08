import React from 'react'

const Card = ({title, image, desc}) => {
    return (

            <div className="card-dark col-3 btn-outline-success m-3 pt-3">

                <div
                    className="bg-image hover-overlay ripple"
                    data-mdb-ripple-color="light"
                >
                    <img src={image} className="img-fluid" />
                    <a href="#!">
                        <div
                            className="mask"
                            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                        />
                    </a>
                </div>

                <div className="card-body justify-content-center">
                    <h5 className="card-title text-center pb-3">{title}</h5>
                    <p className="card-text text-center">
                        {desc}
                    </p>
                </div>

            </div>

    )
}

export default Card