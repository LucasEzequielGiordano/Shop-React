import "./Loader.css";

const Loading = ({ greeting }) => {
  return (
    <div className="containerLoader">
      <h2 className="loading">{greeting}</h2>
    </div>
  );
};

export default Loading;
