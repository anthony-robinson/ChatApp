import React, { useState } from 'react';

const CurrentChannel = () => {
	return (
		<div className="flex items-center">
			<div className="text-gray-500 text-2xl">#</div>
			<div className="ml-2 text-sm text-white-400 hover:underline cursor-pointer">general</div>
		</div>
	);
};

export default CurrentChannel;
