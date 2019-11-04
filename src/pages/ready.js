import React, { useState } from "react"
import { Link } from "gatsby"
import Card from "../components/card"
import Layout from "../components/layout"
import IconBackArrow from "../components/icon-back-arrow"
import useCardColor from "../hooks/useCardColor"

const Ready = ({ location }) => {
  const [color] = useCardColor()
  const [cardRevealed, setCardRevealed] = useState(false)

  const params = new URLSearchParams(location.search)

  function toggleCard() {
    setCardRevealed(v => !v)
  }

  return (
    <Layout>
      <Link to="/">
        <IconBackArrow />
      </Link>
      <div className="h-screen w-screen flex justify-center items-center">
        <Card color={color} revealed={cardRevealed} onClick={toggleCard}>
          {params.get("value")}
        </Card>
      </div>
    </Layout>
  )
}

export default Ready
