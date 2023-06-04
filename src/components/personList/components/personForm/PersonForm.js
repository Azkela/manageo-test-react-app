import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { person_service } from "../../../../services/person.service";

const PersonForm = ({ onSubmit }) => {
	const [formData, setFormData] = useState({
		id: "",
		firstName: "",
		lastName: "",
		email: "",
	});
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (id) {
			fetchPerson(id);
		}
	}, [id]);

	const fetchPerson = async (id) => {
		try {
			const person = await person_service.getPerson(id);
			setFormData(person);
		} catch (error) {
			console.log(error);
		}
	};

	const handleInputChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (id) {
			try {
				await person_service.updatePerson(formData);
				navigate("/");
			} catch (error) {
				console.log(error);
			}
		} else {
			if (typeof onSubmit === "function") {
				onSubmit(formData);
				navigate("/");
			}
		}
	};

	return (
		<div className=" max-w-xs mx-auto">
			<h1 className="text-3xl font-bold mt-12 mb-6">
				Formulaire de modification
			</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="firstName"
					placeholder="Prénom"
					value={formData.firstName}
					onChange={handleInputChange}
					required
					className="block w-full px-4 py-2 mb-4 appearance-none border border-gray-300 rounded leading-tight focus:outline-none focus:border-indigo-500"
				/>
				<input
					type="text"
					name="lastName"
					placeholder="Nom"
					value={formData.lastName}
					onChange={handleInputChange}
					required
					className="block w-full px-4 py-2 mb-4 appearance-none border border-gray-300 rounded leading-tight focus:outline-none focus:border-indigo-500"
				/>
				<input
					type="email"
					name="email"
					placeholder="Adresse email"
					value={formData.email}
					onChange={handleInputChange}
					required
					className="block w-full px-4 py-2 mb-4 appearance-none border border-gray-300 rounded leading-tight focus:outline-none focus:border-indigo-500"
				/>
				<div className="flex justify-between mt-6">
					<button
						type="submit"
						className="flex items-center gap-2 px-3 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-500 active:bg-indigo-700"
					>
						<svg
							width="24px"
							height="24px"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g
								stroke="none"
								strokeWidth={1}
								fill="none"
								fillRule="evenodd"
							>
								<path
									d="M24 0v24H0V0h24zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018zm.265-.113l-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022zm-.715.002a.023.023 0 00-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092z"
									fillRule="nonzero"
									transform="translate(-576 -96) translate(576 96)"
								/>
								<path
									d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V6.414A2 2 0 0019.414 5L17 2.586A2 2 0 0015.586 2H6zm0 2h9.586L18 6.414V20H6V4zm10.238 6.793a1 1 0 10-1.414-1.414l-4.242 4.242-1.415-1.414a1 1 0 00-1.414 1.414l2.05 2.051a1.1 1.1 0 001.556 0l4.88-4.879z"
									fill="#FFFFFFFF"
									transform="translate(-576 -96) translate(576 96)"
								/>
							</g>
						</svg>
						Enregistrer
					</button>
					<Link
						to="/"
						className="flex items-center gap-2 px-3 py-2 text-white bg-gray-600 rounded-lg duration-150 hover:bg-gray-500 active:bg-gray-700"
					>
						<svg
							width="24px"
							height="24px"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g
								stroke="none"
								strokeWidth={1}
								fill="none"
								fillRule="evenodd"
							>
								<path
									d="M24 0v24H0V0h24zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018zm.265-.113l-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022zm-.715.002a.023.023 0 00-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092z"
									fillRule="nonzero"
									transform="translate(-288 -48) translate(288 48)"
								/>
								<path
									d="M12 14.121l5.303 5.304a1.5 1.5 0 002.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 10-2.122-2.121L12 9.879 6.697 4.576a1.5 1.5 0 10-2.122 2.12L9.88 12l-5.304 5.303a1.5 1.5 0 102.122 2.122L12 14.12z"
									fill="#FFFFFFFF"
									transform="translate(-288 -48) translate(288 48)"
								/>
							</g>
						</svg>
						Annuler
					</Link>
				</div>
			</form>
		</div>
	);
};

export default PersonForm;
