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
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import {
  getDatabase,
  ref,
  get,
  remove,
  update,
  push,
  add,
  set,
  child,
} from "firebase/database";
import { useParams } from "react-router-dom";
import app from "../../../services/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";

const PriceUpdate = () => {
  const [inputType, setInputType] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const { firebaseId } = useParams();

  const [typeOptions, setTypeOptions] = useState([]);
  const [priceOptions, setPriceOptions] = useState([]);
  const [isCheckboxDisabled, setIsCheckboxDisabled] = useState(true);
  const [inputTypeForAdd, setInputTypeForAdd] = useState("");
  const [inputPriceForAdd, setInputPriceForAdd] = useState("");
  const [inputPriceArray, setInputPriceArray] = useState([]);
  const handleCheckBoxChange = (event) => {
    setIsCheckboxDisabled(!event.target.checked);
  };
  //Hair Price----Add Data

  const handleTypeChangeForAdd = (e) => {
    setInputTypeForAdd(e.target.value);
  };

  const handlePriceChangeForAdd = (e) => {
    setInputPriceForAdd(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data from the database
  const fetchData = async () => {
    try {
      const db = getDatabase();
      const snapshot = await get(ref(db, "createprice/haircut"));

      if (snapshot.exists()) {
        const data = snapshot.val();
        setTypeOptions(Object.keys(data).map((key) => data[key].type));
        setPriceOptions(Object.keys(data).map((key) => data[key].price));
      } else {
        console.error("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Add new record to the database
  const addRecord = async () => {
    const db = getDatabase();
    const recordsRef = ref(db, "createprice/haircut/");

    try {
      const newRecordRef = push(recordsRef); // Generate unique key
      await set(newRecordRef, {
        type: inputTypeForAdd,
        price: inputPriceForAdd,
      }); // Set type and price fields
      toast.success("New record added successfully");
    } catch (error) {
      console.error("Error adding record:", error);
      toast.error("Failed to add record");
    }
  };

  const updateRecord = async (firebaseId) => {
    try {
      console.log("Firebase ID:", firebaseId);
      console.log("Input Type:", inputType);
      console.log("Input Price:", inputPrice);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/haircut/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Check if inputType and inputPrice are not empty or null
      if (!inputType || !inputPrice) {
        throw new Error("Invalid inputType or inputPrice");
      }

      // Update the record in the database
      await set(recordRef, { type: inputType, price: inputPrice });
      toast.success("Record updated successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error updating record:", error);
      toast.error("Failed to update record");
    }
  };

  // Remove record from the database

  const deleteRecord = async (firebaseId) => {
    try {
      console.log("Attempting to delete record with Firebase ID:", firebaseId);
  
      const db = getDatabase();
      const recordRef = ref(db, `createprice/haircut/${firebaseId}`);
  
      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }
  
      // Delete the record from the database
      await remove(recordRef);
      console.log("Record deleted successfully");
      toast.success("Record deleted successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error deleting record:", error);
      toast.error("Failed to delete record");
    }
  };
  
  
  const handleTypeChange = (e) => {
    setInputType(e.target.value);
    const selectedIndex = typeOptions.indexOf(e.target.value);
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
          Add /Update/Delete Table Data
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
            <Stack direction="row" spacing={4}>
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
                label="Update Price"
                variant="outlined"
                value={inputPrice}
                onChange={handlePriceChange}
                required
                fullWidth
              />
            </Stack>

            <Divider sx={{ mt: 3 }}></Divider>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              checked={!isCheckboxDisabled}
              onChange={handleCheckBoxChange}
              label="Add New Price "
            />
            <Stack direction="row" spacing={2}>
              <TextField
                id="filled-basic"
                labelPlacement="start"
                label="Add Type "
                disabled={isCheckboxDisabled}
                variant="outlined"
                value={inputTypeForAdd}
                onChange={handleTypeChangeForAdd}
                required
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Add  Price"
                disabled={isCheckboxDisabled}
                variant="outlined"
                value={inputPriceForAdd}
                onChange={handlePriceChangeForAdd}
                required
                fullWidth
              />
            </Stack>
            <Divider sx={{ mt: 10 }}></Divider>
            <Stack
              mt={10}
              ml={10}
              mb={5}
              direction="row"
              sx={{ mr: 10 }}
              spacing={5}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addRecord}
                  disabled={isCheckboxDisabled}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteRecord(firebaseId)}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => updateRecord(firebaseId)}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  //onClick={handleCloseModal}
                >
                  Close
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
                //onChange={handleTypeChange}
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
                //value={inputPrice}
                //onChange={handlePriceChange}
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
              spacing={5}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  //onClick={saveData}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="error"
                  //onClick={deleteHair}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="success"
                  //onClick={overWriteHair}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  //onClick={handleCloseModal}
                >
                  Close
                </Button>
              </Grid>
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/*Nail Section*/}
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
                //onChange={handleTypeChange}
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
                //value={inputPrice}
                //onChange={handlePriceChange}
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
              spacing={5}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  //onClick={deleteHair}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="success"
                  //onClick={overWriteHair}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  //onClick={handleCloseModal}
                >
                  Close
                </Button>
              </Grid>
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/* Body Section*/}
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
                //onChange={handleTypeChange}
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
                //onChange={handlePriceChange}
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
              spacing={5}
            >
              <Grid item xs={3}>
                <Button variant="contained" color="primary">
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" color="error">
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="success"
                  //onClick={"overWriteHair"}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModal}
                >
                  Close
                </Button>
              </Grid>
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/*Nail Section*/}
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
                //onChange={handleTypeChange}
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
              spacing={5}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  //onClick={deleteHair}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="error"
                  //onClick={deleteHair}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="success"
                  //onClick={overWriteHair}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModal}
                >
                  Close
                </Button>
              </Grid>
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