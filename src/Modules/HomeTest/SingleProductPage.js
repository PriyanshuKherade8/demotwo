// import React from "react";
// import ViewPage from "./Pages/ViewPage";
// import EditPage from "./Pages/EditPage";
// import { Box, useTheme, useMediaQuery } from "@mui/material";

// const SingleProductPage = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const isMedium = useMediaQuery(theme.breakpoints.up("md"));

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: isMobile ? "column" : "row",
//         gap: 1,
//         padding: 1,
//       }}
//     >
//       <Box
//         sx={{
//           flex: 1,
//           width: isMedium ? "100%" : "auto",
//         }}
//       >
//         <ViewPage />
//       </Box>
//       <Box
//         sx={{
//           flex: 1,
//           width: isMedium ? "100%" : "auto",
//         }}
//       >
//         <EditPage />
//       </Box>
//     </Box>
//   );
// };

// export default SingleProductPage;

import React from "react";
import ViewPage from "./Pages/ViewPage";
import EditPage from "./Pages/EditPage";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import SwipeableEdgeDrawer from "./Pages/SwipeableEdgeDrawer";

const SingleProductPage = () => {
  return (
    // <Grid container spacing={2}>
    //   <Grid item xs={12} md={8}>
    //     <ViewPage />
    //   </Grid>
    //   <Grid item xs={12} md={4}>
    //     <EditPage />
    //   </Grid>
    // </Grid>
    <SwipeableEdgeDrawer />
  );
};

export default SingleProductPage;
