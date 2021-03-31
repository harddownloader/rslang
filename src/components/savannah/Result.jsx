import React from 'react'

export default function Result(properties){
    let color = properties.result ? 'red' : 'yellow'
    
    return(
        <div style={{color: color, fontWeight: 'bold',}} >
            {properties.result ? 'INCORRECT' : 'CORRECT'}
        </div>
    )
}