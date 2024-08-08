export const validateInput = (name, value) => {
    let hasError = false;
    let error = "";

    // Enhanced URL pattern for better validation
    const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d-]{2,}(\/[\w\d-]*)*$/;

    // Trim the value for cleaner validation
    const trimmedValue = value.trim();

    switch (name) {
        case "type":
            if (trimmedValue === "") {
                hasError = true;
                error = "Please select a social media type.";
            }
            break;
        case "url":
            if (trimmedValue === "") {
                hasError = true;
                error = "URL can't be empty.";
            } else if (!urlPattern.test(trimmedValue)) {
                hasError = true;
                error = "Invalid URL format.";
            }
            break;
        default:
            break;
    }

    return { hasError, error };
};


export const onInputChange = (name, value, formState, setFormState) => {
    const { hasError, error } = validateInput(name, value);
    let isFormValid = true;

    for (const key in formState) {
        if (key === name && hasError) {
            isFormValid = false;
            break;
        } else if (key !== name && formState[key].hasError) {
            isFormValid = false;
            break;
        }
    }

    setFormState(prevState => ({
        ...prevState,
        [name]: { value, hasError, error, touched: false },
        isFormValid,
    }));
};

export const onFocusOut = (name, value, formState, setFormState) => {
    const { hasError, error } = validateInput(name, value);
    let isFormValid = true;

    for (const key in formState) {
        if (key === name && hasError) {
            isFormValid = false;
            break;
        } else if (key !== name && formState[key].hasError) {
            isFormValid = false;
            break;
        }
    }

    setFormState(prevState => ({
        ...prevState,
        [name]: { value, hasError, error, touched: true },
        isFormValid,
    }));
};
