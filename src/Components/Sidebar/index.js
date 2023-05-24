import { Menu, Divider } from "antd";
import { NavLink } from "react-router-dom";
import { ReactComponent as InfluencerOne } from "../../assets/icons/material-icon-1.svg";
import { ReactComponent as InfluencerTwo } from "../../assets/icons/material-icon-2.svg";
import { ReactComponent as InfluencerThree } from "../../assets/icons/material-icon-3.svg";
import { ReactComponent as InfluencerFour } from "../../assets/icons/material-icon-4.svg";
import { ReactComponent as InfluencerFive } from "../../assets/icons/material-icon-5.svg";
import { ReactComponent as InfluencerSix } from "../../assets/icons/material-icon-6.svg";

import { ReactComponent as Shopify } from "../../assets/icons/Shopify.svg";
import { ReactComponent as Email } from "../../assets/icons/Email.svg";
import { ReactComponent as Bookmarks } from "../../assets/icons/Bookmarks.svg";

import { ReactComponent as Influencers } from "../../assets/icons/Influencers.svg";
import { ReactComponent as Categories } from "../../assets/icons/Categories.svg";
import { ReactComponent as Companies } from "../../assets/icons/Companies.svg";
import { ReactComponent as Engagement } from "../../assets/icons/Engagement.svg";
import { ReactComponent as Users } from "../../assets/icons/Users.svg";
import { ReactComponent as Branded } from "../../assets/icons/Branded Posts.svg";
import { ReactComponent as Compaign } from "../../assets/icons/Compaign Monitor.svg";

const Sidebar = ({ setCollapsed, defaultSelectedKeys }) => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  return (
    <div style={{ position: "relative" }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={defaultSelectedKeys}
        items={[
          {
            key: "1",
            icon: <InfluencerOne />,
            label: <NavLink to="/">Influencer Search Engine</NavLink>,
          },
          {
            key: "2",
            icon: <InfluencerTwo />,
            label: <NavLink to="/">Influencer Group</NavLink>,
          },
          {
            key: "3",
            icon: <InfluencerThree />,
            label: <NavLink to="/">Reporting</NavLink>,
          },

          {
            key: "4",
            icon: <InfluencerFour />,
            label: <NavLink to="/quotes">Inbox</NavLink>,
          },
          {
            key: "5",
            icon: <InfluencerFive />,
            label: <NavLink to="/">Setting</NavLink>,
          },
          {
            key: "6",
            icon: <InfluencerSix />,
            label: <NavLink to="/">Team Members</NavLink>,
          },
          {
            type: "divider",
          },
          getItem(
            <h1 style={{ color: "#565D6DFF", fontSize: "20px" }}>
              Integrations
            </h1>
          ),
          {
            key: "7",
            icon: <Shopify />,
            label: <NavLink to="/">Shopify</NavLink>,
          },
          {
            key: "8",
            icon: <Email />,
            label: <NavLink to="/">Email</NavLink>,
          },
          {
            key: "9",
            icon: <Bookmarks />,
            label: <NavLink to="/">Bookmarks</NavLink>,
          },
          {
            type: "divider",
          },
          getItem(
            <h1 style={{ color: "#565D6DFF", fontSize: "20px" }}>
              Admin Section
            </h1>
          ),
          {
            key: "10",
            icon: <Influencers />,
            label: <NavLink to="/">Influencers</NavLink>,
          },
          {
            key: "11",
            icon: <Categories />,
            label: <NavLink to="/categories">Categories</NavLink>,
          },
          {
            key: "12",
            icon: <Companies />,
            label: <NavLink to="/companies">Companies</NavLink>,
          },
          {
            key: "13",
            icon: <Engagement />,
            label: (
              <NavLink to="/engagement-calculator">
                Engagement Calculator
              </NavLink>
            ),
          },
          {
            key: "14",
            icon: <Users />,
            label: <NavLink to="/users">Users</NavLink>,
          },
          {
            key: "15",
            icon: <Branded />,
            label: <NavLink to="/branded-posts">Branded Posts</NavLink>,
          },
          {
            key: "16",
            icon: <Compaign />,
            label: <NavLink to="/">Compaign</NavLink>,
          },
          getItem(
            <h1
              style={{
                textAlign: "center",
                color: "#FF0099FF",
                fontSize: "14px",
                padding: "10px 0px",
                background: "#FFB4E1FF",
                width: "95%",
              }}
            >
              + Invite new Member
            </h1>
          ),
        ]}
      />
    </div>
  );
};

export default Sidebar;
