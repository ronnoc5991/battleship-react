import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function DummyModule1() {

    var dummy1 = useRef(null);
    
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(dummy1, {opacity: 0}, {opacity: 1, duration: 1, delay: .6}); 
    }, [])

    var bars = []

    function createBars () {
        let i;
        for (i=5; i > 0; --i) {
            let width = Math.random()*100;
            bars.push(width);
        }
    }

    createBars();

    return (
        <div className="DummyModule1" ref={ el => { dummy1 = el } } >
            { bars.map((bar, index) => {
                return <div className="bar" style={{width: `${bar}%`}}></div>
            }) }
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
            <div className="cross-section cross-6"></div>
        </div>
    )
}

export default DummyModule1
