import React,{useState,useEffect} from 'react'
import Card from './Card'

export default function Category(props) {

    // const [cards,setCards] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:9095/movies/category/'+props.title.toLowerCase())
    //     .then(response => response.json())
    //     .then(data => {
    //         let movies = data.map(movie => {
    //             return 
    //         });
    //         setCards(movies);
    //     });

    // }, [])

    return (
        <div class="category">
            <div class="title">
                <h2>{props.title}</h2>
            </div>
            <div class="card-container">
                <div class="movie-display-cards">
                    {props.movieCards.map((card) => {
                        return <Card title={card.movieName} id={card.movieId} posterURL={card.posterURL}/>;
                    })}
                </div>
            </div>
        </div>
    )
}
