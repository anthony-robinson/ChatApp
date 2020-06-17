import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import SearchBar from './SearchBar';
import MyMessage from './MyMessage';
import CurrentChannel from './CurrentChannel';
import FriendMessage from './FriendMessage';
import ChatInput from './ChatInput';
const App = () => {
	//ID for sockets.
	const [ yourID, setID ] = useState('');
	//searchterm functionality
	const [ term, setTerm ] = useState('');
	//array of messages to render in chat log.
	const [ messages, setMessages ] = useState([]);

	const socket = io.connect('/');
	useEffect(() => {
		socket.on('your id', (id) => {
			setID(id);
		});
		socket.on('message', (message) => {
			receivedMessage(message);
		});
	}, []);

	function receivedMessage(message) {
		setMessages((msgArray) => [ ...msgArray, message ]);
	}

	return (
		<div className="flex-1 flex flex-col min-h-screen h-screen">
			<div className="flex text-white font-sans font-light">
				<div className="bg-gray-800 w-56 flex-none flex items-center justify-between px-3 py-2">
					<div className="font-bold">Chat App</div>
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
					<div className="bg-gray-800 text-white">channel search goes here</div>
				</div>
				<div className="bg-red-600 flex-1 flex justify-between">
					<div className="bg-gray-600 flex-1 flex flex-col justify-between">
						<div className="overflow-y-auto text-sm text-gray-400 ">
							{messages.map((msg, index) => {
								if (msg.id === yourID) {
									console.log(msg.id);
									return (
										<div key={index}>
											<MyMessage userMessage={msg.message} />
										</div>
									);
								}
								console.log(msg.id);
								return (
									<div key={index}>
										<FriendMessage userMessage={msg.message} />
									</div>
								);
							})}
						</div>

						<ChatInput socketProp={socket} ID={yourID} />
					</div>
					<div className="bg-gray-700 w-56 flex-none overflow-y-auto">Users go here</div>
				</div>
			</div>
		</div>
	);
};

export default App;
