import axios from "axios";
const baseUrl = "http://localhost:3001/api/persons";

const getAllPersons = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

const addNewPerson = async (newPerson) => {
  try {
    const response = await axios.post(baseUrl, newPerson);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

const deletePerson = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

const updatePerson = async (id, updatedPerson) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, updatedPerson);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export { getAllPersons, addNewPerson, deletePerson, updatePerson };
