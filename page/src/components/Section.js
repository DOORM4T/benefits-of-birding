import React from "react"

const Section = ({
  wings = false,
  backgroundColor,
  color,
  paddingTop,
  paddingBottom,
  children,
}) => {
  return (
    <section
      className={wings && "wings"}
      style={{ backgroundColor, color, paddingTop, paddingBottom }}
    >
      {children}
    </section>
  )
}

export default Section
