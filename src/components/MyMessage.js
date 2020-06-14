import React from 'react';

const MyMessage = () => {
	return (
		<div className="flex justify-end mx-6 my-3 py-4 border-gray-700 ">
			<div className="mr-5">
				<div>
					<a href="#" className="text-white hover:underline">
						Anthony
					</a>
					<span className="text-xs text-gray-600 ml-1">07/19/2020</span>
				</div>
				<div class="max-w-sm mx-auto flex px-3 py-1 bg-blue-500 rounded-lg shadow-xl">
					<div class="text-sm text-white font-light">Hey wyd today?</div>
				</div>
			</div>
		</div>
	);
};

export default MyMessage;
