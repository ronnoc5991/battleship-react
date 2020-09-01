import React, { useState } from 'react';

const ControlPanel1 = () => {

    const [button1, setButton1] = useState(true);
    const [button2, setButton2] = useState(true);
    const [button3, setButton3] = useState(true);
    const [button4, setButton4] = useState(true);
    const [button5, setButton5] = useState(true);
    const [button6, setButton6] = useState(true);
    const [button7, setButton7] = useState(true);
    const [button8, setButton8] = useState(true);
    const [button9, setButton9] = useState(true);
    const [button10, setButton10] = useState(true);
    const [button11, setButton11] = useState(true);
    const [button12, setButton12] = useState(true);


    function toggleLight (number) {
        switch (number) {
            case 1:
                setButton1(!button1);
                break;
            case 2:
                setButton2(!button2);
                break;
            case 3:
                setButton3(!button3);
                break;
            case 4:
                setButton4(!button4);
                break;
            case 5:
                setButton5(!button5);
                break;
            case 6:
                setButton6(!button6);
                break;
            case 7:
                setButton7(!button7);
                break;
            case 8:
                setButton8(!button8);
                break;
            case 9:
                setButton9(!button9);
                break;
            case 10:
                setButton10(!button10);
                break;
            case 11:
                setButton11(!button11);
                break;
            case 12:
                setButton12(!button12);
                break;
            default:
                break;
        }
    }

    return (
        <div className="control-panel-1">
            <div className="dummy-buttons-container">
                <div className="screw screw-upper-1"></div>
                <div className="screw screw-upper-2"></div>
                <div className="screw screw-lower-1"></div>
                <div className="screw screw-lower-2"></div>

                <div className="dummy-button dummy-1">
                    <div className={`button-light button-1 ${ button1 ? '' : 'off' }`} onClick={ () => toggleLight(1) } >
                        <h2>3 A</h2>
                    </div>
                </div>
                <div className="dummy-button dummy-1">
                    <div className={`button-light button-1 ${ button2 ? '' : 'off' }`} onClick={ () => toggleLight(2) }>
                        <h2>B.A.</h2>
                    </div>
                </div>
                <div className="dummy-button dummy-1">
                    <div className={`button-light button-1 ${ button3 ? '' : 'off' }`} onClick={ () => toggleLight(3) }>
                        <h2>C.W.</h2>
                    </div>
                </div>

                <div className="dummy-button dummy-2">
                    <div className={`button-light button-2 ${ button4 ? '' : 'off' }`} onClick={ () => toggleLight(4) }>
                        <h2>X.N.</h2>
                    </div>
                </div>
                <div className="dummy-button dummy-2">
                    <div className={`button-light button-2 ${ button5 ? '' : 'off' }`} onClick={ () => toggleLight(5) }>
                        <h2>W 2</h2>
                    </div>
                </div>
                <div className="dummy-button dummy-2">
                    <div className={`button-light button-2 ${ button6 ? '' : 'off' }`} onClick={ () => toggleLight(6) }>
                        <h2>3 F</h2>
                    </div>
                </div>

                <div className="dummy-button dummy-3">
                    <div className={`button-light button-3 ${ button7 ? '' : 'off' }`} onClick={ () => toggleLight(7) }>
                        <h2>3</h2>
                    </div>
                </div>
                <div className="dummy-button dummy-3">
                    <div className={`button-light button-3 ${ button8 ? '' : 'off' }`} onClick={ () => toggleLight(8) }>
                        <h2>4</h2>
                    </div>
                </div>
                <div className="dummy-button dummy-3">
                    <div className={`button-light button-3 ${ button9 ? '' : 'off' }`} onClick={ () => toggleLight(9) }>
                        <h2>5</h2>
                    </div>
                </div>

                <div className="dummy-button dummy-4">
                    <div className={`button-light button-4 ${ button10 ? '' : 'off' }`} onClick={ () => toggleLight(10) }>
                        <h2>I.A.</h2>
                    </div>
                </div>
                <div className="dummy-button dummy-4">
                    <div className={`button-light button-4 ${ button11 ? '' : 'off' }`} onClick={ () => toggleLight(11) }>
                        <h2>T.C.R</h2>
                    </div>
                </div>
                <div className="dummy-button dummy-4">
                    <div className={`button-light button-4 ${ button12 ? '' : 'off' }`} onClick={ () => toggleLight(12) }>
                        <h2>P.D.</h2>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ControlPanel1;