import React from 'react';

export default function Example(props) {
    if (!props.example) {
        return <div className="Example">
            <strong>Example:</strong> None found
        </div>
    }
    return <div className="Example">
        <strong>Example:</strong><br/>
        {props.example}
    </div>
}

Example.defaultProps = {
    example: null
}

