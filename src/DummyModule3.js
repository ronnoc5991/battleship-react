import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

function DummyModule3() {

    var module3 = useRef(null);

    useEffect(() => {
        gsap.fromTo(module3, {opacity: 0}, {opacity: 1, duration: 1, delay: .6}); 
    }, [])

    var circles = [];

    function createCircles () {
        for (let i = 1; i < 19; ++i) {
            circles.push(i);
        }
    }

    function setAnimation (number) {
        return {
            animation: `spin 7200ms linear -${number * 720}ms infinite`
        }
    }

    createCircles();

    return (
        <div className="DummyModule3" ref={ el => {module3 = el} }>
            <div className="sphere">
                { circles.map((circle, index) => {
                    return <div className={`circle circle-${circle}`} style={setAnimation(index)} ></div>
                }) }
            </div>
        </div>
    )
}

export default DummyModule3
