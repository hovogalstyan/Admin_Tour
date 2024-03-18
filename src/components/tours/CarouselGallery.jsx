import React, {useCallback, useContext, useEffect} from 'react';
import {TourContext} from "../../pages/app/profiles/tour/AddNewTour";
import CustomsPortal from "../CustomsPortal";
import {FaWindowClose} from "react-icons/fa";
import classNames from "classnames";
import {GrLinkNext, GrLinkPrevious} from "react-icons/gr";

const CarouselGallery = () => {
    const {
        tour: {gallery},
        setActiveGalleryIndex,
        activeGalleryIndex,
        setShowCarousel,
        showCarousel
    } = useContext(TourContext);

    useEffect(() => {
        if (showCarousel) {
            const time = setTimeout(() => {
                setShowCarousel(null)
            }, 650);

            return () => clearTimeout(time)
        }
    }, [showCarousel]);

    const handleClose = useCallback(() => {
        setShowCarousel(true)
    }, []);

    const handleGetBottomIndex = useCallback((index) => () => {
        setActiveGalleryIndex(index)
    }, []);

    const handlePrevious = useCallback(() => {
        if (activeGalleryIndex !== 0) {
            setActiveGalleryIndex(activeGalleryIndex - 1)
        }
    }, [activeGalleryIndex]);

    const handleNext = useCallback(() => {
        if (activeGalleryIndex + 1 < gallery.length) {
            setActiveGalleryIndex(activeGalleryIndex + 1)
        } else {
            setActiveGalleryIndex(0)
        }
    }, [activeGalleryIndex, gallery]);

    return (
        showCarousel !== null
            ? <CustomsPortal className={'slider_gallery'}>
                <div className={classNames('modal', {
                    isActive: showCarousel
                })}>
                    <FaWindowClose className={'close'} onClick={handleClose}/>
                    <div className="carousel">
                        <div className="previous carousel_icon">
                            <span onClick={handlePrevious} className={'icon'}><GrLinkPrevious/></span>
                        </div>
                        {
                            gallery.map((item, index) => (
                                <figure key={index} className={classNames({
                                    activeImages: index === activeGalleryIndex
                                })}>
                                    <img src={URL.createObjectURL(item)} alt={item.name}/>
                                </figure>
                            ))
                        }
                        <div className="next carousel_icon">
                            <span onClick={handleNext} className={'icon'}> <GrLinkNext/></span>
                        </div>
                    </div>
                    <div className="bottom_list">
                        {
                            gallery.map((item, index) => (
                                <figure onClick={handleGetBottomIndex(index)} key={index + index} className={classNames({
                                    activeBottomImages: index === activeGalleryIndex
                                })}>
                                    <img src={URL.createObjectURL(item)} alt={item.name}/>
                                </figure>
                            ))
                        }
                    </div>
                </div>

            </CustomsPortal>
            : null
    );
};

export default CarouselGallery;
