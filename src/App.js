import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/home/HomePage";
import InsertPage from "./components/home/components/insertPage/InsertPage";
import PersonForm from "./components/personList/components/personForm/PersonForm";

const App = () => {
	return (
		<div className="max-w-lg flex justify-center mx-auto">
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route path="/edit/:id" element={<PersonForm />} />
					<Route path="/add" element={<InsertPage onSubmit={() => {}} initialData={null} />}/>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
