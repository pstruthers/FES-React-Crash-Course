import "./Modal.css";

function Modal({ title, cancelDelete, confirmDelete }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={cancelDelete}
          >
            Cancel
          </button> 
          <button className="btn" onClick={confirmDelete}>
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
