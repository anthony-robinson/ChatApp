import React from 'react';

function App() {
	return (
		<div className="flex flex-col min-h-screen h-screen">
			<div className="bg-red-500 flex">
				<div className="bg-red-300 w-56 flex-none">Tailwind CSS</div>
				<div>Rest of top bar</div>
			</div>
			<div className="flex-1 bg-blue-500 flex overflow-y-hidden">
				<div className="bg-green-300 w-56 flex-none overflow-y-auto">
					Hashtag lorem ipsum big lots of words paragraphs overflowing Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
					irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
					voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
					nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
					mollit anim id est laborum.
				</div>
				<div className="bg-green-500 flex-1 flex justify-between">
					<div className="bg-indigo-300 flex-1 overflow-y-auto">Display chat</div>
					<div className="bg-indigo-600 w-56 flex-none overflow-y-auto">Display chat 2</div>
				</div>
			</div>
		</div>
	);
}

export default App;
