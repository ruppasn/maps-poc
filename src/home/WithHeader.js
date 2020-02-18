import React from 'react'
import { Link } from 'react-router-dom'

export default Component => props => {
    return <>
        <Link to="/"> Go Home >>> </Link>
        <br/>
        <Component {...props} />
    </>
}