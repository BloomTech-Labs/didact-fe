import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

// Button with Plus sign

export const AddButton = styled.div`
  height: 75px;
  width: 160px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  background: black;
  border-radius: 15px;
  margin-bottom: 10px;
  &:hover {
    cursor: "pointer";
  }
`;

export const PlusDiv = styled.div`
  background: #575758;
  color: #eeeff3;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Plus = styled.span`
  font-size: 3rem;
  /* padding-top: 3px; */
`;
export const ButtonText = styled.p`
  color: white;
  padding-right: 15px;
  font-weight: bold;
`;

export const AddButtonInSection = styled.div`
  height: 55px;
  width: 155px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  background: black;
  border-radius: 25px;
  cursor: pointer;
  padding: 0 10px;
  /* &:hover {
        border: white solid 1px;
    } */
`;

export const PlusDivInSection = styled.div`
  background-color: black;
  color: black;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PlusInSection = styled.span`
  font-size: 2rem;
  padding-top: 2.5px;
`;
export const ButtonTextInSection = styled.p`
  color: black;
  padding-right: 15px;
  font-size: 12px;
  font-weight: bold;
`;

// X Button for removing tag

export const TagDelete = styled.div`
  opacity: 0;
  position: absolute;
  top: 0px;
  right: 0px;
  height: 30px;
  color: black;
  width: 25px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 0 13px 13px 0;
  &:hover {
    opacity: 0.8;
    background: maroon;
  }
`;
export const P = styled.p`
  padding: 1px;
  margin-top: -1px;
  font-size: 1.3rem;
  line-height: 28px;
`;

// Edit lesson button

export const DidactButton = styled.button`
  box-shadow: none;
  border-radius: 12px;
  color: #242424;
  background: #ffffff;
  border: 1px solid #242424;
  height: 35px;
  width: 123px;
  margin-left: 10px;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background-color: #242424bf;
    // border: solid black 1px;
    outline: none;
  }
`;

export const EditIconButton = styled(EditIcon)`
  box-shadow: none;
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.25);
  height: 30px;
  width: 112px;
  border: none;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

export const TrashCan = styled(DeleteIcon)`
  color: rgba(255, 255, 255, 0.25);
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

export const TrashCanEdit = styled(DeleteIcon)`
  color: rgba(36, 36, 36, 0.25);
  margin-left: 90%;
  &:hover {
    cursor: pointer;
    color: rgba(36, 36, 36, 1);
  }
`;

// Div for aligning cancel and add/edit buttons

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  flex-direction: row;
`;

// finish edit and return to course button

export const FinishEdit = styled.div`
  background: #ebe8e1;
  max-width: 540px;
  width: 100%;
  border-radius: 15px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: rgba(0, 0, 0, 0.87);
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    background-color: #e0e0e0;
  }
`;

// button for deleting a form piece from the db

export const DeleteForm = styled.button`
  opacity: 0.8;
  background: white;
  border: none;
  cursor: pointer;
  margin-left: 92%;
  height: 40px;
  width: 40px;
  color: grey;
  &:hover {
    opacity: 1;
    color: black;
  }
`;

// Tag Styling

export const TagStyles = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  margin: 3px;
  padding: 5px 10px 0 0;
  border-radius: 10px;
  color: black;

  &:hover {
    color: #eeeeee;
  }
`;
