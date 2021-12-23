import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import "./style.scss"

export const Modal = ({ isShowing, hide, children }) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
        <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">× </span>
            </button>
        </div>
        <p>
            {children}
        </p>
        </div>
    </div>
  </React.Fragment>, document.body
) : null;

export const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
  
    function toggle() {
      setIsShowing(!isShowing);
    }
  
    return {
      isShowing,
      toggle,
    }
};