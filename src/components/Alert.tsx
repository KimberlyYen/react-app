import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    onClose: () => void;
}


const Alert = ({children, onClose} : Props ) => {
  return (
    <div>
      <div 
      className="alert alert-warning alert-dismissible fade show" role="alert"
      >
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
        onClick={onClose}
        >
            {children}
        </button>
      </div>
    </div>
  );
};

export default Alert;
