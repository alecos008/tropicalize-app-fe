import { Button, Icon, Menu, Sidebar } from "semantic-ui-react";

function NavbarSemantic({ AppContent, activeHelper, activeSideBar }) {
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
        {/* <Menu.Item as="a">
          <Button onClick={() => activeHelper()}>
            <Icon name="undo" />
            Back
          </Button>
        </Menu.Item> */}
        <Menu.Item as="a">
          <a
            href="/"
            style={{ textDecoration: "none" }}
            className="sidebar-link ui.labeled.icon.menu item"
          >
            <Icon name="mobile" />
            Home
          </a>
        </Menu.Item>
        <Menu.Item as="a">
          <a
            href="/products"
            style={{ textDecoration: "none" }}
            className="sidebar-link ui.labeled.icon.menu item"
          >
            <Icon name="mobile" />
            Products
          </a>
        </Menu.Item>
        {/* <Menu.Item as="a">
          <a
            href="/animations"
            style={{ textDecoration: "none" }}
            className="sidebar-link ui.labeled.icon.menu item"
          >
            <Icon name="code" />
            Animations
          </a>
        </Menu.Item>
        <Menu.Item as="a">
          <a
            href="/map"
            style={{ textDecoration: "none" }}
            className="sidebar-link ui.labeled.icon.menu item"
          >
            <Icon name="code" />
            Map
          </a>
        </Menu.Item> */}
        <Menu.Item as="a">
          <a
            href="https://www.instagram.com/tropicalize420/"
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
            href="https://www.facebook.com/tropicalize420/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            className="sidebar-link ui.labeled.icon.menu item"
          >
            <Icon name="facebook" />
            Facebook
          </a>
        </Menu.Item> 
      </Sidebar>

      {/* Page Content and Router Below Here */}
      <Sidebar.Pushable>
        <Sidebar.Pusher dimmed={activeSideBar}>{AppContent}</Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}

export default NavbarSemantic;
