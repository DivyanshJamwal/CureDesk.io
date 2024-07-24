import axios from 'axios';

export const API_BASE_URL = 'https://hospital-mg.onrender.com/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const signup = (data) => api.post('/auth/signup', data);
export const signin = (data) => api.post('/auth/signin', data);

export const fetchHospitals = async () => {
    try {
      const response = await api.get('/hospitals/all');
      // Extract the data array from the response
      return response.data.data; 
    } catch (error) {
      console.error("Error fetching hospitals:", error);
      throw error;
    }
  };
export const fetchHospitalById = (id) => api.get(`/hospitals/${id}`);
export const createHospital = (data) => api.post('/hospitals/create', data);
export const updateHospital = (id, data) => api.put(`/hospitals/update${id}`, data);
export const deleteHospital = (id) => api.delete(`/hospitals/delete${id}`);
