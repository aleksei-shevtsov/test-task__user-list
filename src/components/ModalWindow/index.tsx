import React, { Dispatch, SetStateAction } from "react";
import {
  Modal,
  Box,
  Button,
  Typography,
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
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import StarBorder from "@mui/icons-material/StarBorder";

import { IUser } from "../../redux/userList/types";

type ListProps = {
  handleClose: () => void;
  user: IUser;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
      >
        <Box sx={style}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Additional info about {user.name}
              </ListSubheader>
            }
          >
            <ListItemButton onClick={handleClickByAddress}>
              <ListItemText primary="Address:" />
              {openAddress ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openAddress} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
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
                <ListItemButton sx={{ pl: 4 }}>
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
