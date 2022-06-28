import React from 'react';

export default function Meanings(props) {
        return (<div className="Meanings">
            {props.meanings.map((meaning, index) => {
                return (
                    <div key={index} className="meaning">
                        <h2>{meaning.partOfSpeech}</h2>
                        {meaning.definitions.map((definition, index) => {
                            return (<div className="definition" key={index}>
                                    <div>{definition.definition}</div>
                                </div>)
                        })}
                    </div>)
            })}
        </div>)
}
