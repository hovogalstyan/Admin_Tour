import React, {useCallback, useState} from 'react';
import {createPortal} from "react-dom";
import Modal from "react-modal";
import imageError from "../../assets/icon/imageError.webp";
import {useDispatch} from "react-redux";
// import {toursDeleteRequest} from "../../store/actions/tours";

import { ReactComponent as EditIcon} from "../../assets/icon/edit.svg";
import { ReactComponent as DeleteIcon} from "../../assets/icon/delete.svg";
import { ReactComponent as ViewIcon} from "../../assets/icon/view.svg";
import { ReactComponent as CloseIcon} from "../../assets/icon/close.svg";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Tour = ({t}) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [tour, setTour] = useState({
        title: t.title,
        featuredImage: {},
        src: [],
    })

    const handleOnError = useCallback((ev) => {
        return ev.target.src = imageError;
    }, [imageError])

    const handleFileSelect = useCallback((ev) => {
        [...ev.target.files].forEach((file) => {
            setTour({...tour, featuredImage: file});
        });

        ev.target.value = '';
    }, [tour]);

    const handleFilesSelect = useCallback((ev) => {
        const files = [];
        [...ev.target.files].forEach((file) => {
            files.push(file);
        });

        setTour({...tour, src: [...files]});
        ev.target.value = '';
    }, [tour]);

    const submit = useCallback(  (ev) => {
        ev.preventDefault();
        try{
            // dispatch(categoriesUpdateRequest({id: t.id, tour}))
            setIsEdit(false);
        }catch (e) {
            console.log(e)
        }
    }, [tour, t.id]);

    const handleDelete = useCallback( () => {
        try{
            // dispatch(toursDeleteRequest({id: t.id}))
        }catch (e) {
            console.log(e)
        }
    }, [t.id])

    return(
        <div className="tour">
            <span className="id">{t.id}</span>
            <span>{t.title}</span>
            <span>24 Dek 2023</span>
            <div className="buttons">
                <EditIcon onClick={() => setIsEdit(true)} />
                <DeleteIcon onClick={handleDelete} />
                <ViewIcon onClick={() => setIsOpen(true)} />
            </div>

            {isEdit ? createPortal(<>
                <Modal
                    isOpen={isEdit}
                    onRequestClose={() => setIsEdit(false)}
                    style={customStyles}>
                    <div className="modals">
                        <CloseIcon onClick={() => setIsEdit(false)} className="close"/>
                        <form onSubmit={submit}>
                            <input type="text"
                                   name="title"
                                   placeholder="Category Title"
                                   value={tour.title}
                                   onChange={(ev) =>
                                       setTour({...tour, title: ev.target.value})}
                            />
                            <input type="file"
                                   name="file"
                                   onChange={handleFileSelect}
                            />
                            <input type="file"
                                   name="src"
                                   onChange={handleFilesSelect}
                                   multiple
                            />
                            <button type="submit" className="save">Save</button>
                        </form>
                    </div>
                </Modal>
            </>, document.getElementById("root")) : null}
            {isOpen ? createPortal(<>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    style={customStyles}>
                    <div className="image">
                        <CloseIcon  onClick={() => setIsOpen(false)} className="close"/>

                        <p>{`Tour Name ${t.title}`}</p>

                        <img src={t.featuredImage} alt="" onError={handleOnError}  style={{width: 50, height: 50}}/>

                    </div>
                </Modal>
            </>, document.getElementById("root")) : null}
        </div>
    )
}

export default Tour;