import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useState, } from 'react';
import Home from './pages/home.js';
import CodePage from './pages/codepage.js';
import Login from './components/login';
import Register from './components/register';
import Contest from './pages/contest';

function App() {
	const [username, setusername] = useState("Login here");
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home username={username} />} />
				<Route path="/CodePage" element={<CodePage username={username} />} />
				<Route path="/login" element={<Login setusername={setusername} />} />
				<Route path="/signup" element={<Register setusername={setusername} />} />
				<Route path="/contest" element={<Contest />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
