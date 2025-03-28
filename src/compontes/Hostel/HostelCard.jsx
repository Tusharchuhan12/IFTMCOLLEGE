// src/HostelCard.js
import React from 'react';
import './HostelCard.css'; // Import the CSS file for styling

const HostelCard = ({ name, description, image, rating, available }) => {
    return (
        <>
       
        <div className="hostel-card">
            <img src={image} alt={name} className="hostel-image" />
            <div className="hostel-info">
                <h2 className="hostel-name">{name}</h2>
                <p className="hostel-description">{description}</p>
                <p className="hostel-rating">Rating: {rating} ★</p>
                <p className={`hostel-availability ${available ? 'available' : 'not-available'}`}>
                    {available ? 'Available' : 'Not Available'}
                </p>
            </div>
        </div>
        </>
    );
};

export default HostelCard;