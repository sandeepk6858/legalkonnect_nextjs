import React from 'react';
import CloseSvg from '@/components/Icons/closeSvg';

const SocialField = ({ nickname, id, type, onRemove, svg }) => {
    return (
        <div className="social-item bg-gray-100 py-2 px-4 gap-3 rounded text-gray-500 text-base font-normal m-4 flex items-center">
            <div className="share-items flex items-center ">
                <div className="w-[20px] h-[20px] rounded-[10em] bg-[#f16622] flex items-center justify-center hover:bg-[#898989]">
                    {svg}
                </div>
            </div>
            <a href={nickname} target="_blank" rel="noopener noreferrer">
                {nickname}
            </a>
            <div className="lcs-item-close remove cursor-pointer" onClick={() => onRemove(id)}>
                <CloseSvg fill={'fill-transparent'} width={25} height={25} stroke={`#898989`}/>
            </div>
        </div>
    );
};

export default SocialField;
