import React from 'react';

import "./Button.scss";

export default function Button({label, onClick, disabled}) {
  return (
    <button
      className={`Button ${disabled ? "disabled" : ""}`}
      disabled={disabled}
      onClick={(e) => {onClick(e)}}
    >
      {label}
    </button>
  );
}