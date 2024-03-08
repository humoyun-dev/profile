import "./loader.scss";

const Loader = () => {
  return (
    <div className="flex items-center gap-x-3">
      <div className="spinner"></div>
      <p className="text-2xl font-bold">Loading ...</p>
    </div>
  );
};

export default Loader;
