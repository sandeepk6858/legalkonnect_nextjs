const CloseSvg = ({ width, height, fill,stroke }) => {
    return (
        <svg  width={width ?? "12px"} height={height ?? "12px"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width={width ?? "12px"} height={height ?? "12px"} fill={fill ?? "white"} />
            <path d="M7 17L16.8995 7.10051" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 7.00001L16.8995 16.8995" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
export default CloseSvg;