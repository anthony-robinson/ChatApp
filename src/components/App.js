import React, { useState } from 'react';
import SearchBar from './SearchBar';
import MyMessage from './MyMessage';
import CurrentChannel from './CurrentChannel';
import FriendMessage from './FriendMessage';
import ChatInput from './ChatInput';
function App() {
	const [ term, setTerm ] = useState('');
	return (
		<div className="flex-1 flex flex-col min-h-screen h-screen">
			<div className="flex text-white font-sans font-light">
				<div className="bg-gray-800 w-56 flex-none flex items-center justify-between px-3 py-2">
					<div className="font-bold">Flack</div>
				</div>
				<div className="flex-1 bg-gray-700 flex items-center justify-between px-4 border-b border-gray-900">
					<CurrentChannel />
					<div className="flex justify-center items-center">
						<SearchBar searchText={(text) => setTerm(text)} />
					</div>
				</div>
			</div>

			<div className="flex-1 bg-blue-500 flex overflow-y-hidden">
				<div className="bg-gray-700 w-56 flex-none flex flex-col justify-between">
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
					<div className="bg-green-500">here</div>
				</div>
				<div className="bg-red-600 flex-1 flex justify-between">
					<div className="bg-gray-600 flex-1 flex flex-col justify-between">
						<div className="overflow-y-auto text-sm text-gray-400 ">
							<MyMessage />
							<FriendMessage />
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing software like Aldus PageMaker including
							versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
							an unknown printer took a galley of type and scrambled it to make a type specimen book. It
							has survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged. It was popularised in the 1960s with the release of
							Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy
							text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
							dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
							it to make a type specimen book. It has survived not only five centuries, but also the leap
							into electronic typesetting, remaining essentially unchanged. It was popularised in the
							1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
							with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing software like Aldus PageMaker including
							versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
							an unknown printer took a galley of type and scrambled it to make a type specimen book. It
							has survived not only five centuries, but also the leap into electronic typesetting,
							remaining essentially unchanged. It was popularised in the 1960s with the release of
							Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy
							text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
							dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
							it to make a type specimen book. It has survived not only five centuries, but also the leap
							into electronic typesetting, remaining essentially unchanged. It was popularised in the
							1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
							with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum s of
							Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
							Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
							printer took a galley of type and scrambled it to make a type specimen book. It has survived
							not only five centuries, but also the leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop publishing software like
							Aldus PageMaker including versions of Lorem Ipsum
						</div>

						<ChatInput />
					</div>
				</div>
				<div className="bg-indigo-600 w-56 flex-none overflow-y-auto">Display chat 2</div>
			</div>
		</div>
	);
}

export default App;
