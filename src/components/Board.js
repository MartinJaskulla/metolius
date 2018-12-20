// 6B50D2 sloper color
import React from "react"
import styled from "styled-components"

const Board = ({ active }) => {
    return (
        <StyledSvg active={active} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 683.76 231.21">
            <path d="M669.84 74.09L660.53 67a39.86 39.86 0 0 0-55.72 7.38l-3.43 4.47L389.36 49a39.87 39.87 0 0 0-39.61-36.6h-12.5A39.87 39.87 0 0 0 297.64 49l-212 29.79-3.43-4.47A39.86 39.86 0 0 0 26.47 67l-9.31 7.13a39.87 39.87 0 0 0-7.39 55.73L85 228.08a39.82 39.82 0 0 0 34.56 15.42 16.23 16.23 0 0 0 2-.13l188.32-26.47a39.63 39.63 0 0 0 27.37 11h12.5a39.63 39.63 0 0 0 27.37-11l188.34 26.47a16.23 16.23 0 0 0 1.95.13A39.82 39.82 0 0 0 602 228.08l75.26-98.26a39.87 39.87 0 0 0-7.42-55.73z" transform="translate(-1.62 -12.4)" fill="#6e94e0" id="Board" />
            <g id="Holds">
                <g id="One" fill="#665aa7">
                    <circle id="OneRight" cx="48.92" cy="64.08" r="7.5" />
                    <circle id="OneLeft" cx="634.84" cy="64.08" r="7.5" />
                </g>
                <g id="Two" fill="#665aa7">
                    <path id="TwoLeft" d="M183.62 65l.95 6.76a15.55 15.55 0 0 1-13.19 17.51l-53.47 7.51A15.55 15.55 0 0 1 100.4 83.6l-1-6.76z" transform="translate(-1.62 -12.4)" />
                    <path id="TwoRight" d="M504.38 65.18l-.95 6.76a15.54 15.54 0 0 0 13.19 17.51L570.09 97a15.56 15.56 0 0 0 17.51-13.2l.95-6.76z" transform="translate(-1.62 -12.4)" />
                </g>
                <g id="Three" fill="#665aa7">
                    <path id="ThreeRight" d="M405.1 51.23l-1 6.76a15.54 15.54 0 0 0 13.2 17.51l53.51 7.5a15.55 15.55 0 0 0 17.51-13.2l.95-6.76z" transform="translate(-1.62 -12.4)" />
                    <path id="ThreeLeft" d="M281.9 51.22l1 6.76a15.54 15.54 0 0 1-13.2 17.51L216.19 83a15.55 15.55 0 0 1-17.51-13.2l-1-6.76z" transform="translate(-1.62 -12.4)" />
                </g>
                <g id="Four" fill="#15246d">
                    <rect id="FourRight" width="45" height="25.5" x="614" y="95.5" rx="12.75" ry="12.75" transform="rotate(-170 635.1465384 102.1247326)" />
                    <rect id="FourLeft" width="45" height="25.5" x="27" y="95.5" rx="12.75" ry="12.75" transform="rotate(-9 -30.06229986 112.31465648)" />
                </g>
                <g id="Five" fill="#15246d">
                    <rect id="FiveRight" width="70.5" height="25.5" x="557.45" y="127.19" rx="3.75" ry="3.75" transform="rotate(-171 591.40188744 133.81089816)" />
                    <rect id="FiveLeft" width="70.5" height="25.5" x="59.05" y="127.19" rx="3.75" ry="3.75" transform="rotate(-9 14.74565766 144.03183793)" />
                </g>
                <g id="Six" fill="#15246d">
                    <rect id="SixLeft" width="70.5" height="25.5" x="143.52" y="113.19" rx="3.75" ry="3.75" transform="rotate(-8 89.32606719 131.34229976)" />
                    <rect id="SixRight" width="70.5" height="25.5" x="472.98" y="113.19" rx="3.75" ry="3.75" transform="rotate(-172 506.98869245 119.80336482)" />
                </g>
                <g id="Seven" fill="#15246d">
                    <rect id="SevenLeft" width="70.5" height="25.5" x="227.73" y="102" rx="3.75" ry="3.75" transform="rotate(-6 143.89273437 123.96871674)" />
                    <rect id="SevenRight" width="70.5" height="25.5" x="388.77" y="102" rx="3.75" ry="3.75" transform="rotate(-174 422.88397442 108.59574343)" />
                </g>
                <g id="Eight" fill="#15246d">
                    <path id="EightRight" d="M549.31 184.15l29.13 4.1c6.93 1 13.49-3.26 14.59-9.43 1.1-6.16-3.67-12-10.6-13l-29.13-4.1c-6.93-1-13.49 3.27-14.59 9.43-1.1 6.18 3.67 12.02 10.6 13z" transform="translate(-1.62 -12.4)" />
                    <path id="EightLeft" d="M137.69 184.15l-29.13 4.1c-6.93 1-13.49-3.26-14.59-9.43-1.1-6.16 3.67-12 10.6-13l29.13-4.1c6.93-1 13.49 3.27 14.59 9.43 1.1 6.18-3.67 12.02-10.6 13z" transform="translate(-1.62 -12.4)" />
                </g>
                <g id="Nine" fill="#15246d">
                    <path id="NineRight" d="M473.81 172.55l29.19 3.66c6.94.86 13.42-3.48 14.4-9.66 1-6.18-3.91-11.94-10.85-12.81l-29.22-3.66c-6.94-.86-13.42 3.48-14.4 9.66-.93 6.18 3.94 11.94 10.88 12.81z" transform="translate(-1.62 -12.4)" />
                    <path id="NineLeft" d="M213.19 172.55L184 176.21c-6.94.86-13.42-3.48-14.4-9.66-1-6.18 3.91-11.94 10.85-12.81l29.22-3.66c6.94-.86 13.42 3.48 14.4 9.66.93 6.18-3.94 11.94-10.88 12.81z" transform="translate(-1.62 -12.4)" />
                </g>
                <g id="Ten" fill="#15246d">
                    <path id="TenRight" d="M396.42 164.94l29.34 2.75c7 .65 13.28-3.9 14-10.1.73-6.21-4.37-11.82-11.35-12.47l-29.34-2.74c-7-.65-13.28 3.89-14 10.09-.73 6.21 4.37 11.82 11.35 12.47z" transform="translate(-1.62 -12.4)" />
                    <path id="TenLeft" d="M290.58 164.94l-29.34 2.75c-7 .65-13.28-3.9-14-10.1-.73-6.21 4.37-11.82 11.35-12.47l29.34-2.74c7-.65 13.28 3.89 14 10.09.73 6.21-4.37 11.82-11.35 12.47z" transform="translate(-1.62 -12.4)" />
                </g>
                <g id="Eleven" fill="#15246d">
                    <path id="ElevenRight" d="M504.7 215.42l44 6.28c6.93 1 13.48-3.24 14.57-9.4 1.08-6.17-3.7-12-10.63-13l-44-6.28c-6.93-1-13.49 3.24-14.57 9.4-1.07 6.16 3.71 12.01 10.63 13z" transform="translate(-1.62 -12.4)" />
                    <path id="ElevenLeft" d="M182.3 215.42l-44 6.28c-6.93 1-13.48-3.24-14.57-9.4-1.08-6.17 3.7-12 10.63-13l44-6.28c6.93-1 13.49 3.24 14.57 9.4 1.07 6.16-3.71 12.01-10.63 13z" transform="translate(-1.62 -12.4)" />
                </g>
                <g id="Twelve" fill="#15246d">
                    <path id="TwelveRight" d="M449.39 206.5l9.45.88c7 .65 13.28-3.89 14-10.1.73-6.2-4.38-11.81-11.35-12.46l-9.45-.89c-7-.65-13.28 3.89-14 10.1-.73 6.2 4.38 11.81 11.35 12.47z" transform="translate(-1.62 -12.4)" />
                    <path id="TwelveLeft" d="M237.61 206.5l-9.45.88c-7 .65-13.28-3.89-14-10.1-.73-6.2 4.38-11.81 11.35-12.46l9.45-.89c7-.65 13.28 3.89 14 10.1.73 6.2-4.38 11.81-11.35 12.47z" transform="translate(-1.62 -12.4)" />
                </g>
                <g id="Thirteen" fill="#15246d">
                    <path id="ThirteenRight" d="M393.86 200.58l9.48.59c7 .43 13.12-4.31 13.61-10.53.49-6.22-4.84-11.67-11.83-12.11l-9.48-.59c-7-.43-13.12 4.3-13.61 10.53-.49 6.22 4.84 11.67 11.83 12.11z" transform="translate(-1.62 -12.4)" />
                    <path id="ThirteenLeft" d="M293.14 200.58l-9.48.59c-7 .43-13.12-4.31-13.61-10.53-.49-6.22 4.84-11.67 11.83-12.11l9.48-.59c7-.43 13.12 4.3 13.61 10.53.49 6.22-4.84 11.67-11.83 12.11z" transform="translate(-1.62 -12.4)" />
                </g>
                <circle id="Fourteen" cx="341.88" cy="20.08" r="7.5" fill="#665aa7" />
                <rect id="Fifteen" width="65" height="25.5" x="311" y="56.5" rx="12.75" ry="12.75" transform="rotate(-180 342.69 63.05)" fill="#15246d" />
                <rect id="Sixteen" width="55" height="25.5" x="316" y="97" rx="12.75" ry="12.75" transform="rotate(-180 342.69 103.55)" fill="#15246d" />
                <rect id="Seventeen" width="45" height="22.69" x="321" y="137.5" rx="11.34" ry="11.34" transform="rotate(-180 342.69 142.645)" fill="#15246d" />
                <rect id="Eighteen" width="35" height="22.69" x="326" y="175.19" rx="11.34" ry="11.34" transform="rotate(-180 342.69 180.335)" fill="#15246d" />
            </g>
        </StyledSvg>
    )
}

const StyledSvg = styled.svg`
    ${props => {
        if (!props.active) return
        if (props.active === "any") return "#Holds"
        const holds = props.active.split(" ")
        const string = holds.map(hold => "#" + hold).join(", ")
        return string
    }} {
        fill: #C9DAFA;
    }

    animation-name: fade-in;
    animation-duration: 1s;
    animation-timing-function: ease;
`

// fill: #C9DAFA;
export default Board