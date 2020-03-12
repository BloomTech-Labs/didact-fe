import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import { PersonWrapper } from "./profileStyles";

const Person = props => {
    const person = props.person;
    const state = useSelector(state => state);
    const user = state.onboardingReducer.user;

    return (
        <PersonWrapper>

            { (user.owner === true || user.admin === true) ? (
                <div className="person">
                    <h3>{ person.email }</h3>
                    <h5>owner={ JSON.stringify(person.owner) }</h5>
                    <h5>admin={ JSON.stringify(person.admin) }</h5>
                    <h5>moderator={ JSON.stringify(person.moderator) }</h5>
                    <Link to={ `/users/${person.id}/edit` }>Edit</Link>
                </div>
            ) : (
                    null
                ) }
        </PersonWrapper >
    );
};

export default Person;
