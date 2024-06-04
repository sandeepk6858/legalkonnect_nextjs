const CheckSvg = ({fill,height,width,hover}) => {
    return (
        <svg className="cursor-pointer" width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={`${hover} ${fill}`} d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4108 16 8C16 3.58916 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.728 1.23934 8C1.23934 4.27203 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27203 14.7607 8C14.7607 11.728 11.7273 14.7607 8 14.7607Z" ></path>
            <path className={`${hover} ${fill}`} d="M11.6703 5.21766C11.4181 4.98838 11.0259 5.00635 10.7954 5.25979L7.01532 9.42216L5.18913 7.56563C4.94806 7.32148 4.55644 7.31776 4.31291 7.5582C4.06875 7.79801 4.06503 8.19026 4.30547 8.43441L6.59144 10.7582C6.70857 10.8772 6.86719 10.9435 7.03325 10.9435C7.03697 10.9435 7.04132 10.9435 7.04504 10.9441C7.21607 10.9404 7.37719 10.8673 7.49182 10.7409L11.7124 6.09329C11.9424 5.8392 11.9238 5.44757 11.6703 5.21766Z" ></path>
        </svg>
    )
}
export default CheckSvg;