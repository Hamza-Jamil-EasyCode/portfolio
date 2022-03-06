import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ title }) => {
    return (
        <div className='footer'>
             {title}
        </div>
    )
}

Footer.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Footer
