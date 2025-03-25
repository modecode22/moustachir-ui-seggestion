import * as React from "react";

function LogoHead({pathClasses , ...props}: React.SVGProps<SVGSVGElement>& {pathClasses:string}) {
  return (
    <svg
      viewBox="0 0 96 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      
    >
      <path
        d="M50.705 36.749L72.462 1.938a.4.4 0 01.34-.188H93.6a.4.4 0 01.4.4v81.698a.4.4 0 01-.4.4H73.308a.401.401 0 01-.393-.321h0L63.72 37.955l-.242-1.206H50.706zM23.538 1.938l21.757 34.81H32.521l-.24 1.207-9.196 45.972h0a.401.401 0 01-.393.322H2.4a.4.4 0 01-.4-.401V2.15a.4.4 0 01.4-.4H23.198a.4.4 0 01.34.188z"
        fill="none"
        strokeWidth={3}
        stroke="CurrentColor"
        className={pathClasses}
      />
    </svg>
  );
}

export default LogoHead;

