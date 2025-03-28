// src/App.js
import React from 'react';
import HostelCard from './HostelCard';
import './Hostel.css'; // Import the CSS file for global styles

const Hostel = () => {
    const hostels = [
        {
            name: 'Asha kaushik',
            description: 'A cozy place to stay with great amenities.',
            image: 'Asha.jpeg',
            rating: 4.5,
            available: true,
        },
        {
            name: 'vkh',
            description: 'Affordable and comfortable accommodation.',
            image: 'Hostelv.jpeg',
            rating: 4.0,
            available: true,
        },
        {
            name: 'raman',
            description: 'A vibrant community with friendly staff.',
            image: 'Raman.jpeg',
            rating: 4.8,
            available: true,
        },
    ];

    return (
        <div className="app">
            <h1>College Hostels</h1>
            <div className="hostel-list">
                {hostels.map((hostel, index) => (
                    <HostelCard
                        key={index}
                        name={hostel.name}
                        description={hostel.description}
                        image={hostel.image}
                        rating={hostel.rating}
                        available={hostel.available}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hostel;