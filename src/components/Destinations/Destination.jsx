import React, {useCallback, useState} from 'react';
import {createPortal} from "react-dom";
import Modal from "react-modal";
import {useDispatch} from "react-redux";
// import {destinationsDeleteRequest, destinationsUpdateRequest} from "../../store/actions/destinations";
import imageError from "../../assets/icon/imageError.webp";

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


const Destination = ({d}) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [destination, setDestination] = useState({
        title: d.title,
        image: {},
    })

    const handleOnError = useCallback((ev) => {
        return ev.target.src = imageError;
    }, [imageError])

    const handleFileSelect = useCallback((ev) => {
        [...ev.target.files].forEach((file) => {
            setDestination({...destination, image: file});
        });

        ev.target.value = '';
    }, [destination]);

    const submit = useCallback(  (ev) => {
        ev.preventDefault();
        try{
            // dispatch(destinationsUpdateRequest({id: d.id, destination}))
            setIsEdit(false);
        }catch (e) {
            console.log(e)
        }
    }, [destination, d.id]);

    const handleDelete = useCallback( () => {
        try{
            // dispatch(destinationsDeleteRequest({id: d.id}))
        }catch (e) {
            console.log(e)
        }
    }, [d.id])

    return(
       <div className="destination">
            <span className="id">{d.id}</span>
            <span>{d.title}</span>
            <span>24 Dek 2023</span>
            <div className="buttons">
                <EditIcon onClick={() => setIsEdit(true)}/>
                <DeleteIcon onClick={handleDelete} />
                <ViewIcon onClick={() => setIsOpen(true)}/>
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
                                   placeholder="Category Name"
                                   value={destination.title}
                                   onChange={(ev) =>
                                       setDestination({...destination, title: ev.target.value})}
                            />
                            <input type="file"
                                   name="file"
                                   onChange={handleFileSelect}
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

                        <p>{`Destination Name ${d.title}`}</p>

                        <img src={d.image} alt="" onError={handleOnError} style={{width: "100%", height: 500}}/>

                    </div>
                </Modal>
            </>, document.getElementById("root")) : null}

        </div>
    )
}

export default Destination;