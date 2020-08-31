import React from 'react';

const ControlPanel1 = () => {

    return (
        <div className="control-panel-1">
            <div className="dummy-buttons-container">
                <div className="screw screw-upper-1"></div>
                <div className="screw screw-upper-2"></div>
                <div className="screw screw-lower-1"></div>
                <div className="screw screw-lower-2"></div>


                {/* <div className="button-light button-1">
                    <div className="dummy-button"></div>
                </div> */}

                <div className="dummy-button dummy-1">
                    <div className="button-light button-1">
                        <h2>3 A</h2>
                    </div>
                </div>
                <div className="dummy-button dummy-1">
                    <div className="button-light button-1">
                        <h2>B.A.</h2>
                    </div>
                </div>

                <div className="dummy-button dummy-2">
                    <div className="button-light button-2">
                        <h2>X</h2>
                    </div>
                </div>
                <div className="dummy-button dummy-2">
                    <div className="button-light button-2">
                        <h2>W</h2>
                    </div>
                </div>

                <div className="dummy-button dummy-3">
                    <div className="button-light button-3">
                        <h2>3</h2>
                    </div>
                </div>
                <div className="dummy-button dummy-3">
                    <div className="button-light button-3">
                        <h2>4</h2>
                    </div>
                </div>

                <div className="dummy-button dummy-4">
                    <div className="button-light button-4">
                        <h2>I.A.</h2>
                    </div>
                </div>
                <div className="dummy-button dummy-4">
                    <div className="button-light button-4">
                        <h2>T.C.R</h2>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ControlPanel1;