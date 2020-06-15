import React from 'react';

const MyMessage = ({ userMessage }) => {
	return (
		<div className="flex justify-end mx-3 my-3 py-4 border-gray-700 ">
			<div className="mr-1">
				<div>
					<a href="#" className="text-white hover:underline">
						Anthony
					</a>
					<span className="text-xs text-green-600 ml-1">07/19/2020</span>
				</div>
				<div class="inline-block break-words max-w-sm px-3 py-1 bg-blue-500 rounded-lg shadow-xl">
					<div class="text-sm text-white font-light">{userMessage}</div>
				</div>
			</div>
		</div>
	);
};

export default MyMessage;
