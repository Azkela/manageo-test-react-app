import React from "react";
import { Link } from "react-router-dom";

const PersonOptions = ({ person, onDelete }) => {
	if (!person) {
		return null;
	}

	return (
		<div className="flex">
			<Link
				to={`/edit/${person.id}`}
				className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
			>
				Modifier
			</Link>
			<button
				className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
				onClick={() => onDelete(person.id)}
			>
				Supprimer
			</button>
		</div>
	);
};

export default PersonOptions;
