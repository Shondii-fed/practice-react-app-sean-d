const ProfileCard = ({ name, age, bio }) => {
    return (
        <div className="profile-card">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
        </div>
    )
};

export default ProfileCard;