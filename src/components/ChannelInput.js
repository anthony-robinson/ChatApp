import React, { useState } from 'react';

const ChannelInput = () => {
	const [ text, setText ] = useState('');
	return (
		<form className="flex items-center">
			<button className="px-2 py-2 h-8 bg-gray-800 text-gray-500 hover:text-white border-rounded ">
				<svg className="w-4 h-4 " fill="currentColor" aria-hidden="true" viewBox="0 0 448 512">
					<path
						d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
						class=""
					/>
				</svg>
			</button>
			<input
				className="font-light w-full h-8 rounded bg-gray-900 text-gray-200 text-xs px-2 py-1 focus:outline-none"
				placeholder="Add a #channel"
			/>
		</form>
	);
};

export default ChannelInput;
