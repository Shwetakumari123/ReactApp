import { useState } from "react";
import { BackDrop } from "./BackDrop";
import { Modal } from "./Modal";

export function ToDo(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleDelete() {
    console.log("yes");
    setIsModalOpen(true);
    console.log(props.text);
  }
  
  

  function onClickBackDrop(){
    setIsModalOpen(false)
  }
  const { text } = props;
  return (
    <div className="card">
      <h1 className="actions">Title</h1>
      <h2>{text}</h2>
      <button className="btn" onClick={() => handleDelete()}>
        Delete
      </button>
     { isModalOpen ? <Modal onCancel={onClickBackDrop} onConfirm={onClickBackDrop}/> :null}
     {isModalOpen?<BackDrop  onClickFunction = {onClickBackDrop}/> :null}

    </div>
  );
}
