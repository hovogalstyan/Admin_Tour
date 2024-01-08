import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/icon/home.svg";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Tour from "./Tour";

const ToursList = () => {
    const navigate = useNavigate();

    const tours = useSelector(state => state.tours.toursList);

    return (
        <div className={"tours-list"}>
            <div className="path">
                <HomeIcon onClick={() => navigate("/home")}/>
                <span onClick={() => navigate("/home")}> Home </span>
                <span>\</span>
                <span> All tours </span>
            </div>

            <div className="list">
                <h4>All tours</h4>
                <div className="toursList">
                    <div className="toursBar">
                        <span className="id">#</span>
                        <span>Tours</span>
                        <span>Date</span>
                        <span>Actions</span>
                    </div>
                    {tours.map(t => {
                        return <Tour t={t} key={t.id}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ToursList;