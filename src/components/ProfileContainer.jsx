import ProfileCard from "./ProfileCard";

const ProfileContainer = () => {
    const cardData = [
        {
            name: "John",
            age: 25,
            bio: "UX Researcher"
        },
        {
            name: "Ben",
            age: 32,
            bio: "Senior Developer"
        },
        {
            name: "Marcy",
            age: 29,
            bio: "Project Manager"
        },
        {
            name: "Lacy",
            age: 28,
            bio: "QA Tester"
        }
    ];
    console.log(cardData);

    return (
        <div className="profile-container">
            <h1>Users Profiles</h1>
           { cardData.map((person) => (
            <ProfileCard key={person.name} name={person.name} age={person.age} bio={person.bio} /> 
        ))}
        </div>
    )
}


export default ProfileContainer;