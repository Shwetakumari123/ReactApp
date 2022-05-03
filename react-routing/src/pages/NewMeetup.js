import NewMeetUps from "../components/meetups/NewMeetUps";
import {useNavigate} from 'react-router-dom'
function NewMeetup() {
  const history = useNavigate()
  function addMeetUpHandler(meetUps) {
    
    fetch("https://react-getting-started-5ff6a-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetUps),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(()=>{
      history('/')
    })
  }
  return (
    <div>
      <NewMeetUps AddNewMeetUps={addMeetUpHandler} />
    </div>
  );
}

export default NewMeetup;
