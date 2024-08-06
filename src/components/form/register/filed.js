import React from 'react';

const FormField = ({ name, type = "text", placeholder, value, error, touched, onChange, onBlur }) => {
    return (
        <div className="flex flex-col gap-2 w-full md:w-[calc(50%_-_10px)]">
            <label className="text-sm sm:text-base text-grey">{placeholder}</label>
            <input
                name={name}
                type={type}
                className={`w-full border text-black py-2.5 px-3.5 text-base placeholder:text-base ${touched && error ? "border-red-600" : "border-stone-300"}`}
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
