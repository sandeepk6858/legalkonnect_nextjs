const ClockSvg = ({ height, width}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={width} height={height}>
        <path fill="#f16622" d="m20.59 22-5.59-5.59v-9.41h2v8.58l5 5.01z" />
        <path fill="#f16622" d="m16 2a13.94 13.94 0 0 0 -10 4.23v-4.23h-2v8h8v-2h-4.92a12 12 0 1 1 -3.08 8h-2a14 14 0 1 0 14-14z" />
      </svg>
    )
}
export default ClockSvg;