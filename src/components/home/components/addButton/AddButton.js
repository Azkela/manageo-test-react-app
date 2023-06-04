import React from "react";
import { Link } from "react-router-dom";

const AddButton = ({ onClick }) => {
	return (
		<div className="mt-3 md:mt-0">
			<Link
				to="/add"
				className="flex items-center px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
				onClick={onClick}
			>
				<svg
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					className="mr-1"
				>
					<g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
						<path
							d="M24 0v24H0V0h24zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018zm.264-.113l-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022zm-.715.002a.023.023 0 00-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01-.184-.092z"
							fillRule="nonzero"
							transform="translate(-672) translate(672)"
						/>
						<path
							d="M11 2a5 5 0 100 10 5 5 0 000-10zM8 7a3 3 0 116 0 3 3 0 01-6 0zM4 18.5c0-.18.09-.489.413-.899.316-.4.804-.828 1.451-1.222C7.157 15.589 8.977 15 11 15c.375 0 .744.02 1.105.059a1 1 0 10.211-1.99C11.887 13.025 11.447 13 11 13c-2.395 0-4.575.694-6.178 1.671-.8.49-1.484 1.065-1.978 1.69C2.358 16.977 2 17.713 2 18.5c0 .845.411 1.511 1.003 1.986.56.45 1.299.748 2.084.956C6.665 21.859 8.771 22 11 22l.685-.005a1 1 0 10-.027-2L11 20c-2.19 0-4.083-.143-5.4-.492-.663-.175-1.096-.382-1.345-.582C4.037 18.751 4 18.622 4 18.5zM18 14a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2h-2a1 1 0 110-2h2v-2a1 1 0 011-1z"
							fill="#FFFFFFFF"
							transform="translate(-672) translate(672)"
						/>
					</g>
				</svg>
				Ajouter
			</Link>
		</div>
	);
};

export default AddButton;
