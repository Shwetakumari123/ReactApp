import MeetUpItem from "./MeetUpItem";
function MeetUpList(props) {
  return (
    <ul>
      {props.data.map((item) => {
        return (
          <li>
            <MeetUpItem
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              address={item.address}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default MeetUpList;
