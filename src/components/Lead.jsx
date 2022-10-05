import "./Lead.css";
const Lead = function (props) {
  return (
    <div className="lead">
      <span className="lead__text">
        Hey! My name is Ryan. I'm passionate about
      </span>
      <div class="scrolling-words-container">
        <div class="scrolling-words-box">
          <ul>
            <li>web development</li>
            <li>photography</li>
            <li>film</li>
            <li>basketball</li>
            <li>football</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lead;
