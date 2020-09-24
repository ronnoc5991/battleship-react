import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import WaveSVG from './waves.svg';

const IntroAnimation = () => {

    var container = useRef(null);
    var subContainer = useRef(null);
    var fader = useRef(null);
    var outer = useRef(null);
    var title = useRef(null);

    useEffect(() => {
        var tl = gsap.timeline();
        tl.fromTo(container, {y: 0}, {y: '-250vh', duration: 2, delay: 5});
        tl.fromTo(subContainer, {height: '3vh', width: '3vh', opacity: 0}, {height: '20vmax', width: '20vmax', opacity: 1, duration: 5});
        tl.fromTo(title, {opacity: 0}, {opacity: 1, duration: 1.5});
        tl.fromTo(subContainer, {height: '20vmax', width: '20vmax'}, {height: '150vmax', width: '150vmax', duration: 3, y: '-50%', delay: 2});
        tl.fromTo(fader, {opacity: 0}, {opacity: 1, duration: 1});
        tl.fromTo(outer, {opacity: 1}, {opacity: 0, duration: 1, delay: 2});
        tl.fromTo(outer, {y: 0}, {y: '-100vh', duration: .1});
    }, [])

    return (
        <div class="outer" ref={ el => outer = el }>
            <div class="fade-out" ref={ el => fader = el }></div>
            <div class="container" ref={ el => container = el }>
                <div class="sky">
                    <div class="sun"></div>
                </div>
                <div class="ocean">
                    <div class="reflection"></div>  
                    
                    <div class="wave-container one">
                        <img src={ WaveSVG } alt=""/>
                    </div>
                    <div class="wave-container two">
                        <img src={ WaveSVG } alt=""/>
                    </div>
                    <div class="wave-container three">
                        <img src={ WaveSVG } alt=""/>

                    </div>
                    <div class="wave-container four">
                        <img src={ WaveSVG } alt=""/>
                    </div>
                    <div class="wave-container five">
                        <img src={ WaveSVG } alt=""/>
                    </div>
                    <div class="wave-container six">
                        <img src={ WaveSVG } alt=""/>
                    </div>
                    <div class="wave-container seven">
                        <img src={ WaveSVG } alt=""/>
                    </div>
                    <div class="wave-container eight">
                        <img src={ WaveSVG } alt=""/>
                    </div>
                    <div class="wave-container nine">
                        <img src={ WaveSVG } alt=""/>
                    </div>
                    <div class="wave-container ten">
                        <img src={ WaveSVG } alt=""/>
                    </div>
                </div>
                <div class="darkness">
                    <div className="title" ref={ el => title = el }><h1>SUBMARINE ATTACK</h1></div>
                    <div class="submarine-container" ref={ el => subContainer = el }>
                        <div class="submarine-top">
                            <div class="crossbar"></div>
                        </div>
                        <div class="submarine">
                            <div class="body-crossbar"></div>
                            <div class="body-crossbar-2"></div>
                        </div>
                    </div>
                </div>
            </div>
  </div>
    )
}

export default IntroAnimation;