const RegisterUser = async (userPostData) => {
    try {
        const response = await fetch(`${process.env.API_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userPostData),
        });

        const responseData = await response.json();

        if (!responseData.success) {
            let errorData = {}
            responseData.errors.forEach((error) => {
                errorData[error.path] = error.msg;
            });
            const reversedErrors = Object.values(errorData).reverse();
            return { success: false, message: reversedErrors[0] || 'Registration failed' };
        }

        return { success: true, data: responseData };

    } catch (error) {
        return { success: false, message: error.message };
    }
} 

export default RegisterUser;
