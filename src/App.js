/** @format */

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import Router from react-router-dom
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Home from "./components/Home";
import Template from "./components/Auth/Template";
import Forget from "./components/Forget";
import MovieDetails from './components/MovieDetails';
import AboutUs from "./components/AboutUs";
import Offers from "./components/Offers";
import MoviesPage from "./Pages/MoviesPage";
import StreamEventsPage from "./Pages/EventsPage";
import BookTicketPage from "./Pages/BookTicketPage";
import poster1 from './assets/images/poster1.jpg';
import poster2 from './assets/images/poster2.jpg';
import poster3 from './assets/images/poster3.jpg';
import poster4 from './assets/images/poster4.jpg';
import poster5 from './assets/images/poster5.jpg';

function App() {
	const movies = [
		{
		  id: 1,
		  poster: poster1,
		  title: 'Hindustani 2',
		  description: 'A gripping action-drama with thrilling moments.',
		  rating: 5.7,
		  votes: '3.9K',
		  genre: 'Action/Drama/Thriller'
		},
		{
		  id: 2,
		  poster: poster2,
		  title: 'Kalki 2898 AD',
		  description: 'A sci-fi thriller set in the future.',
		  rating: 8.7,
		  votes: '630.2K',
		  genre: 'Action/Sci-Fi/Thriller'
		},
		{
		  id: 3,
		  poster: poster3,
		  title: 'Deadpool & Wolverine',
		  description: 'Action-packed adventure with comedic twists.',
		  rating: 8.9,
		  votes: '268.9K',
		  genre: 'Action/Adventure/Comedy'
		},
		{
		  id: 4,
		  poster: poster4,
		  title: 'Sarfira',
		  description: 'A biographical drama of a brave soul.',
		  rating: 8.9,
		  votes: '7.5K',
		  genre: 'Biography/Drama'
		},
		{
		  id: 5,
		  poster: poster5,
		  title: 'Kill',
		  description: 'An intense action-thriller that keeps you on edge.',
		  rating: 9.0,
		  votes: '24.7K',
		  genre: 'Action/Thriller'
		},
	  ];
	return (
		<div>
			<Router>
				<Routes>
					<Route
						path="/"
						element={<Home />}></Route>
					{<Route
						path="/login"
						element={<Template formType={"login"} />}
					/>}

					<Route
						path="/signup"
						element={<Template formType={"signup"} />}
					/>
					<Route path="/forget" element={<Forget />} />
					<Route path="/movies/:id" element={<MovieDetails />} />
					 <Route path="/movies" element={<MoviesPage/>} /> 
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/offers" element={<Offers/>}/>
					<Route path="/stream-events" element={<StreamEventsPage/>} />
					<Route path="/book-tickets/:id" element={<BookTicketPage movies={movies} />} />
				</Routes>
			</Router>
		</div>
	);

}

export default App;
