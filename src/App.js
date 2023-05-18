import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<SearchPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
