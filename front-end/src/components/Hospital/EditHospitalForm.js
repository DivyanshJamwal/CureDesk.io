import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useHospital } from '../../Context/HospitalContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function EditHospitalForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedHospital, fetchHospitalById, updateHospital } = useHospital();
  const [hospitalData, setHospitalData] = useState({
    name: '',
    city: '',
    imageUrl: '',
    specialities: '',
    rating: 0,
    description: '',
    numberOfDoctors: 0,
    numberOfDepartments: 0,
  });

  useEffect(() => {
    if (selectedHospital) {
      setHospitalData(selectedHospital);
    } else {
      fetchHospitalById(id);
    }
  }, [id, selectedHospital, fetchHospitalById]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHospitalData((prevData) => ({...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateHospital(id, hospitalData);
      toast.success('Hospital updated successfully!');
      navigate(`/hospitals/${id}`);
    } catch (error) {
      toast.error('An error occurred while updating the hospital');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={hospitalData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="city"
        value={hospitalData.city}
        onChange={handleChange}
        placeholder="City"
        required
      />
      <input
        type="text"
        name="imageUrl"
        value={hospitalData.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <input
        type="text"
        name="specialities"
        value={hospitalData.specialities}
        onChange={handleChange}
        placeholder="Specialities (comma-separated)"
        required
      />
      <input
        type="number"
        name="rating"
        value={hospitalData.rating}
        onChange={handleChange}
        placeholder="Rating"
        required
      />
      <textarea
        name="description"
        value={hospitalData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      ></textarea>
      <input
        type="number"
        name="numberOfDoctors"
        value={hospitalData.numberOfDoctors}
        onChange={handleChange}
        placeholder="Number of Doctors"
        required
      />
      <input
        type="number"
        name="numberOfDepartments"
        value={hospitalData.numberOfDepartments}
        onChange={handleChange}
        placeholder="Number of Departments"
        required
      />
      <button type="submit">Update Hospital</button>
    </form>
  );
}

export default EditHospitalForm;