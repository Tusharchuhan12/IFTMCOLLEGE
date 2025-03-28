// CardSlider.js
import React from 'react';
import Slider from 'react-slick';
import './CardSlider.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = ({}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
        ],
    };

    const cards = [
        {
            id: 1,
            title: '10 LPA',
            description: 'HIGHEST PACKAGE.',
         
        },
        {
            id: 2,
            title: '10000 +',
            description: 'STUDENT.',
       
        },
        {
            id: 3,
            title: '80%',
            description: 'PLACEMENT.',
          
        },
        {
            id: 4,
            title: '100+',
            description: ' COLLABORATION.',
        
        },
    ];

    return (
        <>
       
        <div className="card-slider">
            <Slider {...settings}>
                {cards.map((card) => (
                    <div key={card.id}>
                        <center>
                        <div className="card">
                            
                            <div className="card-content">
                                <h2 className="card-title">{card.title}</h2>
                                <p className="card-description">{card.description}</p>
                            </div>
                            
                        </div>
                        </center>
                    </div>
                ))}
            </Slider>
        </div>
        </>
    );
};

export default CardSlider;