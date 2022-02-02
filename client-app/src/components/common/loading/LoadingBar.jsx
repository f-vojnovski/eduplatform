import "./LoadingBar.css";

const LoadingBar = () => {
  return (
    <div className="loading-bar">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>Вчитување</p>
    </div>
  );
}

export default LoadingBar;
