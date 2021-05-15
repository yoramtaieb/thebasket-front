import * as React from "react";

function Sun(props) {
  return (
    <svg
      width={35}
      height={35}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={22.31} cy={22.31} r={22.31} fill="#F7F7EB" />
      <path
        d="M22 13.986c-4.42 0-8.015 3.596-8.015 8.015 0 4.42 3.596 8.016 8.015 8.016 4.419 0 8.015-3.596 8.015-8.016S26.42 13.985 22 13.985zM22 11.63c-.864 0-1.564-.701-1.564-1.564V7.564a1.564 1.564 0 113.128 0v2.502c0 .863-.7 1.563-1.564 1.563zM22 32.37c-.864 0-1.564.7-1.564 1.564v2.501a1.564 1.564 0 103.128 0v-2.5c0-.865-.7-1.565-1.564-1.565zM29.332 14.668c-.61-.611-.61-1.601 0-2.212l1.77-1.77a1.565 1.565 0 012.211 2.212l-1.77 1.77c-.61.61-1.6.61-2.21 0zM14.667 29.333a1.562 1.562 0 00-2.212 0l-1.77 1.769a1.564 1.564 0 002.212 2.211l1.77-1.77c.61-.61.61-1.6 0-2.21zM32.37 21.999c0-.864.7-1.564 1.564-1.564h2.502a1.564 1.564 0 110 3.127h-2.502c-.864 0-1.564-.7-1.564-1.563zM11.629 21.999c0-.864-.7-1.564-1.564-1.564H7.564a1.564 1.564 0 100 3.127h2.502c.863 0 1.563-.7 1.563-1.563zM29.332 29.334c.611-.61 1.602-.61 2.212 0l1.77 1.77a1.563 1.563 0 11-2.212 2.21l-1.77-1.769c-.61-.61-.61-1.6 0-2.21zM14.667 14.668c.61-.611.61-1.601 0-2.212l-1.77-1.768a1.564 1.564 0 00-2.211 2.21l1.77 1.77c.61.611 1.6.611 2.21 0z"
        fill="#161C22"
      />
    </svg>
  );
}

export default Sun;