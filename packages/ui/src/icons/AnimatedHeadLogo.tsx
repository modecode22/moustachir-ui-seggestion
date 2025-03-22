import { cn } from "#lib/utils"
import * as React from "react"

function AnimatedHeadLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 374 344"
      className={cn("",props.className)}
      fill="none"
      {...props}
    >
      <g  className="stroke-primary-300 "  strokeWidth={5}>
        <path d="M232.012 141.287l-.242-1.206h-42.149l69.566-111.304a4.317 4.317 0 013.663-2.027H326.522a4.315 4.315 0 014.316 4.316V281.18a4.32 4.32 0 01-4.316 4.32h-62.125a4.32 4.32 0 01-4.235-3.472h0l-28.15-140.741zM184.217 140.081h-42.15l-.241 1.206-28.15 140.741h0a4.32 4.32 0 01-4.235 3.472H47.316A4.319 4.319 0 0143 281.18V31.066a4.315 4.315 0 014.316-4.316h63.671c1.489 0 2.873.763 3.664 2.027l69.566 111.304z" />
      </g>
    </svg>
  )
}

export default AnimatedHeadLogo
