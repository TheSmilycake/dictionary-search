import React from 'react';

export default function Antonyms(props) {
    if (props.antonyms.length < 1) {
        return (<div className={'Antonyms ' + props.classString}>
            <strong>Antonyms:</strong> None found
        </div>)
    } else {
        return (<div className={'Antonyms ' + props.classString}>
            <strong>Antonyms:</strong><br/>
            {props.antonyms.map((antonym, index, map) => {
                if (index < map.length - 1) {
                    return <span className="antonym" key={index}>{antonym}, </span>
                } else {
                    return <span className="antonym nice" key={index}>{antonym}</span>
                }
            })}
        </div>)
    }
}

Antonyms.defaultProps = {
    antonyms: [],
    classString: ''
}

