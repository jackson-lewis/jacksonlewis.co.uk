import styled from 'styled-components'


export const Toggle = styled.button`
    width: 48px;
    height: 48px;

    background-color: transparent;
    border: none;

    rect {
        transform-box: fill-box;
        transform-origin: center;
        transition: transform 400ms cubic-bezier(0.09, 1.32, 1, 1);
    }

    ${ ({ isToggled }) => isToggled && `
        rect:first-child {
            transform: translateY( 4px ) rotateZ( 45deg );
        }

        rect:last-child {
            transform: translateY( -4px ) rotateZ( -45deg );
        }
    `}
`
