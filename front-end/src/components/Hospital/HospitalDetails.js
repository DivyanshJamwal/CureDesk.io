// src/components/HospitalDetails.js

import React, { useEffect, useState } from 'react';
// import Rating from '@mui/material/Rating';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './HospitalDetails.css';

const API_BASE_URL = 'https://hospital-mg.onrender.com/api/v1'; // Update if needed

function HospitalDetails() {
  const { id } = useParams();
  const [hospital, setHospital] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchHospital = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/hospitals/${id}`);
        setHospital(response.data.data); // Adjust according to your API response
      } catch (error) {
        console.error('Error fetching hospital details:', error);
      }
    };

    fetchHospital();
  }, [id]);

  // Conditional rendering to avoid calling hooks conditionally
  if (!hospital) return <p>Loading...</p>;

  const { name, city, speciality, rating, description, image = [], numberOfDepartments, numberOfDoctors } = hospital;

  const handlePrevious = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === image.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='details-container'>
      <div className='details-header'>
        <div>
          <h1>{name}</h1>
          <h4>{city}</h4>
        </div>
        {/* <div>
          <Rating name="read-only" value={rating} precision={0.1} readOnly />
        </div> */}
      </div>
      <p><b>Specialties: </b>{speciality.join(', ')}</p>
      <div className='detail'>
        <p>Number of Departments: {numberOfDepartments}</p>
        <p>Number of Doctors: {numberOfDoctors}</p>
      </div>

      <div className='image-container'>
        {image.length > 0 && (
          <>
            <button onClick={handlePrevious} className='prev'>&#10094;</button>
            <img src={image[currentImageIndex]} alt={`${name}-${currentImageIndex}`} />
            <button onClick={handleNext} className='next'>&#10095;</button>
          </>
        )}
      </div>
      <p>{description}</p>
    </div>
  );
}

export default HospitalDetails;
