import React from 'react';

function Film(props){
    return(
        <div>
            <ul>
                <li key={props.resultsOfMovieData.episode_id}></li>
                <h4>{props.resultsOfMovieData.title}</h4>
                <p>{props.resultsOfMovieData.opening_crawl}</p>
                <p>{props.resultsOfMovieData.director}</p>
                <p>{props.resultsOfMovieData.producer}</p>
                <p>{props.resultsOfMovieData.release_date}</p>
                <img src = {props.resultsOfMovieData.poster_url} />
            </ul>
        </div>
    )
}

export default Film;