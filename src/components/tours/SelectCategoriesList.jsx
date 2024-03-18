import React, {useCallback, useContext, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {TourContext} from "../../pages/app/profiles/tour/AddNewTour";
import {allCategoriesRequest} from "../../store/action/categories";
import Select from "react-select";

const SelectCategoriesList = () => {
    const list = useSelector(state => state.categories.list);
    const dispatch = useDispatch();
    const tourContext = useContext(TourContext);
    const {setTour, errors,tour} = tourContext;

    const options = useMemo(() => {
        return list.map(item => ({
            value: item.id,
            label: item.title
        }))
    }, [list]);

    const handleChange = useCallback((e) => {
        setTour((data) => ({
            ...data,
            categoryId: e.value
        }))
    }, [])

    useEffect(() => {
        dispatch(allCategoriesRequest())
    }, []);

    return (
        <>
            <Select
                defaultValue={tour.categoryId}
                onChange={handleChange}
                className={'destinations_select'}
                placeholder={'Categories...'}
                options={options}
            />
            {errors.categoryId ? <small className={'errors_message'}>is not allowed to be empty</small> : null}
        </>
    );
};

export default SelectCategoriesList;
