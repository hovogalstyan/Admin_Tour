import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/icon/home.svg";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Destination from "./Destination";

const DestinationsList = () => {
    const navigate = useNavigate();

    const destinations = useSelector(state => state.destinations.destinationsList);

    return (
        <div className={"destination-list"}>
            <div className={"path"}>
                <HomeIcon onClick={() => navigate("/profile")}/>
                <span onClick={() => navigate("/profile")}> Home </span>
                <span>\</span>
                <span> All destinations </span>
            </div>

            <div className={"list"}>
                <h4>All destinations</h4>
                <div className={"destinations-list"}>
                    <div className={"destinations-bar"}>
                        <span className={"id"}>#</span>
                        <span>Destinations</span>
                        <span>Date</span>
                        <span>Actions</span>
                    </div>

                    {destinations.map(d => {
                        return <Destination d={d} key={d.id}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default DestinationsList;