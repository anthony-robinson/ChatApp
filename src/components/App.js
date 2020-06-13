import React, { useState } from 'react';
import SearchBar from './SearchBar';
function App() {
	const [ term, setTerm ] = useState('');
	return (
		<div className="flex-1 flex flex-col min-h-screen h-screen">
			<div className="flex text-white font-sans font-light">
				<div className="bg-gray-800 w-56 flex-none flex items-center justify-between px-3 py-2">
					<div className="font-bold">Flack</div>
				</div>
				<div className="flex-1 bg-gray-700 flex items-center justify-between px-4 border-b border-gray-900">
					<div className="flex items-center">
						<div className="text-gray-500 text-2xl">#</div>
						<div className="ml-2 text-sm text-white">general</div>
					</div>
					<div className="flex justify-center items-center">
						<SearchBar searchText={(text) => setTerm(text)} />
					</div>
				</div>
			</div>

			<div className="flex-1 bg-blue-500 flex overflow-y-hidden">
				<div className="bg-gray-700 w-56 flex-none flex flex-col">
					<div className="text-sm overflow-y-auto">
						<ul className="px-2 py-3">
							<li className="text-gray-500 px-2 hover:text-gray-200 hover:bg-gray-900">
								<a href="#" class="flex items-center">
									<span class="text-xl">#</span>
									<span class="ml-2">welcome</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="bg-green-500 flex-1 flex justify-between">
					<div className="bg-gray-600 flex-1 overflow-y-auto">
						<div className="text-sm text-gray-400 overflow-y-auto">
							<div className="flex mx-6 my-3 py-4 border-t border-gray-700 ">
								<div className="ml-5">
									<div>
										<a href="#" className="text-white hover:underline">
											Anthony
										</a>
										<span className="text-xs text-gray-600 ml-1">07/19/2020</span>
									</div>
									<div>
										<div>yeah haha</div>
										<div>wyd today? wanna go hiking?</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-indigo-600 w-56 flex-none overflow-y-auto">Display chat 2</div>
				</div>
			</div>
		</div>
	);
}

export default App;
