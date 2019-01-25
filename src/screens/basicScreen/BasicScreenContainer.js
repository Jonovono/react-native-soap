import React, { Component } from 'react';
import PropTypes from 'prop-types'

import BasicScreenView from './BasicScreenView';


export default BasicScreen = (aprops) => {
    return (bprops) => {
        return (
            <BasicScreenView {...aprops} {...bprops} />
        )
    }
}

// SimpleButtonScreen.propTypes = {
//     header: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.number]),
//     buttonText: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
// }

// SimpleButtonScreen.defaultProps = {
//     header: 'Welcome to this APP!',
//     buttonText: 'Continue'
// }
