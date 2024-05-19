import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  Card,
  CardContent,
  Stack,
  Fade,
  Backdrop,
  Dialog,
  TextField,
} from "@mui/material";
const PriceUpdate = () => {
  //const [setOpen] = useState(false);
  //For the hair section
  const [showHaircutModal, setShowHaircutModal] = useState(false);
  const [showHairColoringModal, setshowHairColoringModal] = useState(false);
  const [showHairSpaModal, setshowHairSpaModal] = useState(false);
  const [showHairTreatModal, setshowHairTreatModal] = useState(false);
  // For the Skin Section 
  const [showCleanUpModal,setshowCleanUpModal]=useState(false);
  const [showFacialModal,setFacialModal]=useState(false);
  const [showThreadingModal,setThreadingModal]=useState(false);
  //For the Nail Section 
  const[showManicureModal,setshowManicureModal]=useState(false);
  const[showPedicureModal,setshowPedicureModal]=useState(false);
  const[showMicroBladingModal,setshowMicroBladingModal]=useState(false);
  const[showNailNaModal,setshowNailNaModal]=useState(false);
  //For the Body Section 
  const[showWaxingModal,setShowWaxingModal]=useState(false);
  const[showDetainingModal,setshowDetainingModal]=useState(false);
  //For the Bridal Section 
  const[showDressingModal,setshowDressingModal]=useState(false);

  // Function to handle button click and open the modal in Bridal section 
const handlebridalButtonClick=()=>{
  setshowDressingModal(true)
}
 // Function to close the modal  in Boyd section 
const handleCloseModalBridal=()=>{
  setshowDressingModal(false)
}
// Function to handle button click and open the modal in Body section 
const handleBodyButtonClick=()=>{
  setShowWaxingModal(true)
  setshowDetainingModal(true)
}
// Function to close the modal  in Boyd section 
const handleCloseModalBody=()=>{
  setShowWaxingModal(false)
  setshowDetainingModal(false)
}
// Function to handle button click and open the modal in Nail section 
const handleNailButtonClick=()=>{
  setshowManicureModal(true)
  setshowPedicureModal(true)
  setshowMicroBladingModal(true)
  setshowNailNaModal(true)
  }
  // Function to close the modal  in Nail section 
  const handleCloseModalNail=()=>{
    setshowManicureModal(false)
    setshowPedicureModal(false)
    setshowMicroBladingModal(false)
    setshowNailNaModal(false)
  }
// Function to handle button click and open the modal in Skin section 
const handleSkinButtonClick=()=>{
  setshowCleanUpModal(true)
  setFacialModal(true)
  setThreadingModal(true)
}
 // Function to close the modal  in Skin section 
const handleCloseModalSkin=()=>{
  setshowCleanUpModal(false)
  setFacialModal(false)
  setThreadingModal(false)
}
// Function to handle button click and open the modal in Hair section 
  const handleHairButtonClick = () => {
    setShowHaircutModal(true);
    setshowHairColoringModal(true);
    setshowHairSpaModal(true);
    setshowHairTreatModal(true);
  };
 // Function to close the modal in Hair section 
  const handleCloseModal = () => {
    setShowHaircutModal(false);
    setshowHairColoringModal(false);
    setshowHairSpaModal(false);
    setshowHairTreatModal(false);
  };
 
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // Custom Card component
  const CustomCard = ({ children }) => {
    return (
      <Grid item xs={12}>
        <Card>
          <CardContent>{children}</CardContent>
        </Card>
      </Grid>
    );
  };
  return (
    <>
      <Box sx={{ flexGrow: 2 }}>
        <Grid container spacing={3}>
          <CustomCard>
            <Typography fontWeight={"700"} variant="h6">
              Hair Section
            </Typography>
            <Stack direction="row" spacing={2}>
              <Grid item xs={4}>
                <Button onClick={setShowHaircutModal} variant="contained">
                  Update Hair Cut Price{" "}
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" onClick={setshowHairColoringModal}>Update Hair Coloring Price </Button>
              </Grid>{" "}
              <Grid item xs={4}>
                <Button variant="contained" onClick={setshowHairSpaModal}>Update Hair Spa Price </Button>
              </Grid>
              <Grid item xs={4}>
                <Button variant="contained" onClick={setshowHairTreatModal}>
                  Update Hair Treatments Price{" "}
                </Button>
              </Grid>
            </Stack>
          </CustomCard>

          <CustomCard>
            <Typography fontWeight={"700"} variant="h6">
              Skin Section
            </Typography>
            <Stack direction="row" spacing={2}>
              <Grid item xs={4}>
                <Button onClick={setshowCleanUpModal} variant="contained">Update CleanUp Price </Button>
              </Grid>
              <Grid item xs={4}>
                <Button onClick={setFacialModal} variant="contained">Update Facial Price </Button>
              </Grid>{" "}
              <Grid item xs={4}>
                <Button onClick={setThreadingModal} variant="contained">Update Threading Price </Button>
              </Grid>
              <Grid item xs={4}>
                <Button disabled variant="contained">
                  Under constractions
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
          <CustomCard>
            <Typography fontWeight={"700"} variant="h6">
              Nail Section
            </Typography>
            <Stack direction="row" spacing={2}>
              <Grid item xs={4}>
                <Button onClick={setshowManicureModal}  variant="contained">Update Manicure Price </Button>
              </Grid>
              <Grid item xs={4}>
                <Button onClick={setshowPedicureModal}  variant="contained">Update Pedicure Price </Button>
              </Grid>{" "}
              <Grid item xs={4}>
                <Button onClick={setshowMicroBladingModal}  variant="contained">Update Microblading Price </Button>
              </Grid>
              <Grid item xs={4}>
                <Button onClick={setshowNailNaModal}  variant="contained">Update Nail Price </Button>
              </Grid>
            </Stack>
          </CustomCard>
          <CustomCard>
            <Typography fontWeight={"700"} variant="h6">
              Body Section
            </Typography>
            <Stack direction="row" spacing={2}>
              <Grid item xs={4}>
                <Button onClick={handleBodyButtonClick} variant="contained">
                  Update Waxing Price{" "}
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button onClick={handleBodyButtonClick} variant="contained">
                  De-Tanning premium Price{" "}
                </Button>
              </Grid>{" "}
              <Grid item xs={4}>
                <Button disabled variant="contained">
                  Update Hair Spa Price{" "}
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button disabled variant="contained">
                  Update Hair Treatments Price{" "}
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
          <CustomCard>
            <Typography fontWeight={"700"} variant="h6">
              Bridal Section
            </Typography>
            <Stack direction="row" spacing={2}>
              <Grid item xs={4}>
                <Button onClick={handlebridalButtonClick} variant="contained">
                  Update DRESSING Price{" "}
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button disabled variant="contained">
                  De-Tanning premium Price{" "}
                </Button>
              </Grid>{" "}
              <Grid item xs={4}>
                <Button disabled variant="contained">
                  Update Hair Spa Price{" "}
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button disabled variant="contained">
                  Update Hair Treatments Price{" "}
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
        </Grid>
      </Box>
      {/* Modal for updating Hair Cut Price */}

      <Dialog
        open={showHaircutModal}
        onClose={handleCloseModal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      >
        <Fade in={showHaircutModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Update Hair Cut Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <TextField
                id="outlined-basic"
                label="Type"
                variant="outlined"
                disabled
                fontWeight={"700"}
              />

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                required
              />
            </Stack>
            <Stack mt={5} ml={17} mb={5} direction="row" spacing={4}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCloseModal}
                >
                  Close{" "}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCloseModal}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/* Modal for updating Hair Coloring Price */}

      <Dialog
        open={showHairColoringModal}
        onClose={handleCloseModal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      >
        <Fade in={showHairColoringModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Update Hair Coloring
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <TextField
                id="outlined-basic"
                label="Type"
                variant="outlined"
                disabled
                fontWeight={"700"}
              />

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                required
              />
            </Stack>
            <Stack mt={5} ml={17} mb={5} direction="row" spacing={4}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCloseModal}
                >
                  Close{" "}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCloseModal}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/* Modal for updating  Hair Spa Price */}
      <Dialog
        open={showHairSpaModal}
        onClose={handleCloseModal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      >
        <Fade in={showHairSpaModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Update Hair Spa Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <TextField
                id="outlined-basic"
                label="Type"
                variant="outlined"
                disabled
                fontWeight={"700"}
              />

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                required
              />
            </Stack>
            <Stack mt={5} ml={17} mb={5} direction="row" spacing={4}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCloseModal}
                >
                  Close{" "}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCloseModal}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Stack>
          </div>
        </Fade>
      </Dialog>
      {/* Modal for updating  Hair Treatments Price */}
      <Dialog
        open={showHairTreatModal}
        onClose={handleCloseModal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      >
        <Fade in={showHairTreatModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Update Hair Treatments Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <TextField
                id="outlined-basic"
                label="Type"
                variant="outlined"
                disabled
                fontWeight={"700"}
              />

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                required
              />
            </Stack>
            <Stack mt={5} ml={17} mb={5} direction="row" spacing={4}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCloseModal}
                >
                  Close{" "}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCloseModal}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/* Skin Section*/}
      {/* Modal for updating  Skin cleanup  Price */}
      <Dialog
        open={showCleanUpModal}
        onClose={handleCloseModalSkin}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      >
        <Fade in={showCleanUpModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Update Skin CleanUp Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <TextField
                id="outlined-basic"
                label="Type"
                variant="outlined"
                disabled
                fontWeight={"700"}
              />

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                required
              />
            </Stack>
            <Stack mt={5} ml={17} mb={5} direction="row" spacing={4}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCloseModalSkin}
                >
                  Close{" "}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={setshowCleanUpModal}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/* Modal for updating  Facial Pricess  Price */}
      <Dialog
        open={showFacialModal}
        onClose={handleCloseModalSkin}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      >
        <Fade in={showFacialModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Update Facial Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <TextField
                id="outlined-basic"
                label="Type"
                variant="outlined"
                disabled
                fontWeight={"700"}
              />

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                required
              />
            </Stack>
            <Stack mt={5} ml={17} mb={5} direction="row" spacing={4}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCloseModalSkin}
                >
                  Close{" "}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCloseModalSkin}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/* Modal for updating Threading Pricess   Price */}
      <Dialog
        open={showThreadingModal}
        onClose={handleCloseModalSkin}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      >
        <Fade in={showThreadingModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Update Threading Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <TextField
                id="outlined-basic"
                label="Type"
                variant="outlined"
                disabled
                fontWeight={"700"}
              />

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                required
              />
            </Stack>
            <Stack mt={5} ml={17} mb={5} direction="row" spacing={4}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCloseModalSkin}
                >
                  Close{" "}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCloseModalSkin}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/* Modal for updating Manicure Pricess   Price */}
      <Dialog
        open={showManicureModal}
        onClose={handleCloseModalNail}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      >
        <Fade in={showManicureModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Update Manicure Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <TextField
                id="outlined-basic"
                label="Type"
                variant="outlined"
                disabled
                fontWeight={"700"}
              />

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                required
              />
            </Stack>
            <Stack mt={5} ml={17} mb={5} direction="row" spacing={4}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCloseModalNail}
                >
                  Close{" "}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCloseModalNail}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/* Modal for updating Pedicure Pricess   Price */}
      <Dialog
        open={showPedicureModal}
        onClose={handleCloseModalNail}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      >
        <Fade in={showPedicureModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
             Update Pedicure Price
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <TextField
                id="outlined-basic"
                label="Type"
                variant="outlined"
                disabled
                fontWeight={"700"}
              />

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                required
              />
            </Stack>
            <Stack mt={5} ml={17} mb={5} direction="row" spacing={4}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCloseModalNail}
                >
                  Close{" "}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCloseModalNail}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/* Modal for updating Microblading Pricess   Price */}
      <Dialog
        open={showMicroBladingModal}
        onClose={handleCloseModalNail}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      >
        <Fade in={showMicroBladingModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Update Microblading Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <TextField
                id="outlined-basic"
                label="Type"
                variant="outlined"
                disabled
                fontWeight={"700"}
              />

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                required
              />
            </Stack>
            <Stack mt={5} ml={17} mb={5} direction="row" spacing={4}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCloseModalNail}
                >
                  Close{" "}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCloseModalNail}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/* Modal for updating Nail Pricess   Price */}
      <Dialog
        open={showNailNaModal}
        onClose={handleCloseModalNail}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      >
        <Fade in={showNailNaModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Update Nail Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <TextField
                id="outlined-basic"
                label="Type"
                variant="outlined"
                disabled
                fontWeight={"700"}
              />

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                required
              />
            </Stack>
            <Stack mt={5} ml={17} mb={5} direction="row" spacing={4}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCloseModalNail}
                >
                  Close{" "}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCloseModalNail}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Stack>
          </div>
        </Fade>
      </Dialog>
      {/* Modal for updating Body section Pricess   Price */}
      <Dialog
        open={showWaxingModal}
        onClose={handleCloseModalBody}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      >
        <Fade in={showWaxingModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Update Waxing Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <TextField
                id="outlined-basic"
                label="Type"
                variant="outlined"
                disabled
                fontWeight={"700"}
              />

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                required
              />
            </Stack>
            <Stack mt={5} ml={17} mb={5} direction="row" spacing={4}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCloseModalBody}
                >
                  Close{" "}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCloseModalBody}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Stack>
          </div>
        </Fade>
      </Dialog>
      {/* Modal for updating Body section Pricess   Price */}
      <Dialog
        open={showDetainingModal}
        onClose={handleCloseModalBody}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      >
        <Fade in={showDetainingModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Update De-Tanning Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <TextField
                id="outlined-basic"
                label="Type"
                variant="outlined"
                disabled
                fontWeight={"700"}
              />

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                required
              />
            </Stack>
            <Stack mt={5} ml={17} mb={5} direction="row" spacing={4}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCloseModalBody}
                >
                  Close{" "}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCloseModalBody}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/* Modal for updating Bridal  section Pricess   Price */}
      <Dialog
        open={showDressingModal}
        onClose={handleCloseModalBridal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "550px",
          maxHeight: "550px",
        }}
      >
        <Fade in={showDressingModal}>
          <div>
            <Typography
              align="center"
              fontWeight={"700"}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Update Dressing Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <TextField
                id="outlined-basic"
                label="Type"
                variant="outlined"
                disabled
                fontWeight={"700"}
              />

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                required
              />
            </Stack>
            <Stack mt={5} ml={17} mb={5} direction="row" spacing={4}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleCloseModalBridal}
                >
                  Close{" "}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleCloseModalBridal}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Stack>
          </div>
        </Fade>
      </Dialog>
    </>
  );
};

export default PriceUpdate;
