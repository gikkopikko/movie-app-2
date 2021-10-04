import React,{useEffect,useState} from 'react'
import Category from "./Category";
import { getMovieDetails, getMoviesByCategory } from '../common/api-utils';

export default function Categories() {

    const [movieData,setMovieData] = useState([]);

    useEffect(()=>{
        // fetch("http://localhost:9095/allCategoryDetails")
        // .then(res => res.json())
        // .then(data => {
        //     setMovieData(data);
        // });


        getMoviesByCategory()
        .then(data => setMovieData(data));
    },[]);

    return (
        <div className="categories-holder">
            {movieData.map((cat) => {
                return <Category title={cat.category.toUpperCase()} movieCards={cat.movieCards}/>
            })}
        </div>
    )
}
