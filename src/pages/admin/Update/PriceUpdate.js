import React, { useEffect, useState } from "react";
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
  Select,
  OutlinedInput,
  MenuItem,
} from "@mui/material";
import { getDatabase, ref, get, remove, update } from "firebase/database";
import { useParams } from "react-router-dom";
import app from "../../../services/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";
const PriceUpdate = () => {
  const [inputType, setInputType] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const { saloonIdParam } = useParams();
  const [typeOptions, setTypeOptions] = useState([]);
  const [priceOptions, setPriceOptions] = useState([]);

  useEffect(() => {
    //fetch data use for hair section
    const fetchData = async () => {
      const db = getDatabase();
      const dbRef = ref(db, "createprice/haircut/" + saloonIdParam);
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const targetObject = snapshot.val();
        setInputType(targetObject.type);
        setInputPrice(targetObject.price);
      } else {
        toast.error("No Data Available ");
      }

      // Fetch data for options in Select field
      const optionsRef = ref(db, "createprice/haircut"); // Change this to the appropriate ref
      const optionsSnapshot = await get(optionsRef);
      if (optionsSnapshot.exists()) {
        const optionsData = optionsSnapshot.val();
        const optionsArray = Object.values(optionsData).map(
          (option) => option.type
        );
        setTypeOptions(optionsArray);
      }
      // Fetch data for options in Price field
      const optionsReftwo = ref(db, "createPrice/haircut");
      const optiontwoSnapshot = await get(optionsReftwo);
      if (optiontwoSnapshot.exists()) {
        const optionsDatatwo = optiontwoSnapshot.val();
        const optionArrayTwo = Object.values(optionsDatatwo).map(
          (option) => option.price
        );
        setPriceOptions(optionArrayTwo);
      }
    };
    fetchData();
  }, [saloonIdParam]);

  //overwrite data (update) use for hair section
  const overWriteData = async () => {
    try {
      const db = getDatabase(app);
      const dbRef = ref(db, `UpdatePrice/haircut/${saloonIdParam}`);

      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        await update(dbRef, {
          type: inputType,
          price: inputPrice,
        });
        toast.success("Price Updated Successfully");
      } else {
        toast.error("Record not found");
      }
    } catch (error) {
      toast.error("Failed to update price");
      console.error("Error updating price:", error);
    }
  };

  const deleteData = async () => {
    const db = getDatabase();
    const dbRef = ref(db, "DeletePrice/haircut/" + saloonIdParam);
    await remove(dbRef);
    window.location.reload();
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
    // Find the index of the selected type in typeOptions array
    const selectedIndex = typeOptions.indexOf(e.target.value);
    // If the selected type exists in the array, set the corresponding price
    if (selectedIndex !== -1) {
      setInputPrice(priceOptions[selectedIndex]);
    }
  };
  const handlePriceChange = (e) => {
    setInputPrice(e.target.value);
  };

  //For the hair section
  const [showHaircutModal, setShowHaircutModal] = useState(false);

  // For the Skin Section
  const [showCleanUpModal, setshowCleanUpModal] = useState(false);

  //For the Nail Section

  const [showPedicureModal, setshowPedicureModal] = useState(false);

  //For the Body Section
  const [showWaxingModal, setShowWaxingModal] = useState(false);

  //For the Bridal Section
  const [showDressingModal, setshowDressingModal] = useState(false);

  // Function to handle button click and open the modal in Bridal section
  const handlebridalButtonClick = () => {
    setshowDressingModal(true);
  };
  // Function to close the modal  in Body section
  const handleCloseModalBridal = () => {
    setshowDressingModal(false);
  };
  // Function to handle button click and open the modal in Body section
  const handleBodyButtonClick = () => {
    setShowWaxingModal(true);
  };
  // Function to close the modal  in Body section
  const handleCloseModalBody = () => {
    setShowWaxingModal(false);
  };
  // Function to handle button click and open the modal in Nail section
  // eslint-disable-next-line
  const handleNailButtonClick = () => {
    setshowPedicureModal(true);
  };
  // Function to close the modal  in Nail section
  const handleCloseModalNail = () => {
    setshowPedicureModal(false);
  };
  // Function to handle button click and open the modal in Skin section
  // eslint-disable-next-line
  const handleSkinButtonClick = () => {
    setshowCleanUpModal(true);
  };
  // Function to close the modal  in Skin section
  const handleCloseModalSkin = () => {
    setshowCleanUpModal(false);
  };
  // Function to handle button click and open the modal in Hair section
  // eslint-disable-next-line
  const handleHairButtonClick = () => {
    setShowHaircutModal(true);
  };
  // Function to close the modal in Hair section
  const handleCloseModal = () => {
    setShowHaircutModal(false);
  };

  // Custom Card component
  const CustomCard = ({ children }) => {
    return (
      <Grid item xs={5}>
        <Card>
          <CardContent>{children}</CardContent>
        </Card>
      </Grid>
    );
  };
  return (
    <>
      <Box>
        <Typography fontWeight={"700"} align="center" variant="h6">
          Update/Delete Table Data
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "center", marginY: "auto" }}
        >
          <CustomCard>
            <Typography fontWeight={"700"} align="center" variant="h6">
              Hair Section
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Grid item xs={4}>
                <Button
                  sx={{ textAlign: "center" }}
                  onClick={setShowHaircutModal}
                  variant="contained"
                >
                  Hair Cut Price
                </Button>
              </Grid>
            </Stack>
          </CustomCard>

          <CustomCard>
            <Typography fontWeight={"700"} align="center" variant="h6">
              Skin Section
            </Typography>
            <Stack
              sx={{ justifyContent: "center" }}
              direction="row"
              spacing={2}
            >
              <Grid item xs={4}>
                <Button
                  sx={{ textAlign: "center" }}
                  onClick={setshowCleanUpModal}
                  variant="contained"
                >
                  CleanUp Price{" "}
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
          <CustomCard>
            <Typography align="center" fontWeight={"700"} variant="h6">
              Nail Section
            </Typography>
            <Stack
              sx={{ justifyContent: "center" }}
              direction="row"
              spacing={2}
            >
              <Grid item xs={4}>
                <Button
                  sx={{ textAlign: "center" }}
                  onClick={setshowPedicureModal}
                  variant="contained"
                >
                  Pedicure Price{" "}
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
          <CustomCard>
            <Typography align="center" fontWeight={"700"} variant="h6">
              Body Section
            </Typography>
            <Stack
              sx={{ justifyContent: "center" }}
              direction="row"
              spacing={2}
            >
              <Grid item xs={4}>
                <Button
                  sx={{ textAlign: "center" }}
                  onClick={handleBodyButtonClick}
                  variant="contained"
                >
                  Waxing Price{" "}
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
          <CustomCard>
            <Typography align="center" fontWeight={"700"} variant="h6">
              Bridal Section
            </Typography>
            <Stack
              sx={{ justifyContent: "center" }}
              direction="row"
              spacing={2}
            >
              <Grid item xs={4}>
                <Button
                  sx={{ textAlign: "center" }}
                  onClick={handlebridalButtonClick}
                  variant="contained"
                >
                  DRESSING Price{" "}
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
          <CustomCard>
            <Typography align="center" fontWeight={"700"} variant="h6">
              Testing Section
            </Typography>
            <Stack
              sx={{ justifyContent: "center" }}
              direction="row"
              spacing={2}
            >
              <Grid item xs={4}>
                <Button
                  sx={{ textAlign: "center" }}
                  onClick={handlebridalButtonClick}
                  variant="contained"
                >
                  Testing Section{" "}
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
          px: 4,
          margin: "0 auto", // Center the modal horizontally
        }}
      >
        <Fade in={showHaircutModal}>
          <div>
            <Typography
              align="center"
              fontWeight={700}
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              Hair Cut Prices
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 5 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={1}>
              {/* Select for type */}
              <Select
                value={inputType}
                onChange={handleTypeChange}
                fullWidth
                input={<OutlinedInput label="Type" />}
              >
                {typeOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                value={inputPrice}
                onChange={handlePriceChange}
                required
                fullWidth
              />
            </Stack>
            <Stack
              mt={10}
              ml={10}
              mb={5}
              direction="row"
              sx={{ mr: 10 }}
              spacing={8}
            >
              <Grid item xs={4}>
                <Button variant="contained" color="error" onClick={deleteData}>
                  Delete
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModal}
                >
                  Close
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={overWriteData}
                >
                  Update
                </Button>
              </Grid>
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
          px: 4,
          margin: " 0 auto",
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
              Skin CleanUp Prices
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 5 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <Select
                value={inputType}
                onChange={handleTypeChange}
                fullWidth
                input={<OutlinedInput label="Type" />}
              >
                {typeOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                value={inputPrice}
                onChange={handlePriceChange}
                required
                fullWidth
              />
            </Stack>
            <Stack
              mt={10}
              ml={10}
              mb={5}
              direction="row"
              sx={{ mr: 10 }}
              spacing={8}
            >
              <Grid item xs={4}>
                <Button variant="contained" color="error" onClick={deleteData}>
                  Delete
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModalSkin}
                >
                  Close{" "}
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={overWriteData}
                >
                  Update
                </Button>
              </Grid>
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
          px: 4,
          margin: " 0 auto",
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
              Pedicure Prices
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 5 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={1}>
              {/* Select for type */}
              <Select
                value={inputType}
                onChange={handleTypeChange}
                fullWidth
                input={<OutlinedInput label="Type" />}
              >
                {typeOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                value={inputPrice}
                onChange={handlePriceChange}
                required
                fullWidth
              />
            </Stack>
            <Stack
              mt={10}
              ml={10}
              mb={5}
              direction="row"
              sx={{ mr: 10 }}
              spacing={8}
            >
              <Grid item xs={4}>
                <Button variant="contained" color="error" onClick={deleteData}>
                  Delete
                </Button>
              </Grid>

              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModalNail}
                >
                  Close
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={overWriteData}
                >
                  Update
                </Button>
              </Grid>
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
          px: 4,
          margin: " 0 auto",
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
            <Typography id="transition-modal-description" sx={{ mt: 5 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Select
                value={inputType}
                onChange={handleTypeChange}
                fullWidth
                input={<OutlinedInput label="Type" />}
              >
                {typeOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                value={inputPrice}
                onChange={handlePriceChange}
                required
                fullWidth
              />
            </Stack>
            <Stack
              mt={10}
              ml={10}
              mb={5}
              direction="row"
              sx={{ mr: 10 }}
              spacing={8}
            >
              <Grid item xs={4}>
                <Button variant="contained" color="error" onClick={deleteData}>
                  Delete
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="warning"
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
          px: 4,
          margin: " 0 auto",
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
              <Select
                value={inputType}
                onChange={handleTypeChange}
                fullWidth
                input={<OutlinedInput label="Type" />}
              >
                {typeOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                value={inputPrice}
                onChange={handlePriceChange}
                required
                fullWidth
              />
            </Stack>
            <Stack mt={10} ml={10} mb={5} direction="row" sx = {{mr: 10}}spacing={8}>
            <Grid item xs={4}>
                <Button variant="contained" color="error" onClick={deleteData}>
                  Delete
                </Button>
              </Grid>

              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModalBridal}
                >
                  Close
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={overWriteData}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Stack>
          </div>
        </Fade>
      </Dialog>
      <Toaster
        toastOptions={{
          duration: 5000,
          className: "",
          style: {
            color: "#713200",
          },
        }}
        position="top-right"
      />
    </>
  );
};

export default PriceUpdate;
