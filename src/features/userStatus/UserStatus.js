import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeStatus } from "./statusSlice";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
const UserStatus = () => {
  const status = useSelector((state) => state.userStatus.status);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [newStatus, setNewStatus] = useState(false);

  return (
    <div className="user-status">
      {edit ? (
        <input
          type="text"
          placeholder={status}
          onChange={(event) => {
            setNewStatus(event.target.value);
          }}
        />
      ) : (
        <p>{status}</p>
      )}
      ;
      {!edit ? (
        <button onClick={() => setEdit(true)}>
          <EditIcon />
        </button>
      ) : (
        <button
          onClick={() => {
            setEdit(false);
            dispatch(changeStatus(newStatus));
          }}
        >
          <CheckIcon />
        </button>
      )}
    </div>
  );
};

export default UserStatus;
