import React from 'react'

const artworkDisplay = (props) => {
    return (
        <div id={props.id}>
            <a target='_blank' href={props.link}><img src={props.src} alt={props.alt} /></a>
            <p> {props.description} </p>
        </div>
    );
}

export default artworkDisplay