import { BsArrowBarLeft } from "react-icons/bs";

const CloseButton = (props) => {
  return (
    <div className="close-button" onClick={props.onClick}>
      <BsArrowBarLeft className="hamburger-btn-icon" />
    </div>
  );
};

export default CloseButton;
