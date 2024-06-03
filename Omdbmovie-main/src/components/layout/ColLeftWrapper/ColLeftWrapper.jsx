import "./colLeftWrapper.scss";

const ColLeftWrapper = (props) => {
  // console.log({ props });
  return <div className="colLeft">{props.children}</div>;
};

export default ColLeftWrapper;
