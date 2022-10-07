import "./Lead.scss";
const Lead = function (props) {
  return (
    <div className="lead">
      <span className="lead__text">
        Hey! My name is Ryan. I'm passionate about
      </span>
      <div className="scrolling-words-container">
        <div className="scrolling-words-box">
          <ul>
            <li>software</li>
            <li>film</li>
            <li>sports</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lead;
