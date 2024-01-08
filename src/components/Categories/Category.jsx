import React, {useCallback, useState} from 'react';
import {createPortal} from "react-dom";
import Modal from "react-modal";
import imageError from "../../assets/icon/imageError.webp";
import {useDispatch} from "react-redux";
// import {categoriesDeleteRequest, categoriesUpdateRequest} from "../../store/actions/categories";

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

const Category = ({c}) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState({
        title: c.title,
        icon: {},
    })

    const handleOnError = useCallback((ev) => {
        return ev.target.src = imageError;
    }, [imageError])

    const handleFileSelect = useCallback((ev) => {
        [...ev.target.files].forEach((file) => {
            setCategory({...category, icon: file});
        });

        ev.target.value = '';
    }, [category]);

    const submit = useCallback(  (ev) => {
        ev.preventDefault();
        try{
            // dispatch(categoriesUpdateRequest({id: c.id, category}))
            setIsEdit(false);
        }catch (e) {
            console.log(e)
        }
    }, [category, c.id]);

    const handleDelete = useCallback( () => {
        try{
            // dispatch(categoriesDeleteRequest({id: c.id}))
        }catch (e) {
            console.log(e)
        }
    }, [c.id])

    return(
        <div className="category">
        <span className="id">{c.id}</span>
        <span>{c.title}</span>
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
                               value={category.title}
                               onChange={(ev) =>
                                   setCategory({...category, title: ev.target.value})}
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

                    <p>{`Category Name ${c.title}`}</p>

                    <img src={c.icon} alt="" onError={handleOnError}  style={{width: 50, height: 50}}/>

                </div>
            </Modal>
        </>, document.getElementById("root")) : null}
    </div>
    )
}

export default Category;