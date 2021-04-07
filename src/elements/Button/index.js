import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Button(props) {

    const onClick = () => {
        if(props.onClick) props.onClick()
    }

    if(props.type === "link"){
        if(props.isExternal){
            return (
                <a 
                    href={props.href}
                    className={props.className}
                    style={props.style}
                    target={props.target === "_blank" ? "_blank" : undefined}
                >
                    {props.children}
                </a>
            )
        }

        return (
            <NavLink
                to={props.href}
                className={props.className}
                style={props.style}
                onClick={onClick}
            >
                {props.children}
            </NavLink>
        )
    }

    return (
        <button
            className={props.className}
            type={props.type}
            style={props.style}
            onClick={onClick}
        >
            {props.children}
        </button>
    )
}

Button.PropTypes = {
    className : PropTypes.string,
    type : PropTypes.oneOf(["button", "link", "submit", "reset"]),
    onClick : PropTypes.func,
    target: PropTypes.string,
    
    isExternal : PropTypes.bool
}
