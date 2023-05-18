import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.js';
import CodePage from './pages/codepage.js';
import Login from './components/login';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/CodePage" element={<CodePage />} />
				<Route path="/login" element={<Login/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
