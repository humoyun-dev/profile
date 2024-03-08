import "./404.scss";

const Error500 = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>500 - Internal Server Error</h2>
        </div>
        <a href="/">Go TO Homepage</a>
      </div>
    </div>
  );
};

export default Error500;
