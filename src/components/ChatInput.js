import React, { useState } from 'react';

const ChatInput = () => {
	return (
		<form className="bg-gray-700 h-8 flex justify-end items-center border-t border-gray-600 " id="chatinput">
			<div className="flex-1">
				<input
					type="text"
					className="w-full font-light rounded bg-gray-700 text-gray-200 text-xs px-2 py-1 focus:outline-none"
					type="text"
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
