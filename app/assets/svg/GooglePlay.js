import * as React from "react";
const SvgGooglePlay = (props) => (
  <svg className="gplay" xmlns="http://www.w3.org/2000/svg" width={182}  {...props}>
    <g fill="none" fillRule="evenodd">
      <rect  fill="#E5ECF4" rx={4} />
      <g
        fill="#495567"
        fontFamily="SpaceMono-Bold, Space Mono"
        fontWeight="bold"
      >
        <text fontSize={20} letterSpacing={-0.893} transform="translate(52 8)">
          <tspan x={0} y={37}>
            {"GooglePlay"}
          </tspan>
        </text>
        <text fontSize={10} letterSpacing={-0.446} transform="translate(52 8)">
          <tspan x={0} y={11}>
            {"Get it on"}
          </tspan>
        </text>
      </g>
      <path
        fill="#495567"
        fillRule="nonzero"
        d="M19.605 14.345a2.348 2.348 0 0 0-2.253-.108l12.152 12.178 3.973-3.992-13.872-8.078zm-3.37 1.02A2.476 2.476 0 0 0 16 16.42v22.276c0 .373.083.729.238 1.047l12.147-12.205-12.15-12.175zm13.27 13.297-12.132 12.19c.322.149.665.214 1.007.214.422 0 .844-.101 1.225-.33l13.875-8.09-3.974-3.984zM38.76 25.5a.221.221 0 0 0-.014-.01l-3.852-2.242-4.27 4.29 4.273 4.28 3.863-2.252a2.362 2.362 0 0 0 1.144-2.033A2.36 2.36 0 0 0 38.76 25.5z"
      />
    </g>
  </svg>
);
export default SvgGooglePlay;

