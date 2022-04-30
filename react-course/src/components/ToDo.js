export function ToDo(props) {

    
    function handleDelete (){
        console.log("yes")
        console.log(props.text)
        

    }
    const{text}= props
    return (
        <div className="card">
          <h1 className="actions">Title</h1>
          <h2>{text}</h2>
          <button className="btn" onClick = {()=> handleDelete()}>Delete</button>
        </div>
      
    );
  }