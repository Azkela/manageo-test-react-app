import Axios from "./api.service";

const getPeople = async () => {
	try {
		const response = await Axios.get(`/person`);
		return response.data;
	} catch (error) {
		console.log(error);
		return [];
	}
};

const getPerson = async (id) => {
	try {
		const response = await Axios.get(`/person/${id}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

const createPerson = async (person) => {
	try {
		const response = await Axios.post(`/person`, person);
		if (response.status === 200) return true;
	} catch (error) {
		console.log(error);
		return false;
	}
};

const updatePerson = async (person) => {
	try {
		const response = await Axios.put(`/person/${person.id}`, person);
		if (response.status === 200) return true;
	} catch (error) {
		console.log(error);
		return false;
	}
};

const deletePerson = async (id) => {
	try {
		const response = await Axios.delete(`/person/${id}`);
		if (response.status === 200) return true;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const person_service = {
	getPeople,
	getPerson,
	createPerson,
	updatePerson,
	deletePerson,
};
