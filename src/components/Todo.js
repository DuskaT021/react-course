import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

//false cause we don't want the modal to be open in the first place
function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
        // we're changing the state here 

    }
    function closeModalHandler() {
        setModalIsOpen(false);

    }
    return (
        <div className='card'>
            <h2>{props.text}</h2>
            <div className='actions'>
                <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            {/* If we left these custom components like this they would always render
            We want them to be displaye only when setModalIsOpen */}
            {/* To use the state we check the if the Modal is set to truthy */}
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
            {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
        </div>
    );
}
export default Todo;
