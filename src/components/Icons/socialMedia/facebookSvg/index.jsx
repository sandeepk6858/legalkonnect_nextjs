const FacebookSvg = ({width,height,fill}) => {
    return (
        <svg
        width={width ?? "6"}
        height={height ?? "14"}
        viewBox="0 0 6 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M1.53166 14V7.43079H0V5.06556H1.53166V3.04535C1.53166 1.45785 2.43642 0 4.52117 0C5.36526 0 5.98942 0.09177 5.98942 0.09177L5.94024 2.30049C5.94024 2.30049 5.3037 2.29347 4.60907 2.29347C3.85727 2.29347 3.73683 2.68638 3.73683 3.33851V5.06556H6L5.90153 7.43079H3.73683V14H1.53166Z"
            fill={fill ?? "#fff"}
        ></path>
    </svg>
    )
}
export default FacebookSvg;