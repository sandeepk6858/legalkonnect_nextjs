const GetSocialProfile = async (token) => {
    try {
        const response = await fetch(`${process.env.API_URL}/socials/getsocialmedia`, {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Brear ${token}`
            },
        });

        const responseData = await response.json();

        if (!responseData.success) {
            return { success: false, message: responseData.message };
        }
        return { success: true, data: responseData?.data };

    } catch (error) {
        return { success: false, message: error.message };
    }
} 

export default GetSocialProfile;