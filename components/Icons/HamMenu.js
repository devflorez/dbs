import React from "react";

export default function HamMenu(props) {
  return (
    <svg viewBox="0 0 100 80"  {...props} >
      <rect width="100" height="12" rx="8"></rect>
      <rect y="25" width="100" height="12" rx="8"></rect>
      <rect y="50" width="50" height="12" rx="8"></rect>

    </svg>
  );
}
