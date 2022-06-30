import React from 'react';

export default function Photos(props) {
    return (
        <div className="Photos">
            <div className="Gallery">
                {props.photos.map((photo, index) => {
                    return <div className="pexels-photo" key={index} title={(index+1) + ') ' + photo.alt}>
                        <a href={photo.src.original} target="_blank" rel="noreferrer">
                            <img src={photo.src.landscape} alt={photo.alt}/>
                        </a>
                    </div>
                })}

                <div className="Gallery-Infos">
                    {props.photos.map((photo, index) => {
                        return <div className="pexels-photo-info" key={index}>
                            <a target="_blank" rel="noreferrer" href={photo.url}>{photo.alt}</a><br/>
                            Photographer: <a target="_blank" rel="noreferrer" href={photo.photographer_url}>{photo.photographer}</a>
                        </div>

                    })}
                </div>
            </div>
        </div>)
}

Photos.defaultProps = {
    photos: []
}