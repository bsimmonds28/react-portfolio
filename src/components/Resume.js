import React from "react";

export default function Resume() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
    <div className="container px-5 center mx-auto">
      <button
        className="bg-teal-800 rounded items-center text-white h-full sm:w-1/2 w-full items-center active:bg-teal-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-teal-600 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        View Resume
      </button>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <embed src="./bethResume.pdf" frameborder="0" width="100%" height="400px"/>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}