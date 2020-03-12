import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Person from "./Person";
import { getUsersProfiles } from "../../store/actions";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { PersonWrapper } from "./ProfileStyles";

const UsersProfiles = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const user = state.onboardingReducer.user;
    const usersList = state.usersProfilesReducer.users

    useEffect(() => {
        dispatch(getUsersProfiles());
    }, [dispatch]);

    return (

        <PersonWrapper className="nameIt" style={ (user.owner === true || user.admin === true) ? { display: "", flexWrap: "wrap" } : { display: "none" }
        }>
            { usersList && usersList.map(person => <Person person={ person } key={ person.id } email={ person.email } owner={ person.owner } admin={ person.admin } moderator={ person.moderator } />) }
        </PersonWrapper >
    );
};

export default UsersProfiles;
