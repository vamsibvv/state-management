import React, {useState, createContext} from 'react';


export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        { 
            name: 'Game of Thrones',
            price: '$10',
            id: 28234
        },
        {
            name: 'Inception',
            price: '$20',
            id: 23323
        }
    ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
           {props.children}
        </MovieContext.Provider>
    );
}