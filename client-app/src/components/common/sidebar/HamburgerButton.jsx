import { BsArrowBarRight } from "react-icons/bs";

const HamburgerButton = (props) => {
  return (
    <div className="hamburger-btn" onClick={props.onClick}>
      <BsArrowBarRight className="hamburger-btn-icon" />
      <div className="hamburger-btn-hint">Отвори навигациско мени</div>
    </div>
  );
};

export default HamburgerButton;
