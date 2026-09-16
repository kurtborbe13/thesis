// Consistent stroke-based icon set for the Services section.
// Shares the square-linecap, thick-stroke language used by the AI Assistant
// button's roofline mark, so the icon set reads as one designed family
// rather than mixed Unicode glyphs.

const baseProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'square',
  strokeLinejoin: 'miter',
  'aria-hidden': true,
}

export function ResidentialIcon({ className }) {
  return (
    <svg className={className} {...baseProps}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-5.5h4V20" />
    </svg>
  )
}

export function CommercialIcon({ className }) {
  return (
    <svg className={className} {...baseProps}>
      <path d="M3 20h18" />
      <path d="M5 20V9h4v11" />
      <path d="M11 20V5h4v15" />
      <path d="M17 20v-7h4v7" />
    </svg>
  )
}

export function CorporateIcon({ className }) {
  return (
    <svg className={className} {...baseProps}>
      <rect x="6.5" y="4" width="11" height="16" />
      <path d="M9.5 8h5M9.5 12h5M9.5 16h5" />
    </svg>
  )
}

export function SolarIcon({ className }) {
  return (
    <svg className={className} {...baseProps}>
      <rect x="4.5" y="6.5" width="15" height="9" />
      <path d="M4.5 11h15M9.5 6.5v9M14.5 6.5v9" />
      <path d="M8 19.5h8" />
      <path d="M9.5 15.5 8 19.5M14.5 15.5l1.5 4" />
    </svg>
  )
}