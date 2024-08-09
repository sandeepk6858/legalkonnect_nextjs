import StarSvg from "@/components/Icons/starSvg";
// get user token
export const user_token = () => {
    return `${process.env.NEXT_PUBLIC_API_TOKEN}`
}
// get image default prefix url
export const imageURL = (path) => {
    return `${process.env.IMAGES_ORIGIN}${path}`
}
// Date: dd:mm:yyyy hh:mm:ss
export const formatDateString = (dateString) => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = String(date.getFullYear()).slice(-2); 
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const formattedDate = `${day}-${month}-${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return `${formattedDate} ${formattedTime}`;
}
// format: 1 year ago
export function diffForHumans(dateString) {
    if(!dateString){
        return null;
    }
    const date = new Date(dateString); 
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    for (const [unit, value] of Object.entries(intervals)) {
        const interval = Math.floor(seconds / value);
        if (interval >= 1) {
            return interval === 1 ? `1 ${unit} ago` : `${interval} ${unit}s ago`;
        }
    }
    return 'Just now';
}
// used to check whether is user is premium or not
export function isPlanActive(id, expire_date) {
    const today = new Date();

    const expireDate = new Date(expire_date);
    
    return id === 2 && expireDate > today;
}
/** date like: June 2024 */
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
};
/** rating */
export const UserRating = ({ rating }) => {
    // Create an array with 5 elements, each representing a star
    const stars = Array.from({ length: 5 }, (_, index) => (
        <StarSvg
            key={index}
            width="18px"
            height="18px"
            fill={index < rating ? 'orange' : 'gray'}
        />
    ));

    return <>{stars}</>;
};