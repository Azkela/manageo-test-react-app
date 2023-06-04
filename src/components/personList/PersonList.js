import React, { useState, useEffect } from "react";
import { person_service } from "../../services/person.service";
import PersonItem from "./components/personItem/PersonItem";

const PersonList = ({ onEdit }) => {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		fetchPeople();
	}, []);

	const fetchPeople = async () => {
		try {
			const data = await person_service.getPeople();
			const sortedData = data.sort((first, last) => {
				return first.lastName
					.toLowerCase()
					.localeCompare(last.lastName.toLowerCase());
			});
			setPeople(sortedData);
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (id) => {
		try {
			await person_service.deletePerson(id);
			fetchPeople();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="mt-8 shadow-sm border rounded-lg max-h-96 overflow-x-hidden">
			<table className="w-full table-auto text-sm text-left">
				<thead className="bg-gray-50 text-gray-600 font-medium border-b">
					<tr>
						<th className="py-3 px-6">Nom</th>
						<th className="py-3 px-6">Prénom</th>
						<th className="py-3 px-6">Email</th>
						<th className="py-3 px-6"></th>
					</tr>
				</thead>
				<tbody className="text-gray-600 divide-y">
					{people.map((person) => (
						<PersonItem
							key={person.id}
							person={person}
							onEdit={onEdit}
							onDelete={handleDelete}
						/>
					))}
				</tbody>
			</table>
			{people.length === 0 && (
				<div className="text-center py-4">
					Il n'y a aucune personne sur la liste
				</div>
			)}
		</div>
	);
};

export default PersonList;
