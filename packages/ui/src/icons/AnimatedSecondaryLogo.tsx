import { cn } from "#lib/utils"
import * as React from "react"

function AnimatedSecondaryLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 394 176"
      className={cn("",props.className)}
      fill="none"
      {...props}
    >
      <g  className="stroke-primary-300 "  strokeWidth={5}>
        <path
        d="M4 4h42.786l43.989 70.223-22.175.003h-3.277l-.644 3.214L45.722 172H4V4zm-.08 0V0h42.906L3.92 4zM201 4h42.786l43.989 70.223-22.175.003h-3.277l-.645 3.214L242.723 172H201V4zm-.079 0V0h42.905l-42.905 4zM103 4h42.786l43.989 70.223-22.175.003h-3.277l-.645 3.214L144.723 172H103V4zm-.079 0V0h42.905l-42.905 4z"
        />
      </g>
    </svg>
  )
}

export default AnimatedSecondaryLogo
