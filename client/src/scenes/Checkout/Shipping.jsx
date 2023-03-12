import React from "react";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

const Shipping = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  return (
    <Box m="30px auto">
      {/* BILLING FORM */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Billing Information
        </Typography>
      </Box>
    </Box>
  );
};

export default Shipping;
