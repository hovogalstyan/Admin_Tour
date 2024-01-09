import React  from 'react';
import Wrapper from "./Wrapper";
import {useSelector} from "react-redux";

const Profile = () => {
    const profile = useSelector(state => state.users.profile);
    console.log(profile.user.photo);

    return (
        <section className="profile">
            <div>
                <img src={profile.user.photo} alt="<Broken Image"/>
                <p>{`${profile.user.firstName} ${profile.user.lastName}`}</p>
            </div>
        </section>
    );
};

export default Profile;
