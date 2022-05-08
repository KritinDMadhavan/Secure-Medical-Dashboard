
const Button = () => {
    return (
        <div>
            <div className="row">
                <div className="col-4" />
                <div className="col-4 text-center">

                    <form>
                        <button
                            type="submit"
                            className="btn-lg btn-primary m-2"
                            name="submit"
                        >
                            ACCESS FILES
                        </button>
                    </form>
                </div>
                <div className="col-4" />
            </div>

        </div>
    )
}

export default Button