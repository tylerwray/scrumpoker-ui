import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import useCardColor from "../hooks/useCardColor";
import useSequence from "../hooks/useSequence";

function IndexPage() {
  const [color] = useCardColor();
  const { sequence } = useSequence();

  return (
    <Layout>
      <SEO title="Home" />
      <div className="grid grid-fit max-w-lg my-0 mx-auto">
        {sequence.map(value => (
          <Link
            key={value}
            className="flex justify-center m-4"
            to="/ready/"
            state={{ value }}
          >
            <Card color={color} size="sm">
              {value}
            </Card>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export default IndexPage;
