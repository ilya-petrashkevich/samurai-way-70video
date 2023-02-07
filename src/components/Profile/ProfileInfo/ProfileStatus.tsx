import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

type profileStatusPropsType = {
    status: string
}
const ProfileStatus = (props: profileStatusPropsType) => {
    return (
        <>
            <div>
                <span>{props.status}</span>
            </div>
            <div>
                <input value={props.status}/>
            </div>
        </>
    );
};

export default ProfileStatus;