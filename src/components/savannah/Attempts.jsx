import React, { useEffect } from 'react'

const styles = {
    width: '3rem',
    fontSize: '2rem',
}
export default function Attempts(properties){
    useEffect(()=>{
        document.querySelector('.attempts').innerHTML = '&#128155;'.repeat(properties.num)
    }, [properties.num])
    return(
        <>
        <span className='attempts' style={styles}/>
        </>
    )
}