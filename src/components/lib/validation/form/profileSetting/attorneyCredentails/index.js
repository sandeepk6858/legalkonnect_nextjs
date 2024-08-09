export const validateInput = (name, value) => {
    let hasError = false;
    let error = "";

    // Trim the value for cleaner validation
    const trimmedValue = value.trim();

    switch (name) {
        case "state":
            if (trimmedValue === "") {
                hasError = true;
                error = "Please select a state.";
            }
            break;
        case "license":
            if (trimmedValue === "") {
                hasError = true;
                error = "Please select a license type.";
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
