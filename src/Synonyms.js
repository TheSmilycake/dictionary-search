import React from 'react';

export default function Synonyms(props) {
    if (props.synonyms.length < 1) {
        return (<div className={'Synonyms ' + props.classString}>
            <strong>Synonyms:</strong> None found
        </div>)
    } else {
        return (<div className={'Synonyms ' + props.classString}>
            <strong>Synonyms:</strong><br/>
            {props.synonyms.map((synonym, index, map) => {
                if (index < map.length - 1) {
                    return <span className="synonym" key={index}>{synonym}, </span>
                } else {
                    return <span className="synonym nice" key={index}>{synonym}</span>
                }
            })}
        </div>)
    }
}

Synonyms.defaultProps = {
    synonyms: [],
    classString: ''
}

