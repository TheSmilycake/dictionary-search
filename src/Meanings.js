import React from 'react';

export default function Meanings(props) {
    return (<div className="Meanings">
        {props.meanings.map((meaning, index) => {
            return (
                <ul key={index} className="meaning">
                    <h2>{meaning.partOfSpeech}</h2>
                    {meaning.definitions.map((definition, index) => {
                        return (<li className="definition" key={index}>
                            {definition.definition}
                        </li>);
                    })}
                        </ul>)
                    })}
            </div>)
        }
