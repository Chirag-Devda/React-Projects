import {
  Chip,
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Typography,
} from "@material-tailwind/react";
import useData from "../../hooks/useData";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaListUl } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";

const Sidenav = () => {
  const { closeDrawer, open, mode } = useData();
  const bg = "#000";
  return (
    <Drawer
      open={open}
      onClose={closeDrawer}
      className={`p-4 ${mode === "dark" ? "bg-[#282c34]" : ""}`}
    >
      <div className={`mb-6 flex items-center justify-between`}>
        <Typography
          className={`${mode === "dark" ? "text-white" : ""}`}
          variant="h5"
          color="blue-gray"
        >
          LootLo
        </Typography>
        <RiCloseLine
          className={`${mode === "dark" ? "text-white" : ""}`}
          onClick={closeDrawer}
          size={25}
        />
      </div>

      <List className={`${mode === "dark" ? "text-white" : ""}`}>
        <ListItem onClick={closeDrawer}>
          <ListItemPrefix>
            <FaListUl />
          </ListItemPrefix>
          All Products
        </ListItem>
        <Link to="/order">
          <ListItem onClick={closeDrawer}>
            <ListItemPrefix>
              <IoBagHandleSharp />
            </ListItemPrefix>
            Order
            <ListItemSuffix>
              <Chip
                value="5"
                size="sm"
                color="green"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
        </Link>
        <Link to="/dashboard">
          <ListItem onClick={closeDrawer}>
            <ListItemPrefix>
              <IoMdPersonAdd />
            </ListItemPrefix>
            Admin
          </ListItem>
        </Link>
        <ListItem onClick={closeDrawer}>
          <ListItemPrefix>
            <MdLogout />
          </ListItemPrefix>
          Logout
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidenav;
