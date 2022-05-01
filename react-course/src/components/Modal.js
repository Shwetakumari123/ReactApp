export function Modal(props) {
  const { onCancel, onConfirm } = props;

  function onCancelHandler() {
    onCancel();
  }

  function onConfirmHandler() {
    onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure</p>
      <button className="btn btn--alt" onClick={onCancelHandler}>
        {" "}
        Cancel
      </button>
      <button className="btn" onClick={onConfirmHandler}>
        {" "}
        Confirm
      </button>
    </div>
  );
}

//export default Modal
