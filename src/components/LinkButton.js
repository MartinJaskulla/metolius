import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import styled from "styled-components"

const LinkButton = ({
    // location,
    // match,
    // staticContext,
    // onClick,
    history,
    to,
    ...rest
}) => {
    return (
        <StyledButton   
            {...rest} // `children` is just another prop!
            onClick={(event) => {
                // if(onClick) onClick(event)
                history.push(to)
            }}
        />
    )
}

LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default withRouter(LinkButton)

const StyledButton = styled.button`
background: none;
border: none;
padding: 0;
cursor: pointer;
outline: none;
text-decoration: none;
`