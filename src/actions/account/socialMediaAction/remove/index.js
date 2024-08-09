const DeleteUserProfile = async (data) => {
    try {
        const response = await fetch(`${process.env.API_URL}/socials/removesocialmedia`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Brear ${data?.token}`
            },
            body: JSON.stringify({
                social_media_id:data?.social_media_id,
                user_id:data?.user_id,
            }),
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

export default DeleteUserProfile;