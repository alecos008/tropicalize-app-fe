import React, { useState } from "react";
import { Button, Icon, Menu, Sidebar } from "semantic-ui-react";
 

function NavbarSemantic({ AppContent, cart }) {
  const [activeSideBar, setActiveSideBar] = useState(false);

  return (
    <>
      <Sidebar
        as={Menu}
        animation={"scale down"}
        direction={"right"}
        icon="labeled"
        inverted
        vertical
        visible={activeSideBar}
        width="thin"
      >
        {/* SideBar Items Here */}
        <Menu.Item as="a">
          <Button
            onClick={() => {
              setActiveSideBar(false);
            }}
          >
            <Icon name="undo" />
            Back
          </Button>
        </Menu.Item>
        <Menu.Item as="a">
          <a
            href="https://www.instagram.com/mediateamgroup/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            className="sidebar-link ui.labeled.icon.menu item"
          >
            <Icon name="instagram" />
            Instagram
          </a>
        </Menu.Item>
        <Menu.Item as="a">
          <a
            href="https://www.facebook.com/mediateamgroup/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            className="sidebar-link ui.labeled.icon.menu item"
          >
            <Icon name="facebook" />
            Facebook
          </a>
        </Menu.Item>
        <Menu.Item as="a">
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            className="sidebar-link ui.labeled.icon.menu item"
          >
            <Icon name="twitter" />
            Twitter
          </a>
        </Menu.Item>
        <Menu.Item as="a">
          <a
            href="https://www.apple.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            className="sidebar-link ui.labeled.icon.menu item"
          >
            <Icon name="mobile" />
            Apps
          </a>
        </Menu.Item>
        <Menu.Item as="a">
          <a
            href="https://www.theiconicmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            className="sidebar-link ui.labeled.icon.menu item"
          >
            <Icon name="code" />
            Coding
          </a>
        </Menu.Item>
      </Sidebar>

      {/* Page Content and Router Below Here */}
      <Sidebar.Pushable>
        <Sidebar.Pusher dimmed={activeSideBar}>
          {AppContent}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}

export default NavbarSemantic;
