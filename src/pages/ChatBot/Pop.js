import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import ChatbotLauncher from "./Chatbot";
import Chatbot from "./Chatbot";
import { useState } from "react";
import { IconButton } from "@mui/material";
import chatbotIc from "../../Assets/ChatBot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
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
    <div className="chatbot-launcher">
    <IconButton sx={{ ml: 145, mt: "77px" }} onClick={toggleChatbot}>
      <div >
        Chat with Us
        <img title="Chat with Us" src={chatbotIc} alt="Chatbot" />
      </div>
    </IconButton>
    <Chatbot isOpen={isOpen} onClose={handleChatbotClose} />
  </div>
  
  );
}
