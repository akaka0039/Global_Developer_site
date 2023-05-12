import React from "react";

function Index(props) {
    console.log(props.test);
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        {props.test}
                        <div className="card-header text-gray-100">
                            Index Component
                        </div>
                        <div className="card-body">I'm an home component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
