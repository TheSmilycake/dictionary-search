import React from 'react';
import Definitions from './Definitions'
import Synonyms from "./Synonyms"
import Antonyms from "./Antonyms";
import Example from "./Example";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h2>{props.meaning.partOfSpeech}</h2>
            <strong>Definition:</strong><br/>{props.meaning.definitions[0].definition}
            <Synonyms synonyms={props.meaning.synonyms} classString='bg-green'/>
            <Antonyms antonyms={props.meaning.antonyms} classString='bg-red'/>
            <Example example={props.meaning.definitions[0].example}/>
            <Definitions definitions={props.meaning.definitions}/>
        </div>
    )
}
