import React from 'react';


export const getHighlightedText = (text, higlight) => {
    // Split on higlight term and include term into parts, ignore case
    let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
    return <span> { parts.map((part, i) => 
        <span key={i} style={part.toLowerCase() === higlight.toLowerCase() ? { backgroundColor: 'yellow' } : {} }>
            { part }
        </span>)
    } </span>;
}


