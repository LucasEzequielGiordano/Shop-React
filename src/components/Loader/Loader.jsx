import "./Loader.css";

// This function takes in a prop returns a div with an h2 with a class of loading and the prop as the text.
const Loading = ({ greeting }) => {
  return (
    <div className="containerLoader">
      <h2 className="loading">{greeting}</h2>
    </div>
  );
};

export default Loading;
