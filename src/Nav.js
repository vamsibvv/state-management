import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'

function Nav(props) {
    const [movies,setMovies] = useContext(MovieContext)
    console.log(props)
    const styles = {}
    styles.color = 'white'
    styles.backgroundColor = '#303030'
    styles.textAlign = 'left'
    styles.height = '40px'
    styles.width = '1200px'
    styles.paddingTop ='10px'
    styles.paddingLeft='50px'
    return (
        <div>
            <h3 style={styles}>This is a list of movies with size: {movies.length}</h3>
        </div>
    )
}

export default Nav;