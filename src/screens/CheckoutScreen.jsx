import React, { useState, useContext } from "react";
import { Modal, Button, Header, Image } from "semantic-ui-react";
import { Context } from "../ContextAPI/AppProvider";

function CheckoutScreen() {
  const [open, setOpen] = useState(false);
  const { state } = useContext(Context);

  return (
    <div style={{ background: "white" }}>
      <h2>Here is the preview of your cart</h2>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button>Show Modal</Button>}
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image
            size="medium"
            src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
            wrapped
          />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default CheckoutScreen;
