import React from "react";
import PersonList from "../personList/PersonList";
import AddButton from "./components/addButton/AddButton";

const HomePage = () => {
	return (
		<div className="max-w-screen-xl mt-12 mx-auto md:px-8">
			<div className="flex items-center justify-between">
				<h3 className="text-gray-800 text-xl font-bold pr-10 sm:text-3xl">
					Liste des personnes
				</h3>
				<AddButton />
			</div>
			<PersonList />
		</div>
	);
};

export default HomePage;
