// import React, { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import emailjs from '@emailjs/browser';
// import SendIcon from "@mui/icons-material/Send";
// import {
//   Box,
//   Button,
//   CardContent,
//   Grid,
//   TextField,
//   Typography,
// } from "@mui/material";

// const SentMail = () => {
//   const [fromEmail, setFromEmail] = useState('');
//   const [carbon, setCarbon] = useState('');
//   const [toEmail, setToEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const serviceId = "service_4znnwsv";
//     const templateId = "template_ul80ocm";
//     const publicKey = "XdXag9BkUGCMhHH4w";

//     const templateParams = {
//       from_email: fromEmail,
//       to_carbon: carbon,
//       to_email: toEmail,
//       subject: subject,
//       message: message,
//     };
//     // if (isFormValid()) {

//     // } else {
//     //   toast.error("Please fill in all fields");
//     // }
//     emailjs.send(serviceId,templateId,templateParams,publicKey)
//     .then((response)=>{
//       console.log("Email sent successfully",response);
//       toast.success("Email sent successfully");
//       setSubject('')
//       setMessage('')
//       setToEmail('')
//       setCarbon('')
//       setFromEmail('')
//     })
//     .catch((error)=>{
//       console.log("Email not successfully",error);
//       toast.error("Failed to send email");
//     })
//   };

//   const isFormValid = () => {
//     return (
//       fromEmail.trim() !== "" &&
//       carbon.trim() !== "" &&
//       toEmail.trim() !== "" &&
//       subject.trim() !== "" &&
//       message.trim() !== ""
//     );
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <form onSubmit={handleSubmit}>
//         <CardContent
//           sx={{
//             backgroundColor: "#EED3D9",
//             borderRadius: 10,
//             padding: 4,
//             minWidth: 300,
//           }}
//         >
//           <Typography
//             variant="h5"
//             sx={{
//               fontWeight: 700,
//               color: "#99154E",
//               fontFamily: "Georgia",
//               mb: 2,
//             }}
//           >
//             Send Email
//           </Typography>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 id="fromEmail"
//                 name="fromEmail"
//                 label="From Email Address"
//                 variant="outlined"
//                 fullWidth
//                 required
//                 value={fromEmail}
//                 onChange={(e) => setFromEmail(e.target.value)}
//                 sx={{ bgcolor: "white" }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 id="ccEmail"
//                 name="ccEmail"
//                 label="CC Email Address"
//                 variant="outlined"
//                 fullWidth
//                 value={carbon}
//                 onChange={(e) => setCarbon(e.target.value)}
//                 sx={{ bgcolor: "white" }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 id="toEmail"
//                 required
//                 name="toEmail"
//                 label="To Email Address"
//                 variant="outlined"
//                 fullWidth
//                 value={toEmail}
//                 onChange={(e) => setToEmail(e.target.value)}
//                 sx={{ bgcolor: "white" }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 id="subject"
//                 name="subject"
//                 required
//                 label="Subject"
//                 variant="outlined"
//                 fullWidth
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//                 sx={{ bgcolor: "white" }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 id="body"
//                 name="body"
//                 label="Message "
//                 required
//                 variant="outlined"
//                 multiline
//                 rows={4}
//                 fullWidth
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 sx={{ bgcolor: "white" }}
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             variant="contained"
//             disabled={!isFormValid()}
//             sx={{ mt: 2 }}
//           >
//             Send
//             <SendIcon />
//           </Button>
//         </CardContent>
//       </form>
//       <Toaster position="top-right" />
//     </Box>
//   );
// };

// export default SentMail;
