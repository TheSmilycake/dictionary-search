import React from 'react';
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import Example from "./Example";

export default function Definitions(props) {
    return (
        <div className="Definitions">
            <h3>More Definitions:</h3>
            {props.definitions.map((definition, index) => {
                return (
                    <div className="definition" key={index}>
                        <div className="definition-text">
                            <strong>Definition:</strong><br/>
                            {definition.definition}
                        </div>
                        <Synonyms synonyms={definition.synonyms} classString='bg-green-light definition-synonyms'/>
                        <Antonyms antonyms={definition.antonyms} classString='bg-red-light definition-antonyms'/>
                        <Example example={definition.example}/>
                    </div>
                )
            })}
        </div>
    )
}
