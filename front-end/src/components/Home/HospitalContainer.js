// src/components/HospitalContainer/HospitalContainer.js

import React, { useEffect, useState } from 'react';
import HospitalCard from './HospitalCard';
import { fetchHospitals } from '../../services/api';
import "./HospitalContainer.css";

const HospitalContainer = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const getHospitals = async () => {
      try {
        const data = await fetchHospitals(); // This should be an array of hospitals
        console.log("Hospitals Data:", data); // Log the hospitals data
        if (Array.isArray(data)) {
          setHospitals(data);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching hospitals:", error);
      }
    };

    getHospitals();
  }, []);

  return (
    <div className="hospital-container">
      {hospitals.length === 0 ? (
        <h2>No Hospitals Found</h2>
      ) : (
        hospitals.map(hospital => (
          <HospitalCard
            key={hospital._id}
            name={hospital.name}
            city={hospital.city}
            image={hospital.image}
            speciality={hospital.speciality.join(', ')} // Converts array to string
            rating={hospital.rating}
            id={hospital._id}
          />
        ))
      )}
    </div>
  );
};

export default HospitalContainer;
