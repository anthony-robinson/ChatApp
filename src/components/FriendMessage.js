import React, { useState } from 'react';

const FriendMessage = () => {
	return (
		<div className="flex justify-start mx-6 my-3 py-4 border-gray-700 ">
			<div className="mr-5">
				<div>
					<a href="#" className="text-white hover:underline">
						MyFriend
					</a>
					<span className="text-xs text-gray-600 ml-1">07/19/2020</span>
				</div>
				<div class="max-w-sm mx-auto flex px-3 py-2 bg-gray-300 rounded-lg shadow-xl">
					<div class="text-sm text-black font-light">Hey not much!</div>
				</div>
			</div>
		</div>
	);
};

export default FriendMessage;
