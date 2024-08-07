const UserProfile = async (data) => {
    try {
        const response = await fetch(`${process.env.API_URL}/auth/refresh-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Brear ${data?.token}`
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
export default UserProfile;