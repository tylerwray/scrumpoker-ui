import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./layout.css"

import IconSettingsGear from "./icon-settings-gear"
import IconBackArrow from "./icon-back-arrow"

const NAV_ITEMS = [
  {
    to: "/",
    icon: <IconBackArrow />,
  },

  {
    to: "/settings",
    icon: <IconSettingsGear />,
  },
]

const Layout = ({ children }) => {
  return (
    <>
      <nav
        style={{ height: "10vh" }}
        className="flex justify-end items-center w-full"
      >
        {NAV_ITEMS.map(ni => (
          <Link
            key={ni.to}
            to={ni.to}
            className="flex flex-col justify-center items-center h-full p-2 w-24"
          >
            {ni.icon}
          </Link>
        ))}
      </nav>
      <main className="bg-gray-900">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
