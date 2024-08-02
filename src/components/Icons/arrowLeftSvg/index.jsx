

const ArrowLeftSvg = ({width, height, stroke, hover}) => {
    return(
        <>
            <svg className={`${stroke} ${hover}`} width={width} height={height} viewBox="0 0 12 11" fill="none"  xmlns="http://www.w3.org/2000/svg">
                <path  d="M10.666 5.5L1.33268 5.5"  stroke=""  strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M6 10.1667L1.33333 5.49999L6 0.83332"  stroke="" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </>
    )
}
export default ArrowLeftSvg;