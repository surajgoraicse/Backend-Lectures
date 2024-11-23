import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
	const [jokes, setJokes] = useState([]);
	useEffect(() => {
		axios
			.get("/api/jokes")
			.then((res) => {
				setJokes(res.data);
			})
			.catch((err) => {
				console.log("fetch error ", err);
			});
	}, []);

	return (
		<>
			<h1>Jokes</h1>
			<ul>
				{jokes.map?.((joke) => {
				return <li  key={joke.id}> {joke.joke}</li>;
			})}
			</ul>
			
		</>
	);
}

export default App;
