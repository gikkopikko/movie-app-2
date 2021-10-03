import React,{useState,useEffect} from 'react'
import Card from './Card'

export default function Category(props) {

    const [cards,setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9095/movies/category/'+props.title.toLowerCase())
        .then(response => response.json())
        .then(data => {
            let movies = data.map(movie => {
                console.log(movie);
                return <Card title={movie.movieName} id={movie.movieId} posterURL={movie.posterURL}/>;
            });
            setCards(movies);
        });

    }, [])

    return (
        <div class="category">
            <div class="title">
                <h2>{props.title}</h2>
            </div>
            <div class="card-container">
                <div class="movie-display-cards">
                    {cards}
                </div>
            </div>
        </div>
    )
}
