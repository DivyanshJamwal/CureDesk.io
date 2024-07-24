import React, { useState } from 'react';
import { useHospital } from '../../Context/HospitalContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function HospitalForm({ fetchHospitals }) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [specialities, setSpecialities] = useState([]);
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/v1/hospitals/create', {
        name,
        city,
        imageUrl,
        specialities,
        rating,
      });
      if (response.data.success) {
        toast.success('Hospital created successfully!');
        fetchHospitals(); // Refresh the list
      } else {
        toast.error('Failed to create hospital');
      }
    } catch (error) {
      toast.error('An error occurred while creating the hospital');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="City"
        required
      />
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="Image URL"
        required
      />
      <input
        type="text"
        value={specialities}
        onChange={(e) => setSpecialities(e.target.value.split(','))}
        placeholder="Specialities (comma-separated)"
        required
      />
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rating"
        required
      />
      <button type="submit">Create Hospital</button>
    </form>
  );
}

export default HospitalForm;