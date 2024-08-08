import React from 'react';

const FormField = ({ name, type = "text", placeholder, value, error, touched, onChange, onBlur }) => {
    return (
        <div className="flex flex-col gap-2 pt-3 w-full sm:w-[calc(50%_-_76px)]">
            <label className="text-[#474040] text-base">Url</label>
            <input
                name={name}
                type={type}
                className={`w-full border py-2.5 md:py-3.5 px-3.5 text-grey text-base placeholder:text-base placeholder:text-grey ${touched && error ? "border-red-600" : "border-stone-300"}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {touched && error && (
                <div className="error-msg text-red-600 mt-1 text-sm">{error}</div>
            )}
        </div>

    );
};

export default FormField;