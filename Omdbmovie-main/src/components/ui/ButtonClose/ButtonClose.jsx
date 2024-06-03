import React from 'react';
import './buttonClose.scss'

const ButtonClose = (props) => {
    return (
        <button
            className="buttonClose"
            onClick={props.remove}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 16C0 7.16344 7.16344 0 16 0V0C24.8366 0 32 7.16344 32 16V16C32 24.8366 24.8366 32 16 32V32C7.16344 32 0 24.8366 0 16V16Z" fill="#008060" />
                <path d="M14.4836 16L12.2093 13.7257C11.9302 13.4466 11.9302 12.9941 12.2093 12.7148L12.7148 12.2093C12.9939 11.9302 13.4464 11.9302 13.7257 12.2093L16 14.4836L18.2743 12.2093C18.5534 11.9302 19.0059 11.9302 19.2852 12.2093L19.7907 12.7148C20.0698 12.9939 20.0698 13.4464 19.7907 13.7257L17.5164 16L19.7907 18.2743C20.0698 18.5534 20.0698 19.0059 19.7907 19.2852L19.2852 19.7907C19.0061 20.0698 18.5534 20.0698 18.2743 19.7907L16 17.5164L13.7257 19.7907C13.4466 20.0698 12.9939 20.0698 12.7148 19.7907L12.2093 19.2852C11.9302 19.0061 11.9302 18.5536 12.2093 18.2743L14.4836 16Z" fill="#C1F0D0" />
            </svg>
        </button>
    )
}

export default ButtonClose;