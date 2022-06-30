import React from 'react';

export default function Phonetics(props) {
    return <div className="Phonetics">
        <h3>Phonetics</h3>
        <ul>
        {props.phonetics.map((phonetic, index) => {
            if (phonetic.audio === "") {
                return <li key={index} className="Phonetic"><span>{phonetic.text}</span></li>
            }
            return (
                <li className="Phonetic" key={index}><span>{phonetic.text}</span><a className="audio" href={phonetic.audio} title={phonetic.audio}>[Listen]</a></li>)
        })}
    </ul></div>;
}

Phonetics.defaultProps = {
    phonetics: []
}
