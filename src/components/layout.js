import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./layout.css"

import IconSettingsGear from "./icon-settings-gear"
import IconHouse from "./icon-house"

const NAV_ITEMS = [
  {
    to: "/",
    icon: <IconHouse />,
    label: "Home",
  },
  {
    to: "settings",
    icon: <IconSettingsGear />,
    label: "Settings",
  },
]

const Layout = ({ children }) => {
  return (
    <>
      <main className="bg-gray-900">{children}</main>
      <footer className="flex justify-center items-center fixed bottom-0 h-16 bg-gray-800 border-t-2 border-gray-700 w-full">
        {NAV_ITEMS.map(ni => (
          <Link
            key={ni.to}
            to={ni.to}
            className="flex flex-col items-center h-full p-2 w-24"
            activeClassName="bg-gray-700"
          >
            {ni.icon}
            {ni.label}
          </Link>
        ))}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
