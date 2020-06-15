import React, { useState, useEffect } from 'react';

const ChatInput = ({ inputText }) => {
	const [ text, setTextValue ] = useState('');
	const onSubmit = (e) => {
		e.preventDefault();
		if (text != '') {
			inputText(text);
		}
		console.log(text);
		setTextValue('');
	};

	return (
		<form
			onSubmit={onSubmit}
			className="bg-gray-700 h-8 flex justify-end items-center border-t border-gray-600 "
			id="chatinput"
		>
			<div className="flex-1">
				<input
					value={text}
					onChange={(e) => setTextValue(e.target.value)}
					type="text"
					className="w-full font-light rounded bg-gray-700 text-gray-200 text-xs px-2 py-1 focus:outline-none"
					placeholder="Enter a message..."
				/>
			</div>
			<button className="mr-2 px-5 font-normal text-sm text-white bg-blue-500 rounded hover:bg-blue-400">
				Send
			</button>
		</form>
	);
};

export default ChatInput;
