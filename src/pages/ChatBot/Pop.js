import * as React from "react";
import Slide from "@mui/material/Slide";
import Chatbot from "./Chatbot";
import { useState } from "react";
import { IconButton } from "@mui/material";
import chatbotIc from "../../Assets/ChatBot.png";
import { Button } from "react-bootstrap";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const  AlertDialogSlide=()=> {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleChatbotClose = () => {
    setIsOpen(false);
  };
  return (
<>
    <IconButton sx={{ ml: 145,  }} onClick={toggleChatbot}>
      <div >
        Chat with Us
        <img title="Chat with Us" src={chatbotIc} alt="Chatbot" />
      </div>
    </IconButton>
    <Chatbot isOpen={isOpen} onClose={handleChatbotClose} />

    </>
  );
}
export default AlertDialogSlide