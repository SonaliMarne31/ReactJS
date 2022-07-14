import React, { useState } from "react";

export default function ImageSlideShow(props) {

    const [slide, setSlide] = useState('1');

    const showSlides = (event) => {
        const buttonName = event.target.id;
        let id = slide;
        if(buttonName === 'left') {
            id = parseInt(id) - 1;
        } else {
            id = parseInt(id) + 1;
        }
        id = id < 1 ? '3' : (id > 3) ? '1' : id.toString();
        setSlide(id); 
    }

    return(
        <div className="center-text">
            <h3>Welcome to my Fun Page</h3>
            <div className="slideshow-container">
                <h3>Image SlideShow</h3>
                <div className="flex-column">
                    <button className="left" id='left' onClick={showSlides}>L</button>
                    <div className={`mySlides ${slide === '1' ? 'show' : 'hide'}`} id='1'>
                        <img className="responsive" src={require('../images/img_lights_wide.jpeg')}></img>
                        <div className="text">Caption One</div>
                    </div>
                    <div className={`mySlides ${slide === '2' ? 'show' : 'hide'}`} id='2'>
                        <img className="responsive" src={require('../images/img_nature_wide.jpeg')}></img>
                        <div className="text">Caption Two</div>
                    </div>
                    <div className={`mySlides ${slide === '3' ? 'show' : 'hide'}`} id='3'>
                        <img className="responsive" src={require('../images/img_snow_wide.jpeg')}></img>
                        <div className="text">Caption Three</div>
                    </div>
                    <button className="right" id='right' onClick={showSlides}>R</button>
                </div>
            </div>
        </div>
    );
}