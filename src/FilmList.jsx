import React from 'react';
import Film from './Film';

function FilmList(props){
return(
    <div>
        <h1>will be returning a list</h1>

    <main>
        <ul>
            {props.resultsOfData.map(result => (
                <Film key={result.episode_id} resultsOfMovieData={result}/>
            ))}
        </ul>
    </main>

    </div>
)
}

export default FilmList;