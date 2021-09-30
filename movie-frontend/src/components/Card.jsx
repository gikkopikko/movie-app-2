import React from 'react';
import { Link} from "react-router-dom";

export default function Card(props) {
    return (
        <div class="card">
            <Link to={{pathname: '/movie/'+props.id}}>
                <div class="poster">
                    <div>
                        <img src={props.posterURL} alt={props.title}></img>
                    </div>
                </div>
                <div class="title">
                    <p>{props.title}</p>
                </div>
            </Link>                
        </div>
    )
}
