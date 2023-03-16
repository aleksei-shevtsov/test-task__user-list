import React from "react";
import {
  Modal,
  Box,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  Collapse,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import { IUser } from "../../redux/userList/types";

type ListProps = {
  handleClose: () => void;
  user: IUser;
};

const responsiveBox = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", sm: 300, md: 400 },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2.5,
};

const ModalWindow: React.FC<ListProps> = ({ handleClose, user }) => {
  const [openAddress, setOpenAddress] = React.useState(false);
  const [openCompany, setOpenCompany] = React.useState(false);

  const handleClickByAddress = () => {
    setOpenAddress(!openAddress);
  };
  const handleClickByCompany = () => {
    setOpenCompany(!openCompany);
  };
  return (
    <>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="Additional info about the user"
        aria-describedby="User Address and  User Company"
        sx={{ alignItems: "center" }}
      >
        <Box sx={responsiveBox}>
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                sx={{ width: "200px", lineHeight: 1.5, marginBottom: "20px" }}
              >
                Additional info about <br />
                <b>{user.name}</b>
              </ListSubheader>
            }
          >
            <ListItemButton onClick={handleClickByAddress}>
              <ListItemText primary="Address:" />
              {openAddress ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openAddress} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FiberManualRecordIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={`${user.address.city}, ${user.address.street}, ${user.address.suite}`}
                  />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClickByCompany}>
              <ListItemText primary="Company name:" />
              {openCompany ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openCompany} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FiberManualRecordIcon />
                  </ListItemIcon>
                  <ListItemText primary={user.company.name} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      </Modal>
    </>
  );
};

export default ModalWindow;
