const videoSvg = ({ height, width,stroke }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
            width={width}
            style={{ width: '23px', margin: '0', padding: '0' }}
        >
            <rect
                width={width}
                height={height}
                x="3"
                y="6.5"
                fill="none"
                vectorEffect="non-scaling-stroke"
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                rx="2"
            />
            <polygon
                fill="none"
                vectorEffect="non-scaling-stroke"
                stroke={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                points="17 10.45 17 12.78 21 15.11 21 8.11 17 10.45"
            />
        </svg>
    )
}
export default videoSvg;