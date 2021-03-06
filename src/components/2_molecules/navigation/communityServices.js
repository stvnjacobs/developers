import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Col from "./col";

const _ = require("lodash");

const CommunityServices = ({ data }) => {
  return (
    <Col name="community-services" header="Engage">
      {data.allCommunityServices.edges.map((link, i) => {
        const node = link.node;
        return (
          <li className="sub-menu__li sub-menu__header-li" key={i}>
            <a
              key={node.id}
              href={node.url ? node.url : null}
              className={`
                  header__link
                  sub-menu__link
                  ${_.kebabCase(node.title)}
                `}
              role="menuitem"
            >
              {node.title}
            </a>
          </li>
        );
      })}
    </Col>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query communityServices {
        allCommunityServices {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
    `}
    render={data => <CommunityServices data={data} {...props} />}
  />
);
