import React from "react"
import { Link } from "gatsby"
import BirdImage from "../images/bird.png"

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img
          src={BirdImage}
          alt="bird"
          height={100}
          style={{ transform: "scaleX(-1)" }}
        />
      </Link>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
