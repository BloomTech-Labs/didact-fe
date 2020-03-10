import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { editUser, deleteTool, getToolById } from "../../store/actions";

import { DidactField, DidactInput, DidactLabel } from "../dashboard/FormStyles";
import DeleteModal from "../courses/DeleteModal";
import { TrashCanEdit, DidactButton } from "../dashboard/ButtonStyles";

import Card from "@material-ui/core/Card";

const UsersProfiles = ({ props, id }) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.usersProfilesReducer.user);
    const [openModal, setOpenModal] = useState(false);
    const [changes, setChanges] = useState({
        email: "",
        owner: "false",
        admin: "false",
        moderator: "false"

    });

    // useEffect(() => {
    //     dispatch(getToolById(id));
    // }, []);

    useEffect(() => {
        setChanges({
            email: user.email,
            admin: user.owner,
            owner: user.admin,
            moderator: user.moderator

        });
    }, [user]);

    const handleChange = e => {
        setChanges({ ...changes, [e.target.name]: e.target.value });
    };

    const handleModalOpen = e => {
        setOpenModal(true);
    };

    const handleModalClose = e => {
        setOpenModal(false);
    };

    const handleDelete = e => {
        dispatch(deleteTool(id));
        props.history.push("/tools");
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(editUser(id, changes));
        props.history.push("/dashboard");
    };

    return (
        <Card>
            <TrashCanEdit
                onClick={ handleModalOpen }
                style={ { marginTop: "10px", fontSize: "2.6rem" } }
            ></TrashCanEdit>
            { openModal ? (
                <DeleteModal
                    text={ "this " }
                    open={ openModal }
                    handleModalClose={ handleModalClose }
                    handleDelete={ handleDelete }
                />
            ) : null }
            <form onSubmit={ handleSubmit }>
                <DidactField>
                    <DidactLabel>Email</DidactLabel>
                    <DidactInput
                        type="email"
                        value={ changes.email || "" }
                        onChange={ handleChange }
                        name="email"
                    />
                </DidactField>
                <DidactField>
                    <DidactLabel>Owner</DidactLabel>
                    <DidactInput
                        type="boolean"
                        value={ changes.owner || "" }
                        onChange={ handleChange }
                        name="owner"
                    />
                </DidactField>
                <DidactField>
                    <DidactLabel>Admin</DidactLabel>
                    <DidactInput
                        type="boolean"
                        value={ changes.admin || "" }
                        onChange={ handleChange }
                        name="admin"
                    />
                </DidactField>
                <DidactField>
                    <DidactLabel>Moderator</DidactLabel>
                    <DidactInput
                        type="boolean"
                        value={ changes.moderator || "" }
                        onChange={ handleChange }
                        name="moderator"
                    />
                    <DidactButton type="submit">Submit</DidactButton>
                </DidactField>
            </form>
        </Card>
    );
};

export default UsersProfiles;
