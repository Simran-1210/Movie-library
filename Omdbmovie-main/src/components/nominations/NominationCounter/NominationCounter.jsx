import "./nominationCounter.scss";
const NominationCounter = (props) => {
  // console.log(props.nominationList);
  return (
    <p className="nominationCounter">
      <span> Your PlayList : {props.nominationList.length}</span>
    </p>
  );
};

export default NominationCounter;
