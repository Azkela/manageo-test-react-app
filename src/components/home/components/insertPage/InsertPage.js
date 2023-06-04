import React, { useState, useEffect } from "react";
import { person_service } from "../../../../services/person.service";
import PersonForm from "../../../personList/components/personForm/PersonForm";

const InsertPage = ({ onSubmit, initialData }) => {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		fetchPeople();
	}, []);

	const fetchPeople = async () => {
		try {
			const data = await person_service.getPeople();
			setPeople(data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleFormSubmit = async (formData) => {
		const personExists = people.some(
			(person) =>
				person.firstName.toLowerCase() ===
					formData.firstName.toLowerCase() &&
				person.lastName.toLowerCase() === formData.lastName.toLowerCase() &&
				person.email.toLowerCase() === formData.email.toLowerCase()
		);

		if (personExists) {
			console.log("La personne existe déjà");
			return;
		}

		try {
			if (formData.id) {
				await person_service.updatePerson(formData);
			} else {
				await person_service.createPerson(formData);
			}
			onSubmit();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<PersonForm
			onSubmit={handleFormSubmit}
			initialData={initialData ? initialData : null}
		/>
	);
};

export default InsertPage;
