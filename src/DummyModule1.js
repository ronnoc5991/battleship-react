import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function DummyModule1() {

    var dummy1 = useRef(null);
    
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(dummy1, {opacity: 0}, {opacity: 1, duration: 1, delay: .6}); 
    }, [])

    return (
        <div className="DummyModule1" ref={ el => { dummy1 = el } } >
            <div className="bar bar-1"></div>
            <div className="bar bar-2"></div>
            <div className="bar bar-3"></div>
            <div className="bar bar-4"></div>
            <div className="bar bar-5"></div>
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
