import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/icon/home.svg";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Category from "./Category";

const CategoriesList = () => {
    const navigate = useNavigate();

    const categories = useSelector(state => state.categories.categoriesList);

    return (
        <div className={"categories-list"}>
            <div className="path">
                <HomeIcon onClick={() => navigate("/home")}/>
                <span onClick={() => navigate("/home")}> Home </span>
                <span>\</span>
                <span> All categories </span>
            </div>

            <div className="list">
                <h4>All categories</h4>
                <div className="categoriesList">
                    <div className="categoriesBar">
                        <span className="id">#</span>
                        <span>Categories tours</span>
                        <span>Date</span>
                        <span>Actions</span>
                    </div>
                    {categories.map(c => {
                        return <Category c={c} key={c.id}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategoriesList;