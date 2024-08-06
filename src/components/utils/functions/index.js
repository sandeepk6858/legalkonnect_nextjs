import StarSvg from "@/components/Icons/starSvg";
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