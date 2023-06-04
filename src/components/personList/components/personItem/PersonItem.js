import React from "react";
import PersonOptions from "../personOptions/PersonOptions";

const PersonItem = ({ person, onEdit, onDelete }) => {
	return (
		<tr>
			<td className="px-6 py-4 whitespace-nowrap uppercase">
				{person.lastName}
			</td>
			<td className="px-6 py-4 whitespace-nowrap">{person.firstName}</td>
			<td className="px-6 py-4 whitespace-nowrap">{person.email}</td>
			<td className="text-right px-6 whitespace-nowrap">
				<PersonOptions
					person={person}
					onEdit={() => onEdit(person)}
					onDelete={() => onDelete(person.id)}
				/>
			</td>
		</tr>
	);
};

export default PersonItem;
