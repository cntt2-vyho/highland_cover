import './App.css';
import { BrowserRouter } from "react-router-dom";
import React, { Component, Fragment, useState, useEffect } from 'react';
import Redirect from './redirect/Redirect';

import 'antd/dist/antd.css';
import { db } from './firebase/FirebaseConfig';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Redirect />
      </BrowserRouter>
    );
  }
}

// export default App;

// const App = () => {
//     const [cinemas, setCinemas] = useState([]);
//     const [selectedCinema, setSelectedCinema] = useState();
//     const [movies, setMovies] = useState([]);
//     const [error, setError] = useState();

//     const selectCinema = (cinema) => {
//         setSelectedCinema(cinema);
//         db.collection('data').doc(cinema.id).collection('dishes').get()
//             .then(response => {
//                 const fetchedMovies = [];
//                 response.forEach(document => {
//                     const fetchedMovie = {
//                         id: document.id,
//                         ...document.data()
//                     };
//                     fetchedMovies.push(fetchedMovie);
//                 });
//                 setMovies(fetchedMovies);
//             })
//             .catch(error => {
//                 setError(error);
//             });
//     }

//     const timestampToString = (timestamp) => {
//         return Date(timestamp).toString();
//     }

//     useEffect(() => {
//         db.collection('data').get()
//             .then(response => {
//                 const fetchedCinemas = [];
//                 response.docs.forEach(document => {
//                     const fetchedCinema = {
//                         id: document.id,
//                         ...document.data()
//                     };
//                     fetchedCinemas.push(fetchedCinema);
//                 });
//                 setCinemas(fetchedCinemas);
//             })
//             .catch(error => {
//                 setError(error);
//             });
//     }, []);

//     return (
//         <div>
//             {error ? (
//                 <p>Ops, there is an error :(</p>
//             ) : null}
//             <ul>
//                 {cinemas.map(cinema => (
                    
//                     <li key={cinema.dish_type_id} onClick={() => selectCinema(cinema)}>
//                         <b>{cinema.dish_type_name.split("/")}</b> :  {cinema.description} {console.log(
//                             cinema.dish_type_name.split("/")

//                     )}
//                     </li>
//                 ))}
//             </ul>
//             {selectedCinema ? (
//                 <ul>
//                     {/* {movies.map(movie => (
//                         <li >
//                             <b>{movie.name.split("/")}</b> | {movie.price} |{/* {timestampToString(movie.release_date) | 
//                             <img src={movie.photos[1].value} />
                            
//                         </li>
//                     */}

//                     <li>Hi</li>
//                     <li>Vy</li>

//                 </ul>
//             ) : null}
//         </div>
//     );
// }

export default App;