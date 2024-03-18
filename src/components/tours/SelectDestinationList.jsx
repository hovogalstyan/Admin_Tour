import React, {useCallback, useContext, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {allDestinationRequest} from "../../store/action/destinations";
import Select from "react-select";
import {TourContext} from "../../pages/app/profiles/tour/AddNewTour";

const SelectDestinationList = () => {
    const list = useSelector(state => state.destination.list);
    const dispatch = useDispatch();
    const tourContext = useContext(TourContext);
    const {setTour, errors} = tourContext

    const options = useMemo(() => {
        return list.map(item => ({
            value: item.id,
            label: item.title
        }))
    }, [list]);

    const handleChange = useCallback((e) => {
        setTour((data) => ({
            ...data,
            destinationId: e.value
        }))
    }, [])

    useEffect(() => {
        dispatch(allDestinationRequest())
    }, []);

    return (
        <>
            <Select
                onChange={handleChange}
                className={'destinations_select'}
                placeholder={'Destinations...'}
                options={options}
            />
            {errors.destinationId ? <small className={'errors_message'}>is not allowed to be empty</small> : null}
        </>
    );
};

export default SelectDestinationList;
