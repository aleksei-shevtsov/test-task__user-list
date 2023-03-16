export const responsiveWrapper = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: {
    xs: "column",
    sm: "row",
  },
  boxShadow: 5,
  borderRadius: 2,
  bgcolor: "background.paper",
  padding: 4,
  margin: 2,
};

export const responsiveBox = {
  display: "flex",
  margin: { xs: 1, sm: 0 },
  justifyContent: "flex-start",
  flexDirection: {
    xs: "column",
    md: "row",
  },
};

export const responsiveValue = {
  marginLeft: { xs: 1, sm: 0 },
  paddingTop: { xs: 1, sm: 0 },
};
