function MainHeading() {
  return (
    <div className="backdrop-blur-2 p-3 fixed top-0 w-full ml-16 h-28 border-l-0 border-r-0 border-t-0 border border-1  border-border-twitter">
      <h2 className="text-xl font-bold ml-2">Home</h2>
      <div className="w-full p-3 flex flex-row items-center justify-center absolute -left-10">
        <div className="w-full flex justify-center">
          <a href="/" className="mt-6">
            For you
          </a>
        </div>
        <div className="w-full flex justify-center">
          <a href="/" className="mt-6">
            Following
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainHeading;