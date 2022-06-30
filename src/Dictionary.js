import React, {useState} from 'react';
import axios from "axios";

import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Photos from "./Photos";

export default function Dictionary() {
    const [searchText, setSearchText] = useState("heart");
    const [wordData, setWordData] = useState({ready: false});
    const [photos, setPhotos] = useState()

    function updateSearch(event) {
        setSearchText(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        apiCall();
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function apiCall() {
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`).then(handleResponse);

        let pexelsApiKey = "563492ad6f91700001000001804f9c70f4634f9abf44581b88dadaf7";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchText}&per_page=6`;
        let headers = {Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);

    }

    function handleResponse(response) {
        setWordData({
            ready: true,
            word: response.data[0].word,
            phonetic: response.data[0].phonetic,
            phonetics: response.data[0].phonetics,
            meanings: response.data[0].meanings
        });

    }

    if (wordData.ready) {
        return (<div className="Dictionary">
            <form className="SearchForm" onSubmit={handleSubmit}>
                <input type='text' placeholder='Type word...' onChange={updateSearch}/>
                <input type={'submit'} value={'Search'}/>
            </form>
            <hr/>
            <div>
                <h2>{wordData.word} {wordData.phonetic}</h2>
            </div>
            <Phonetics phonetics={wordData.phonetics}/>
            {wordData.meanings.map((meaning, index) => {
                return <Meaning key={index} meaning={meaning}/>;
            })}
            <Photos photos={photos} />
        </div>);
    } else {
        apiCall();
        return "Loading...";
    }
}


// Dictionary.defaultProps = {
//
// }