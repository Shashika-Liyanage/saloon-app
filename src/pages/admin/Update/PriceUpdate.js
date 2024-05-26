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
//import app from "../../../services/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Admin from "../Admin";




const PriceUpdate = () => {

//-----------------------------------------------------------------Hair Section----------------------------------------------------------------------//

const [showHaircutModal, setShowHaircutModal] = useState(false);
const [inputType, setInputType] = useState("");
const [inputPrice, setInputPrice] = useState("");

const [typeOptions, setTypeOptions] = useState([]);
const [priceOptions, setPriceOptions] = useState([]);

const [inputTypeForAdd, setInputTypeForAdd] = useState("");
const [inputPriceForAdd, setInputPriceForAdd] = useState("");


//------------------Hair Handle data---------------------//

const handleTypeChange = (e) => {
  const { value } = e.target;
  setInputType(value);
  setInputPrice(typeOptions.find((d) => d?.key === value)?.price);
};

const handlePriceChange = (e) => {
  setInputPrice(e.target.value);
};


  const handleTypeChangeForAdd = (e) => {
    setInputTypeForAdd(e.target.value);
  };

  const handlePriceChangeForAdd = (e) => {
    setInputPriceForAdd(e.target.value);
  };


//-----------------------------------------------------------------Skin Section----------------------------------------------------------------------//
  const [showCleanUpModal, setshowCleanUpModal] = useState(false);

  const [inputSkinType, setInputSkinType] = useState("");
  const [inputSkinPrice, setInputSkinPrice] = useState("");


  const [skinTypeOptions, setSkinTypeOptions] = useState([]);
  const [skinPriceOptions, setSkinPriceOptions] = useState([]);


  const [inputTypeForAddSkin, setInputTypeForAddSkin] = useState('');
  const [inputPriceForAddSkin, setInputPriceForAddSkin] = useState();


//------------------Skin Handle data---------------------//

const handleSkinTypeChange = (e) => {
  const { value } = e.target;
  setInputSkinType(value);
  setInputSkinPrice(skinTypeOptions.find((d) => d?.key === value)?.price);
};

const handleSkinPriceChange = (e) => {
  setInputSkinPrice(e.target.value);
};


const handleTypeChangeForAddSkin = (e) => {
  setInputTypeForAddSkin(e.target.value);
};

const handlePriceChangeForAddSkin = (e) => {
  setInputPriceForAddSkin(e.target.value);
};



//-----------------------------------------------------------------Body Section----------------------------------------------------------------------//

  const [inputBodyType, setInputBodyType] = useState("");
  const [inputBodyPrice, setInputBodyPrice] = useState("");


  const [bodyTypeOptions, setBodyTypeOptions] = useState([]);
  const [bodyPriceOptions, setBodyPriceOptions] = useState([]);

  const [inputTypeForAddBody, setInputTypeForAddBody] = useState("");
  const [inputPriceForAddBody, setInputPriceForAddBody] = useState("");

//------------------Body Handle data---------------------//

const handleTypeChangeForAddBody = (e) => {
  setInputTypeForAddBody(e.target.value);
};

const handlePriceChangeForAddBody = (e) => {
  setInputPriceForAddBody(e.target.value);
};


//-----------------------------------------------------------------Bridal Section----------------------------------------------------------------------//

  const [inputBridalType, setInputBridalType] = useState("");
  const [inputBridalPrice, setInputBridalPrice] = useState("");


const [bridalTypeOptions, setBridalTypeOptions] = useState([]);
const [bridalPriceOptions, setBridalPriceOptions] = useState([]);


const [inputTypeForAddBridal, setInputTypeForAddBridal] = useState("");
const [inputPriceForAddBridal, setInputPriceForAddBridal] = useState("");

//------------------Bridal Handle data---------------------//

const handleTypeChangeForAddBridal = (e) => {
  setInputTypeForAddBridal(e.target.value);
};

const handlePriceChangeForAddBridal = (e) => {
  setInputPriceForAddBridal(e.target.value);
};


//--------------------------------------------------------------CheckBox---------------------------------------------------------------//

const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckBoxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const [isCheckboxCheckedSkin, setIsCheckboxCheckedSkin] = useState(false);
  const handleCheckBoxChangeSkin = (event) => {
    setIsCheckboxCheckedSkin(event.target.checked);
  };

  const [isCheckboxCheckedBody, setIsCheckboxCheckedBody] = useState(false);
  const handleCheckBoxChangeBody = (event) => {
    setIsCheckboxCheckedBody(event.target.checked);
  };

  const [isCheckboxCheckedBridal, setIsCheckboxCheckedBridal] = useState(false);
  const handleCheckBoxChangeBridal = (event) => {
    setIsCheckboxCheckedBridal(event.target.checked);
  };



//-------------------------------------------------------------------Clear Field----------------------------------------------------------------------------//

const clearFields = () => {
  setInputTypeForAdd("");
  setInputPriceForAdd("");
  setInputType("");
  setInputPrice("");
  setIsCheckboxChecked(false);
};

const clearFieldsSkin = () => {
  setInputTypeForAddSkin("");
  setInputPriceForAddSkin("");
  setInputSkinType("");
  setInputSkinPrice("");
  setIsCheckboxCheckedSkin(false);
};



//------------------------------------------------------------Hair Price Section Fetch------------------------------------------------------------------------------//
  useEffect(() => {
    fetchData();
  }, []);

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

  // Add new hair record to the database
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

      // Update the Hair record in the database
      await set(recordRef, { type: type, price: inputPrice });
      clearFields();
      toast.success("Record updated successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error updating record:", error);
      toast.error("Failed to update record");
    }
  };

  // Remove Hair record from the database

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

      // Delete the Hair record from the database
      await remove(recordRef);
      console.log("Record deleted successfully");
      toast.success("Record deleted successfully");
      fetchData(); // Refresh data
    } catch (error) {
      console.error("Error deleting record:", error);
      toast.error("Failed to delete record");
    }
  };

  //-------------------------------------------------------------------Skin Price Fetch Data------------------------------------------------------------------------//

  useEffect(() => {
    fetchDataSkin();
  }, []);

  // Fetch Skin data from the database
  const fetchDataSkin = async () => {
    try {
      const db = getDatabase();
      const snapshot = await get(ref(db, "createprice/SkinPrice"));

      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("shashi", data);
        setSkinTypeOptions(
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
  const addRecordSkin = async () => {
    const db = getDatabase();
    const recordsRefForSkin = ref(db, "createprice/SkinPrice/");

    try {
      const newRecordRefSkin = push(recordsRefForSkin); // Generate unique key
      await set(newRecordRefSkin, {
        type: inputTypeForAddSkin,
        price: inputPriceForAddSkin,
      }); // Set type and price fields
      clearFieldsSkin();
      toast.success("New record added successfully");
    } catch (error) {
      console.error("Error adding record:", error);
      toast.error("Failed to add record");
    }
  };

  const updateRecordSkin = async () => {
    try {
      const firebaseId = inputSkinType;
      const type = skinTypeOptions.find((d) => d?.key === inputSkinType)?.type;

      console.log("Firebase ID:", firebaseId);
      console.log("Input Type:", type);
      console.log("Input Price:", inputSkinPrice);

      const db = getDatabase();
      const recordsRefForSkin = ref(db, `createprice/SkinPrice/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Check if inputType and inputPrice are not empty or null
      if (!inputSkinType || !inputSkinPrice) {
        throw new Error("Invalid inputType or inputPrice");
      }

      // Update the record in the database
      await set(recordsRefForSkin, { type: type, price: inputSkinPrice });
      clearFieldsSkin();
      toast.success("Record updated successfully");
      fetchDataSkin(); // Refresh data
    } catch (error) {
      console.error("Error updating record:", error);
      toast.error("Failed to update record");
    }
  };

  // Remove record from the database

  const deleteRecordSkin = async () => {
    try {
      const firebaseId = inputSkinType;

      console.log("Attempting to delete record with Firebase ID:", firebaseId);

      const db = getDatabase();
      const recordsRefForSkin = ref(db, `createprice/SkinPrice/${firebaseId}`);

      // Check if firebaseId is null or undefined
      if (!firebaseId) {
        throw new Error("Invalid firebaseId");
      }

      // Delete the record from the database
      await remove(recordsRefForSkin);
      console.log("Record deleted successfully");
      toast.success("Record deleted successfully");
      fetchDataSkin(); // Refresh data
    } catch (error) {
      console.error("Error deleting record:", error);
      toast.error("Failed to delete record");
    }
  };

//-------------------------------------------------------------------Body Price Fetch Data------------------------------------------------------------------------//



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
  const handleCloseModalHair = () => {
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
     <Admin/>
      <Box>
        <Typography fontWeight={"800"} align="center" marginLeft={29} variant="h6" fontFamily={"system-ui"} fontSize={"24px"}>
         Service Management
        </Typography>
        <Grid
        container
        spacing={3}
        sx={{ 
          justifyContent: 'center',
          marginTop:'15px',
          marginLeft: '200px',
          width: '85%', 
          height: 'auto',
          
        }}
        >
          <CustomCard>
            <Typography fontWeight={"700"} textAlign={"center"} variant="h6" fontFamily={"system-ui"}>
              Hair Section
            </Typography>
            <Stack
           
              direction="row"
              spacing={2}
              sx={{ 
                justifyContent: "center", 
                background: 'linear-gradient(135deg, #FFC5C5, #FFBED8)',
                padding: '10px',
                borderRadius: '10px',

              }}
            >
              <Grid item xs={4}>
                <Button
                   sx={{
                    mb: "2px",
                    borderRadius: "10px",
                    padding: "8px",
                    fontSize: "14px",
                    backgroundColor: "#F27BBD",
                    fontFamily: "Georgia",
                    "&:hover": {
                      backgroundColor: "#E659A1",
                    },
                  }}
                  onClick={setShowHaircutModal}
                  variant="contained"

                >
                  Hair Cut Price
                </Button>
              </Grid>
            </Stack>
          </CustomCard>

          <CustomCard>
            <Typography fontWeight={"700"} align="center" variant="h6" fontFamily={"system-ui"}>
              Skin Section
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ 
                justifyContent: "center", 
                background: 'linear-gradient(135deg, #FFC5C5, #FFBED8)',
                padding: '10px',
                borderRadius: '10px',

              }}

            >
              <Grid item xs={4}>
                <Button
                    sx={{
                      mb: "2px",
                      borderRadius: "10px",
                      padding: "8px",
                      fontSize: "14px",
                      backgroundColor: "#F27BBD",
                      fontFamily: "Georgia",
                      "&:hover": {
                        backgroundColor: "#E659A1",
                      },
                    }}
  
                  onClick={setshowCleanUpModal}
                  variant="contained"
                >
                  CleanUp Price
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
          <CustomCard>
            <Typography align="center" fontWeight={"700"} variant="h6" fontFamily={"system-ui"}>
              Nail Section
            </Typography>
            <Stack
               direction="row"
               spacing={2}
               sx={{ 
                 justifyContent: "center", 
                 background: 'linear-gradient(135deg, #FFC5C5, #FFBED8)',
                 padding: '10px',
                 borderRadius: '10px',
 
               }}
 
            >
              <Grid item xs={4}>
                <Button
                     sx={{
                      mb: "2px",
                      borderRadius: "10px",
                      padding: "8px",
                      fontSize: "14px",
                      backgroundColor: "#F27BBD",
                      fontFamily: "Georgia",
                      "&:hover": {
                        backgroundColor: "#E659A1",
                      },
                    }}
  
      
                  onClick={setshowPedicureModal}
                  variant="contained"
                >
                  Pedicure Price{" "}
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
          <CustomCard>
            <Typography align="center" fontWeight={"700"} variant="h6" fontFamily={"system-ui"}>
              Body Section
            </Typography>
            <Stack
               direction="row"
               spacing={2}
               sx={{ 
                 justifyContent: "center", 
                 background: 'linear-gradient(135deg, #FFC5C5, #FFBED8)',
                 padding: '10px',
                 borderRadius: '10px',
 
               }}
 
            >
              <Grid item xs={4}>
                <Button
                   sx={{
                    mb: "2px",
                    borderRadius: "10px",
                    padding: "8px",
                    fontSize: "14px",
                    backgroundColor: "#F27BBD",
                    fontFamily: "Georgia",
                    "&:hover": {
                      backgroundColor: "#E659A1",
                    },
                  }}

                  onClick={handleBodyButtonClick}
                  variant="contained"
                >
                  Waxing Price
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
          <CustomCard>
            <Typography align="center" fontWeight={"700"} variant="h6" fontFamily={"system-ui"}>
              Bridal Section
            </Typography>
            <Stack
                  direction="row"
                  spacing={2}
                  sx={{ 
                    justifyContent: "center", 
                    background: 'linear-gradient(135deg, #FFC5C5, #FFBED8)',
                    padding: '10px',
                    borderRadius: '10px',
    
                  }}
    
            >
              <Grid item xs={4}>
                <Button
                    sx={{
                      mb: "2px",
                      borderRadius: "10px",
                      padding: "8px",
                      fontSize: "14px",
                      backgroundColor: "#F27BBD",
                      fontFamily: "Georgia",
                      "&:hover": {
                        backgroundColor: "#E659A1",
                      },
                    }}
  
                  onClick={handlebridalButtonClick}
                  variant="contained"
                >
                  DRESSING Price{" "}
                </Button>
              </Grid>
            </Stack>
          </CustomCard>
          {/* <CustomCard>
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
          </CustomCard> */}
        </Grid>
      </Box>
     
      {/*-----------------------------------------------------------------------Hair Section-------------------------------------------------------------------- */}

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
                disabled={!isCheckboxChecked}
                variant="outlined"
                value={inputTypeForAdd}
                onChange={handleTypeChangeForAdd}
                required
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Add  Price"
                disabled={!isCheckboxChecked}
                variant="outlined"
                value={inputPriceForAdd}
                onChange={handlePriceChangeForAdd}
                required
                fullWidth
              />
            </Stack>
            <Divider sx={{ mt: 10 }}></Divider>
            <Stack
              mt={8}
              ml={8}
              mb={5}
              direction="row"
              sx={{ mr: 8 }}
              spacing={2}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addRecord}
                  disabled={!isCheckboxChecked}
                  startIcon={<AddCircleRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteRecord()}
                  startIcon={<DeleteRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => updateRecord()}
                  startIcon={<UpdateRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModalHair}
                  startIcon={<CloseRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Close
                </Button>
              </Grid>
            </Stack>
          </div>
        </Fade>
      </Dialog>

{/* --------------------------------------------------------------------------Skin Section---------------------------------------------------------------*/}
    
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
                value={inputSkinType}
                onChange={handleSkinTypeChange}
                fullWidth
                input={<OutlinedInput label="Type" />}
              >
                 {skinTypeOptions.map((option, i) => (
                  <MenuItem key={i} value={option.key}>
                    {option.type}
                  </MenuItem>
                ))}

              </Select>

              <TextField
                 label="Update Price"
                 variant="outlined"
                 value={inputSkinPrice}
                 onChange={handleSkinPriceChange}
                 required
                 fullWidth
 
              />
            </Stack>
            <Divider sx={{ mt: 3 }}></Divider>
            <FormControlLabel
              control={<Checkbox />}
              checked={isCheckboxCheckedSkin}
              onChange={handleCheckBoxChangeSkin}
              label="Add New Price "
            />
            <Stack direction="row" spacing={2}>
              <TextField
                id="filled-basic"
                labelPlacement="start"
                label="Add Type "
                disabled={!isCheckboxCheckedSkin}
                variant="outlined"
                value={inputTypeForAddSkin}
                onChange={handleTypeChangeForAddSkin}
                required
                fullWidth
              />
              <TextField
                id="filled-basic"
                label="Add  Price"
                disabled={!isCheckboxCheckedSkin}
                variant="outlined"
                value={inputPriceForAddSkin}
                onChange={handlePriceChangeForAddSkin}
                required
                fullWidth
              />
            </Stack>
            <Divider sx={{ mt: 10 }}></Divider>

            <Stack
              mt={8}
              ml={8}
              mb={5}
              direction="row"
              sx={{ mr: 8 }}
              spacing={2}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addRecordSkin}
                  disabled={!isCheckboxCheckedSkin}
                  startIcon={<AddCircleRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => deleteRecordSkin()}
                  startIcon={<DeleteRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => updateRecordSkin()}
                  startIcon={<UpdateRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModalSkin}
                  startIcon={<CloseRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Close
                </Button>
              </Grid>
            </Stack>
          </div>
        </Fade>
      </Dialog>

{/* --------------------------------------------------------------------------Nail Section---------------------------------------------------------------*/}

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
              mt={8}
              ml={8}
              mb={5}
              direction="row"
              sx={{ mr: 8 }}
              spacing={2}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addRecord}
                  //disabled={isCheckboxDisabled}
                  startIcon={<AddCircleRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<DeleteRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="success"
                  //onClick={overWriteHair}
                  startIcon={<UpdateRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModalNail}
                  startIcon={<CloseRoundedIcon sx={{ mr: 0.5 }} />}
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
                value={inputType}
                nChange={handleTypeChange}
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
              mt={8}
              ml={8}
              mb={5}
              direction="row"
              sx={{ mr: 8 }}
              spacing={2}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addRecord}
                  //disabled={isCheckboxDisabled}
                  startIcon={<AddCircleRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<DeleteRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="success"
                  //onClick={"overWriteHair"}
                  startIcon={<UpdateRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModalBody}
                  startIcon={<CloseRoundedIcon sx={{ mr: 0.5 }} />}
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
              mt={8}
              ml={8}
              mb={5}
              direction="row"
              sx={{ mr: 8 }}
              spacing={2}
            >
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={addRecord}
                  //disabled={isCheckboxDisabled}
                  startIcon={<AddCircleRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="error"
                  //onClick={deleteHair}
                  startIcon={<DeleteRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Delete
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="success"
                  //onClick={overWriteHair}
                  startIcon={<UpdateRoundedIcon sx={{ mr: 0.5 }} />}
                >
                  Update
                </Button>
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleCloseModalBridal}
                  startIcon={<CloseRoundedIcon sx={{ mr: 0.5 }} />}
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
