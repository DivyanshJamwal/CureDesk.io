// src/pages/Hospital/HospitalListPage.js
import React, { useContext } from 'react';
import {useHospital} from '../../Context/HospitalContext';
import HospitalCard from '../../components/Home/HospitalCard';

function HospitalListPage() {
  const { hospitals } = useContext(useHospital);

  return (
    <div className="hospital-list">
      {hospitals.map((hospital) => (
        <HospitalCard key={hospital._id} hospital={hospital} />
      ))}
    </div>
  );
}

export default HospitalListPage;
