export const validateInput = (name, value) => {
    let hasError = false;
    let error = "";

    switch (name) {
        case "email":
            if (value.trim() === "") {
                hasError = true;
                error = "Email can't be empty";
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                hasError = true;
                error = "Email is not valid";
            } else {
                hasError = false;
                error = "";
            }
            break;
        case "password":
            if (value.trim() === "") {
                hasError = true;
                error = "Password can't be empty";
            } else if (value.trim().length < 4) {
                hasError = true;
                error = "Password should be more than 4 characters";
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