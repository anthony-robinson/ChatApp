import React, { useState } from 'react';

const FriendMessage = ({ userMessage }) => {
	return (
		<div className="flex justify-start mx-6 my-3 py-4 border-gray-700 ">
			<div className="mr-5">
				<div>
					<a href="#" className="text-white hover:underline">
						MyFriend
					</a>
					<span className="text-xs text-green-600 ml-1">07/19/2020</span>
				</div>
				<div class="max-w-sm mx-auto inline-block break-words px-3 py-1 bg-gray-100 rounded-lg shadow-xl ">
					<div class="text-sm text-black font-light">{userMessage}</div>
				</div>
			</div>
		</div>
	);
};

export default FriendMessage;
