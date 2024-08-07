export const validateInput = (name, value,confirmPasswordValue) => {
    let hasError = false;
    let error = "";

    switch (name) {
        case "role":
            if (value.trim() === "") {
                hasError = true;
                error = "Role can't be empty";
            } else {
                hasError = false;
                error = "";
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
