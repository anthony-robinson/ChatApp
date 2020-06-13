import React from 'react';

function App() {
	return (
		<div className="flex flex-col min-h-screen h-screen">
			<div className="flex text-white font-light">
				<div className="bg-gray-800 w-56 flex-none flex items-center justify-between px-3 py-2">
					<div>Flack</div>
				</div>
				<div className="flex-1 bg-gray-700 flex items-center justify-between px-4 border-b border-gray-900">
					<div className="flex items-center">
						<div className="text-gray-500 text-2xl">#</div>
						<div className="ml-2 text-sm text-white">general</div>
					</div>
					<div className="flex justify-center items-center">
						<form className="flex justify-center">
							<input
								className="font-light rounded bg-gray-900 text-gray-200 text-xs px-2 py-1"
								type="text"
								placeholder="Search"
							/>
						</form>
					</div>
				</div>
			</div>

			<div className="flex-1 bg-blue-500 flex overflow-y-hidden">
				<div className="bg-gray-700 w-56 flex-none overflow-y-auto">
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
					<div className="bg-gray-600 flex-1 overflow-y-auto">Display chat</div>
					<div className="bg-indigo-600 w-56 flex-none overflow-y-auto">Display chat 2</div>
				</div>
			</div>
		</div>
	);
}

export default App;
