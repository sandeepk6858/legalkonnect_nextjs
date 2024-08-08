import { Button } from "@nextui-org/react";

export default function CourtsMapComponent({CourtMapToggle}) {
    return (
        <div className="filter_filter_section">
            <Button
                className="bg-orangeprimary text-white text-lg"
                endContent={
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.5938 8.46964C14.8527 8.46964 15.0625 8.25967 15.0625 8.00089V6.59464H15.5312C15.7329 6.59464 15.912 6.46561 15.9758 6.2742C16.0397 6.08292 15.974 5.87222 15.8127 5.75101L8.28149 0.0948791C8.11475 -0.030365 7.88525 -0.030365 7.71851 0.0948791L0.187256 5.75101C0.026001 5.87222 -0.0396728 6.08292 0.0241699 6.2742C0.0880127 6.46561 0.26709 6.59464 0.46875 6.59464H0.9375V8.00089C0.9375 8.25967 1.14746 8.46964 1.40625 8.46964H1.875V13.1571H1.40625C1.14746 13.1571 0.9375 13.367 0.9375 13.6259V15.0634H0.46875C0.209961 15.0634 0 15.2732 0 15.5321C0 15.7909 0.209961 16.0009 0.46875 16.0009C0.998535 16.0009 15.0027 16.0009 15.5312 16.0009C15.79 16.0009 16 15.7909 16 15.5321C16 15.2732 15.79 15.0634 15.5312 15.0634H15.0625V13.6259C15.0625 13.367 14.8527 13.1571 14.5938 13.1571H14.125V8.46964H14.5938ZM8 1.05582L14.1266 5.65714H1.87341L8 1.05582ZM14.125 6.59464V7.53214H1.875V6.59464H14.125ZM9.40625 13.1571V8.46964H11.2812V13.1571H9.40625ZM4.71875 13.1571V8.46964H6.59375V13.1571H4.71875ZM7.53125 8.46964H8.46875V13.1571H7.53125V8.46964ZM2.8125 8.46964H3.78125V13.1571H2.8125V8.46964ZM1.875 15.0634V14.0946C3.13611 14.0946 12.6422 14.0946 14.125 14.0946V15.0634H1.875ZM13.1875 13.1571H12.2188V8.46964H13.1875V13.1571Z"
                            fill="#fff"
                        ></path>
                        <path
                            d="M8 1.875C7.22461 1.875 6.59375 2.50586 6.59375 3.28125C6.59375 4.05664 7.22461 4.6875 8 4.6875C8.77539 4.6875 9.40625 4.05664 9.40625 3.28125C9.40625 2.50586 8.77539 1.875 8 1.875ZM8 3.75C7.74158 3.75 7.53125 3.53967 7.53125 3.28125C7.53125 3.02283 7.74158 2.8125 8 2.8125C8.25842 2.8125 8.46875 3.02283 8.46875 3.28125C8.46875 3.53967 8.25842 3.75 8 3.75Z"
                            fill="#fff"
                        ></path>
                    </svg>
                }
                onClick={(e) => CourtMapToggle()}
            >
                Courts Map
            </Button>
        </div> 
    )
}