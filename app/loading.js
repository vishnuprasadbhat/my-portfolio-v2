const Loading = () => {
  return (
    <div className="relative h-screen backdrop-filter bg-opacity-20 backdrop-blur-lg">
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </div>
  );
};

export default Loading;
