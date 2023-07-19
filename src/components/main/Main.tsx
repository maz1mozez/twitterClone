import MainHeading from "./mainHeading/MainHeading";

function Main() {
  return (
    <main>
      <MainHeading/>
      <div className="ml-16 mt-113 p-5 flex flex-row">
        <div className="bg-twitter-blue w-10 h-10 rounded-full flex justify-center items-center">
          L
        </div>
        <div className="">
          <div className="border border-twitter-blue rounded-full flex items-center p-1 h-7">
            <span className="text-xs text-twitter-blue">Everyone</span>
            <span className="material-symbols-outlined text-twitter-blue">expand_more</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;