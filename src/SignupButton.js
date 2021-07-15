import React from "react";

function SignupButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="190"
      height="50"
      viewBox="0 0 190 50"
    >
      <defs>
        <filter
          id="Rectangle_241"
          width="190"
          height="50"
          x="0"
          y="0"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="4"></feOffset>
          <feGaussianBlur result="blur" stdDeviation="2.5"></feGaussianBlur>
          <feFlood floodOpacity="0.161"></feFlood>
          <feComposite in2="blur" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
      </defs>
      <g data-name="CTA Button" transform="translate(-809.5 -915.5)">
        <g filter="url(#Rectangle_241)" transform="translate(809.5 915.5)">
          <rect
            width="175"
            height="35"
            fill="#f91c85"
            data-name="Rectangle 241"
            rx="7"
            transform="translate(7.5 3.5)"
          ></rect>
        </g>
        <text
          fill="#f0efef"
          data-name="LOG IN"
          fontFamily="Nunito-Black, Nunito"
          fontSize="16"
          fontWeight="800"
          letterSpacing=".02em"
          transform="translate(904.5 943)"
        >
          <tspan x="-28.208" y="0">
            LOG IN
          </tspan>
        </text>
      </g>
    </svg>
  );
}

export default SignupButton;