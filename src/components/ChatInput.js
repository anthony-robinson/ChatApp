import React, { useState } from 'react';

const ChatInput = ({ socketProp, ID }) => {
	const [ text, setTextValue ] = useState({ message: '', id: '' });

	const onSubmit = (e) => {
		e.preventDefault();
		if (text.message != '') {
			console.log(text.message);
			socketProp.emit('send message', text);
		}
		setTextValue({ message: '' });
	};

	return (
		<form
			onSubmit={onSubmit}
			className="bg-gray-700 h-8 flex justify-end items-center border-t border-gray-600 "
			id="chatinput"
		>
			<div className="flex-1">
				<input
					value={text.message}
					onChange={(e) => setTextValue({ message: e.target.value, id: ID })}
					type="text"
					className="w-full font-light h-8 rounded bg-gray-700 text-gray-200 text-xs px-2 py-1 focus:outline-none"
					placeholder="Enter a message..."
				/>
			</div>
			<button className="transition duration-500 ease-in-out transform hover:scale-110 focus:outline-none mr-2 px-5 font-normal text-sm text-white bg-blue-500 rounded hover:bg-blue-400">
				Send
			</button>
		</form>
	);
};

export default ChatInput;
