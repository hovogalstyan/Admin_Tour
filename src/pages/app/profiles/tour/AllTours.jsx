import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {listTourRequest} from "../../../../store/action/tours";

const AllTours = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listTourRequest())
    }, []);

    return (
        <div className={'all_tour'}>

        </div>
    );
};

export default AllTours;
