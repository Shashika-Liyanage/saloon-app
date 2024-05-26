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
  // For the Skin Section
  const [showCleanUpModal, setshowCleanUpModal] = useState(false);
  //For the Body Section
  const [showWaxingModal, setShowWaxingModal] = useState(false);
  //For the Bridal Section
  const [showDressingModal, setshowDressingModal] = useState(false);
  const [showPedicureModal, setshowPedicureModal] = useState(false);

  //---------------Hair Section-------------------------------
  const [inputType, setInputType] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [typeOptions, setTypeOptions] = useState([]);
  const [inputTypeForAdd, setInputTypeForAdd] = useState("");
  const [inputPriceForAdd, setInputPriceForAdd] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [showHaircutModal, setShowHaircutModal] = useState(false);

  //-----Nail Section------------------------------------------
  const [inputTypeNail, setInputTypeNail] = useState("");
  const [inputPriceNail, setInputPriceNail] = useState("");
  const [typeOptionsNail, setTypeOptionsNail] = useState([]);
  const [inputTypeForAddNail, setInputTypeForAddNail] = useState("");
  const [inputPriceForAddNail, setInputPriceForAddNail] = useState("");
  const [isCheckboxCheckedNail, setIsCheckboxCheckedNail] = useState(false);

  //-----Body Section------------------------------------------
  const [inputTypeBody, setInputTypeBody] = useState("");
  const [inputPriceBody, setInputPriceBody] = useState("");
  const [typeOptionsBody, setTypeOptionsBody] = useState([]);
  const [inputTypeForAddBody, setInputTypeForAddBody] = useState("");
  const [inputPriceForAddBody, setInputPriceForAddBody] = useState("");
  const [isCheckboxCheckedBody, setIsCheckboxCheckedBody] = useState(false);

  
  //-----Bridal  Section------------------------------------------
  const [inputTypeBridal, setInputTypeBridal] = useState("");
  const [inputPriceBridal, setInputPriceBridal] = useState("");
  const [typeOptionsBridal, setTypeOptionsBridal] = useState([]);
  const [inputTypeForAddBridal, setInputTypeForAddBridal] = useState("");
  const [inputPriceForAddBridal, setInputPriceForAddBridal] = useState("");
  const [isCheckboxCheckedBridal, setIsCheckboxCheckedBridal] = useState(false);
  //---------------------------------------Hair Section handeling------------------------------------

  const handleTypeChangeForAdd = (e) => {
    setInputTypeForAdd(e.target.value);
  };
  const handlePriceChangeForAdd = (e) => {
    setInputPriceForAdd(e.target.value);
  };
  const handleTypeChange = (e) => {
    const { value } = e.target;
    setInputType(value);
    setInputPrice(typeOptions.find((d) => d?.key === value)?.price);
  };
  const handlePriceChange = (e) => {
    setInputPrice(e.target.value);
  };

  const handleCheckBoxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };
  //---------------------------------------Nail Section handeling Start------------------------------------

  const handleTypeChangeForAddNail = (e) => {
    setInputTypeForAddNail(e.target.value);
  };
  const handlePriceChangeForAddNail = (e) => {
    setInputPriceForAddNail(e.target.value);
  };
  const handleTypeChangeNail = (e) => {
    const { value } = e.target;
    setInputTypeNail(value);
    setInputPriceNail(typeOptionsNail.find((d) => d?.key === value)?.price);
  };
  const handlePriceChangeNail = (e) => {
    setInputPriceNail(e.target.value);
  };

  const handleCheckBoxChangeNail = (event) => {
    setIsCheckboxCheckedNail(event.target.checked);
  };
  //---------------------------------------Nail Section handeling End------------------------------------

  //---------------------------------------Body Section handeling Start------------------------------------
  const handleTypeChangeForAddBody = (e) => {
    setInputTypeForAddBody(e.target.value);
  };
  const handlePriceChangeForAddBody = (e) => {
    setInputPriceForAddBody(e.target.value);
  };
  const handleTypeChangeBody = (e) => {
    const { value } = e.target;
    setInputTypeBody(value);
    setInputPriceBody(typeOptionsBody.find((d) => d?.key === value)?.price);
  };
  const handlePriceChangeBody = (e) => {
    setInputPriceBody(e.target.value);
  };

  const handleCheckBoxChangeBody = (event) => {
    setIsCheckboxCheckedNail(event.target.checked);
  };

  //---------------------------------------Body Section handeling End------------------------------------

    //---------------------------------------Bridal  Section handeling Start------------------------------------

    const handleTypeChangeForAddBridal = (e) => {
      setInputTypeForAddBridal(e.target.value);
    };
    const handlePriceChangeForAddBridal = (e) => {
      setInputPriceForAddBridal(e.target.value);
    };
    const handleTypeChangeBridal = (e) => {
      const { value } = e.target;
      setInputTypeBridal(value);
      setInputPriceBridal(typeOptionsBridal.find((d) => d?.key === value)?.price);
    };
    const handlePriceChangeBridal = (e) => {
      setInputPriceBridal(e.target.value);
    };
  
    const handleCheckBoxChangeBridal = (event) => {
      setIsCheckboxCheckedNail(event.target.checked);
    };

 //---------------------------------------Bridal  Section handeling End------------------------------------
  const clearFields = () => {
    setInputTypeForAdd("");
    setInputPriceForAdd("");

    setInputPriceForAddNail("");
    setInputTypeForAddNail("");

    setInputPriceForAddBody("");
    setInputTypeForAddBody("");

    
    setInputPriceForAddBridal("");
    setInputTypeForAddBridal("");

    setInputType("");
    setInputPrice("");

    setIsCheckboxChecked(false);

    setIsCheckboxCheckedNail(false);

    setIsCheckboxCheckedBody(false);

    setIsCheckboxCheckedBridal(false);
  };

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
  const handleCloseModalHair = () => {
    setShowHaircutModal(false);
  };
  //------------------------------------------Hair Section---CRUD Opeartions Start-------------------------------------------------------------
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
        console.log("Eshan", data);
        setTypeOptions(
          Object.keys(data).map((key) => ({
            key,
            price: data[key].price,
            type: data[key].type,
          }))
        );
        //setPriceOptions(Object.keys(data).map((key) => data[key].price));
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
      clearFields();
      toast.success("New record added successfully");
    } catch (error) {
      console.error("Error adding record:", error);
      toast.error("Failed to add record");
    }
  };

  const updateRecord = async () => {
    try {
      const firebaseId = inputType;
      const type = typeOptions.find((d) => d?.key === inputType)?.type;

      console.log("Firebase ID:", firebaseId);
      console.log("Input Type:", type);
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
      await set(recordRef, { type: type, price: inputPrice });
      clearFields();
      toast.success("Record updated successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error updating record:", error);
      toast.error("Failed to update record");
    }
  };

  // Remove record from the database

  const deleteRecord = async () => {
    try {
      const firebaseId = inputType;

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

  //------------------------------------------Hair Section---CRUD Opeartions End-------------------------------------------------------------//

  //------------------------------------------Nail Section---CRUD Opeartions Start-------------------------------------------------------------//
  useEffect(() => {
    fetchDataForNail();
  }, []);

  // Fetch data from the database
  const fetchDataForNail = async () => {
    try {
      const db = getDatabase();
      const snapshot = await get(ref(db, "createprice/nail"));

      if (snapshot.exists()) {
        const data = snapshot.val();

        setTypeOptionsNail(
          Object.keys(data).map((key) => ({
            key,
            price: data[key].price,
            type: data[key].type,
          }))
        );
        //setPriceOptions(Object.keys(data).map((key) => data[key].price));
      } else {
        console.error("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //------------------------------------------Nail Section---CRUD  Fetch Data Opeartions End-------------------------------------------------------------//
  // Add new record to the database
  const addRecordForNail = async () => {
    const db = getDatabase();
    const recordsRef = ref(db, "createprice/nail/");

    try {
      const newRecordRef = push(recordsRef); // Generate unique key
      await set(newRecordRef, {
        type: inputTypeForAddNail,
        price: inputPriceForAddNail,
      }); // Set type and price fields
      clearFields();
      toast.success("New record added successfully");
    } catch (error) {
      console.error("Error adding record:", error);
      toast.error("Failed to add record");
    }
  };

  const updateRecordForNail = async () => {
    try {
      const firebaseId = inputTypeNail;
      const type = typeOptionsNail.find((d) => d?.key === inputTypeNail)?.type;

      console.log("Firebase ID:", firebaseId);
      console.log("Input Type:", type);
      console.log("Input Price:", inputPriceNail);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/nail/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Check if inputTypeNail and inputPriceNail are not empty or null
      if (!inputTypeNail || !inputPriceNail) {
        throw new Error("Invalid inputTypeNail or inputPriceNail");
      }

      // Update the record in the database
      await set(recordRef, { type: type, price: inputPriceNail });
      clearFields();
      toast.success("Record updated successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error updating record:", error);
      toast.error("Failed to update record");
    }
  };

  // Remove record from the database

  const deleteRecordForNail = async () => {
    try {
      const firebaseId = inputTypeNail;

      console.log("Attempting to delete record with Firebase ID:", firebaseId);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/nail/${firebaseId}`);

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

  //------------------------------------------Nail Section---CRUD Opeartions End-------------------------------------------------------------//

  //------------------------------------------Body Section---CRUD Opeartions Start-------------------------------------------------------------//

  useEffect(() => {
    fetchDataForBody();
  }, []);

  // Fetch data from the database
  const fetchDataForBody = async () => {
    try {
      const db = getDatabase();
      const snapshot = await get(ref(db, "createprice/body"));

      if (snapshot.exists()) {
        const data = snapshot.val();

        setTypeOptionsBody(
          Object.keys(data).map((key) => ({
            key,
            price: data[key].price,
            type: data[key].type,
          }))
        );
        //setPriceOptions(Object.keys(data).map((key) => data[key].price));
      } else {
        console.error("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //------------------------------------------Body Section---CRUD  Fetch Data Opeartions End-------------------------------------------------------------//
  // Add new record to the database
  const addRecordForbody = async () => {
    const db = getDatabase();
    const recordsRef = ref(db, "createprice/body/");

    try {
      const newRecordRef = push(recordsRef); // Generate unique key
      await set(newRecordRef, {
        type: inputTypeForAddBody,
        price: inputPriceForAddBody,
      }); // Set type and price fields
      clearFields();
      toast.success("New record added successfully");
    } catch (error) {
      console.error("Error adding record:", error);
      toast.error("Failed to add record");
    }
  };

  const updateRecordForBody = async () => {
    try {
      const firebaseId = inputTypeBody;
      const type = typeOptionsBody.find((d) => d?.key === inputTypeBody)?.type;

      console.log("Firebase ID:", firebaseId);
      console.log("Input Type:", type);
      console.log("Input Price:", inputTypeBody);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/body/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Check if inputTypeNail and inputPriceNail are not empty or null
      if (!inputTypeBody || !inputPriceBody) {
        throw new Error("Invalid inputTypeNail or inputPriceNail");
      }

      // Update the record in the database
      await set(recordRef, { type: type, price: inputPriceBody });
      clearFields();
      toast.success("Record updated successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error updating record:", error);
      toast.error("Failed to update record");
    }
  };

  // Remove record from the database

  const deleteRecordForBody = async () => {
    try {
      const firebaseId = inputTypeBody;

      console.log("Attempting to delete record with Firebase ID:", firebaseId);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/body/${firebaseId}`);

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
  //------------------------------------------Body Section---CRUD Opeartions End-------------------------------------------------------------//
//------------------------------------------Bridal Section---CRUD Opeartions End-------------------------------------------------------------//
  useEffect(() => {
    fetchDataForBridal();
  }, []);

  // Fetch data from the database
  const fetchDataForBridal = async () => {
    try {
      const db = getDatabase();
      const snapshot = await get(ref(db, "createprice/bridal"));

      if (snapshot.exists()) {
        const data = snapshot.val();

        setTypeOptionsBridal(
          Object.keys(data).map((key) => ({
            key,
            price: data[key].price,
            type: data[key].type,
          }))
        );
        //setPriceOptions(Object.keys(data).map((key) => data[key].price));
      } else {
        console.error("No data available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  //------------------------------------------Body Section---CRUD  Fetch Data Opeartions End-------------------------------------------------------------//
  // Add new record to the database
  const addRecordForBridal = async () => {
    const db = getDatabase();
    const recordsRef = ref(db, "createprice/bridal/");

    try {
      const newRecordRef = push(recordsRef); // Generate unique key
      await set(newRecordRef, {
        type: inputTypeForAddBridal,
        price: inputPriceForAddBridal,
      }); // Set type and price fields
      clearFields();
      toast.success("New record added successfully");
    } catch (error) {
      console.error("Error adding record:", error);
      toast.error("Failed to add record");
    }
  };

  const updateRecordForBridal = async () => {
    try {
      const firebaseId = inputTypeBridal;
      const type = typeOptionsBridal.find((d) => d?.key === inputTypeBridal)?.type;

      console.log("Firebase ID:", firebaseId);
      console.log("Input Type:", type);
      console.log("Input Price:", inputTypeBridal);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/bridal/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Check if inputTypeNail and inputPriceNail are not empty or null
      if (!inputTypeBridal || !inputPriceBridal) {
        throw new Error("Invalid inputTypeNail or inputPriceNail");
      }

      // Update the record in the database
      await set(recordRef, { type: type, price: inputPriceBridal });
      clearFields();
      toast.success("Record updated successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error updating record:", error);
      toast.error("Failed to update record");
    }
  };

  // Remove record from the database

  const deleteRecordForBridal = async () => {
    try {
      const firebaseId = inputTypeBridal;

      console.log("Attempting to delete record with Firebase ID:", firebaseId);

      const db = getDatabase();
      const recordRef = ref(db, `createprice/bridal/${firebaseId}`);

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
          Add /Update/Delete Data
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
                  onClick={handleNailButtonClick}
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
                  disabled
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
        onClose={handleCloseModalHair}
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
                {typeOptions.map((option, i) => (
                  <MenuItem key={i} value={option.key}>
                    {option.type}
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
              control={<Checkbox />}
              checked={isCheckboxChecked}
              onChange={handleCheckBoxChange}
              label="Add New Price "
            />
            <Stack direction="row" spacing={2}>
              <TextField
                id="filled-basic"
                labelPlacement="start"
                label="Add Type "
                //disabled={!isCheckboxChecked}
                variant="outlined"
                value={inputTypeForAdd}
                onChange={handleTypeChangeForAdd}
                required
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Add  Price"
                //disabled={!isCheckboxChecked}
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
                  //disabled={!isCheckboxChecked}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteRecord()}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => updateRecord()}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModalHair}
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
                id="filled-basic"
                label="Price"
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
              //checked={!isCheckboxDisabled}
              onChange={handleCheckBoxChange}
              label="Add New Price "
            />
            <Stack direction="row" spacing={2}>
              <TextField
                id="filled-basic"
                labelPlacement="start"
                label="Add Type "
                //disabled={isCheckboxDisabled}
                variant="outlined"
                value={inputTypeForAdd}
                onChange={handleTypeChangeForAdd}
                required
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Add  Price"
                //disabled={isCheckboxDisabled}
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
                  //disabled={isCheckboxDisabled}
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
                  onClick={handleCloseModalSkin}
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
            <Stack direction="row" spacing={4}>
              {/* Select for type */}
              <Select
                value={inputTypeNail}
                onChange={handleTypeChangeNail}
                fullWidth
                input={<OutlinedInput label="Type" />}
              >
                {typeOptionsNail.map((option, i) => (
                  <MenuItem key={i} value={option.key}>
                    {option.type}
                  </MenuItem>
                ))}
              </Select>

              <TextField
                id="filled-basic"
                label="Update Price"
                variant="outlined"
                value={inputPriceNail}
                onChange={handlePriceChangeNail}
                required
                fullWidth
              />
            </Stack>
            <Divider sx={{ mt: 3 }}></Divider>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              checked={isCheckboxCheckedNail}
              onChange={handleCheckBoxChangeNail}
              label="Add New Price "
            />
            <Stack direction="row" spacing={2}>
              <TextField
                id="filled-basic"
                labelPlacement="start"
                label="Add Type "
                //disabled={isCheckboxDisabled}
                variant="outlined"
                value={inputTypeForAddNail}
                onChange={handleTypeChangeForAddNail}
                required
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Add  Price"
                //disabled={isCheckboxDisabled}
                variant="outlined"
                value={inputPriceForAddNail}
                onChange={handlePriceChangeForAddNail}
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
                  onClick={addRecordForNail}
                  //disabled={isCheckboxDisabled}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => deleteRecordForNail()}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => updateRecordForNail()}
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
                  onClick={handleCloseModalNail}
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
              Waxing Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 5 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Select
                value={inputTypeBody}
                onChange={handleTypeChangeBody}
                fullWidth
                input={<OutlinedInput label="Type" />}
              >
                {typeOptionsBody.map((option, i) => (
                  <MenuItem key={i} value={option.key}>
                    {option.type}
                  </MenuItem>
                ))}
              </Select>

              <TextField
                id="filled-basic"
                label="Update Price"
                variant="outlined"
                value={inputPriceBody}
                onChange={handlePriceChangeBody}
                required
                fullWidth
              />
            </Stack>
            <Divider sx={{ mt: 3 }}></Divider>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              // checked={!isCheckboxDisabled}
              onChange={handleCheckBoxChangeBody}
              label="Add New Price "
            />
            <Stack direction="row" spacing={2}>
              <TextField
                id="filled-basic"
                labelPlacement="start"
                label="Add Type "
                //disabled={isCheckboxDisabled}
                variant="outlined"
                value={inputTypeForAddBody}
                onChange={handleTypeChangeForAddBody}
                required
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Add  Price"
                //disabled={isCheckboxDisabled}
                variant="outlined"
                value={inputPriceForAddBody}
                onChange={handlePriceChangeForAddBody}
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
                  onClick={addRecordForbody}
                  //disabled={isCheckboxDisabled}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => deleteRecordForBody()}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  onClick={() => updateRecordForBody()}
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
                  onClick={handleCloseModalBody}
                >
                  Close
                </Button>
              </Grid>
            </Stack>
          </div>
        </Fade>
      </Dialog>

      {/*Bridal Section*/}
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
              Dressing Pricess
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 3 }}>
              {/* Modal content */}
            </Typography>
            <Stack direction="row" spacing={3}>
              <Select
                value={inputTypeBridal}
                onChange={handleTypeChangeBridal}
                fullWidth
                input={<OutlinedInput label="Type" />}
              >
                {typeOptionsBridal.map((option, i) => (
                  <MenuItem key={i} value={option.key}>
                    {option.type}
                  </MenuItem>
                ))}
              </Select>

              <TextField
                id="filled-basic"
                label="Price"
                variant="outlined"
                value={inputPriceBridal}
                onChange={handlePriceChangeBridal}
                required
                fullWidth
              />
            </Stack>
            <Divider sx={{ mt: 3 }}></Divider>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              //checked={!isCheckboxDisabled}
              onChange={handleCheckBoxChange}
              label="Add New Price "
            />
            <Stack direction="row" spacing={2}>
              <TextField
                id="filled-basic"
                labelPlacement="start"
                label="Add Type "
                //disabled={isCheckboxDisabled}
                variant="outlined"
                value={inputTypeForAddBridal}
                onChange={handleTypeChangeForAddBridal}
                required
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Add  Price"
                //disabled={isCheckboxDisabled}
                variant="outlined"
                value={inputPriceForAddBridal}
                onChange={handlePriceChangeForAddBridal}
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
                  onClick={addRecordForBridal}
                  //disabled={isCheckboxDisabled}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                   onClick={() => deleteRecordForBridal()}
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
                  onClick={() => updateRecordForBridal()}
                  //onClick={overWriteHair}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModalBridal}
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
