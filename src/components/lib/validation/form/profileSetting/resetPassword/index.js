export const validateInput = (name, value,confirmPasswordValue) => {
    let hasError = false;
    let error = "";
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    switch (name) {
        case "password":
            if (value.trim() === "") {
                hasError = true;
                error = "Password can't be empty";
            } else if (!passwordPattern.test(value)) {
                hasError = true;
                error = "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long";
            } else {
                hasError = false;
                error = "";
            }
            break;
        case "password":
            if (value.trim() === "") {
                hasError = true;
                error = "Password can't be empty";
            } else if (!passwordPattern.test(value)) {
                hasError = true;
                error = "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long";
            } else {
                hasError = false;
                error = "";
            }
            break;
        case "confirm_password":
            if (value.trim() === "") {
                hasError = true;
                error = "Confirm password can't be empty";
            } else if (value.trim().length < 8) {
                hasError = true;
                error = "Confirm password must be at least 8 characters long";
            } else if (value !== confirmPasswordValue) {
                hasError = true;
                error = "Passwords do not match";
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
