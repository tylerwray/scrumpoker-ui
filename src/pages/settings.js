import React from "react"
import Layout from "../components/layout"
import useCardColor from "../hooks/useCardColor"
import Card from "../components/card"

const COLORS = [
  "bg-black",
  "bg-gray-700",
  "bg-red-500",
  "bg-orange-600",
  "bg-yellow-500",
  "bg-green-500",
  "bg-teal-500",
  "bg-blue-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-pink-500",
]

const Settings = () => {
  const [color, setColor] = useCardColor()

  return (
    <Layout>
      <div className="flex justify-center my-12">
        <Card revealed color={color}>
          144
        </Card>
      </div>
      <div className="grid grid-fit max-w-lg my-0 mx-auto">
        {COLORS.map(c => (
          <div
            onClick={() => setColor(c)}
            key={c}
            className="flex justify-center items-center m-4 cursor-pointer"
          >
            <div className={`h-12 w-12 rounded-lg shadow-inner ${c}`} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Settings
