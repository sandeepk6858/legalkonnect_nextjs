const UserProfile = async (data) => {
    try {
        const response = await fetch(`${process.env.API_URL}/users/get-profile/${data?.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Brear ${data?.token}`
            },
        });

        const responseData = await response.json();

        if (!responseData.success) {
            return { success: false, message: responseData.message || 'Registration failed' };
        }
        return { success: true, data: responseData?.data };

    } catch (error) {
        return { success: false, message: error.message };
    }
} 
export default UserProfile;