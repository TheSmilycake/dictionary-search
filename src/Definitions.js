import React from 'react';
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
import Example from "./Example";
import Collapsible from 'react-collapsible';

export default function Definitions(props) {

    const triggerStyle = {backgroundColor: 'red'};
    return (
        <div className="Definitions">
            <Collapsible transitionTime={300}  trigger="More Definitions">
                {props.definitions.map((definition, index, map) => {
                    return (

                        <div className="definition" key={index}>
                            <div className="definition-text">
                                <strong>Definition:</strong><br/>
                                {definition.definition}
                            </div>
                            <Synonyms synonyms={definition.synonyms} classString='bg-green-light definition-synonyms'/>
                            <Antonyms antonyms={definition.antonyms} classString='bg-red-light definition-antonyms'/>
                            <Example example={definition.example}/>
                            {(index < map.length - 1) ? <hr/> : ''}
                        </div>
                    )
                })}
            </Collapsible>

        </div>
    )
}
