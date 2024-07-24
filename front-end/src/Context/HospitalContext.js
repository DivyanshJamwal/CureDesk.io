import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchHospitals, fetchHospitalById, createHospital, updateHospital, deleteHospital } from '../services/api';

const HospitalContext = createContext();

export const HospitalProvider = ({ children }) => {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    async function loadHospitals() {
      const response = await fetchHospitals();
      setHospitals(response.data);
    }
    loadHospitals();
  }, []);

  const getHospital = async (id) => {
    const response = await fetchHospitalById(id);
    setSelectedHospital(response.data);
  };

  const addHospital = async (data) => {
    const response = await createHospital(data);
    setHospitals([...hospitals, response.data]);
  };

  const editHospital = async (id, data) => {
    const response = await updateHospital(id, data);
    setHospitals(hospitals.map((h) => (h._id === id? response.data : h)));
  };

  const removeHospital = async (id) => {
    await deleteHospital(id);
    setHospitals(hospitals.filter((h) => h._id!== id));
  };

  return (
    <HospitalContext.Provider value={{ hospitals, selectedHospital, getHospital, addHospital, editHospital, removeHospital }}>
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospital = () => useContext(HospitalContext);