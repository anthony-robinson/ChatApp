import React from 'react';

const Channel = ({ chatChannel }) => {
	return (
		<li className="text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900">
			<a href="#" class="flex items-center">
				<span class="text-xl">#</span>
				<span class="ml-2">{chatChannel}</span>
			</a>
		</li>
	);
};

export default Channel;
