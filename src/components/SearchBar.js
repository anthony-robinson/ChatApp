import React, { useState } from 'react';

const SearchBar = ({ searchText }) => {
	const [ text, setText ] = useState('');
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(text);
		searchText(text);
	};
	return (
		<form onSubmit={onSubmit} className="flex justify-center">
			<input
				onChange={(e) => setText(e.target.value)}
				className="font-light rounded bg-gray-900 text-gray-200 text-xs px-2 py-1"
				type="text"
				placeholder="Search"
			/>
		</form>
	);
};

export default SearchBar;
