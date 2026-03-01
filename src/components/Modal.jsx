import React from "react";

const Modal = ({ heading, onClose , children}) => {
  return (
    //BACKDROP
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={onClose}>
      {/* CONTAINER */}
      <div className="border-black bg-white text-black rounded-xl shadow-lg p-6 w-full max-w-md relative" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-row justify-between m-2 p-2 border-b-black">
          <h1 className="border-black"> {heading}</h1>
          <button
            className="hover:border-black hover:cursor-pointer border border-black rounded-lg p-2"
            onClick={onClose}
          >
            {" "}
            X{" "}
          </button>
        </div>
        <hr></hr>
        {children}
      </div>
    </div>
  );
};

export default Modal;
