const UserProfile = async (token) => {
    try {
        const response = await fetch(`${process.env.API_URL}/auth/validate-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Brear ${token}`
            },
        });

        const responseData = await response.json();

        if (!responseData.success) {
            return { success: false};
        }
        return { success: true};

    } catch (error) {
        return { success: false};
    }
} 
export default UserProfile;