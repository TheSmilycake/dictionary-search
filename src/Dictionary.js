import React, { useState } from 'react';
import axios from "axios";

import Meaning from "./Meaning";

export default function Dictionary(props) {
    const [searchText, setSearchText] = useState("heart");
    const [wordData, setWordData] = useState({ready: false});
    function updateSearch(event) {
        setSearchText(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        apiCall();
    }

    function apiCall() {
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`).then(handleResponse);
    }

    function handleResponse(response) {
       setWordData({
           ready: true,
           word: response.data[0].word,
           phonetic: response.data[0].phonetic,
           meanings: response.data[0].meanings
       });

    }
    if (wordData.ready) {
        return (<div className="Dictionary">
            <form className="SearchForm" onSubmit={handleSubmit}>
                <input type='text' placeholder='Type word...' onChange={updateSearch}/>
                <input type={'submit'} value={'Search'}/>
            </form>
            <div>
                <h2>{wordData.word}  {wordData.phonetic}</h2>
            </div>
            {wordData.meanings.map((meaning, index) => {
                return <Meaning key={index} meaning={meaning}/>;
            })}
        </div>);
    } else {
        apiCall();
        return "Loading...";
    }
}



// Dictionary.defaultProps = {
//
// }