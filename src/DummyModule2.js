import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'


function DummyModule2() {

    var module2 = useRef(null);

    useEffect(() => {
        gsap.fromTo(module2, {opacity: 0}, {opacity: 1, duration: 1, delay: .6}); 
    }, [])

    var bars = []

    function createBars () {
        let i;
        for (i=100; i > 0; --i) {
            let height = Math.random()*70;
            bars.push(height);
        }
    }

    createBars();

    return (
        <div className="DummyModule2" ref={ el => { module2 = el } }>
            { bars.map((bar) => {
                return <div className="bar" style={{height: `${bar}%`}} ></div>
            } ) }
            <div className="cross-section cross-1">
                <div className="cross-med"></div>
                <div className="cross-sm"></div>
                <div className="cross-med"></div>
            </div>
            <div className="cross-section cross-2">
                <div className="cross-med"></div>
                <div className="cross-sm"></div>
                <div className="cross-med"></div>
            </div>
            <div className="cross-section cross-3">
                <div className="cross-med"></div>
                <div className="cross-sm"></div>
                <div className="cross-med"></div>
            </div>
            <div className="cross-section cross-4">
                <div className="cross-med"></div>
                <div className="cross-sm"></div>
                <div className="cross-med"></div>
            </div>
            <div className="cross-section cross-5">
                <div className="cross-med"></div>
                <div className="cross-sm"></div>
                <div className="cross-med"></div>
            </div>
        </div>
    )
}

export default DummyModule2
