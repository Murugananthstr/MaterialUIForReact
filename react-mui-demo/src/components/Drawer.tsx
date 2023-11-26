import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import ButtonIcon from "@mui/icons-material/TouchApp"; // Replace with the actual import for your Button icon
import TypographyIcon from "@mui/icons-material/TextFormat"; // Replace with the actual import for your Typography icon
import { useLocation } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} - 3px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} - 3px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const getTextColor = (backgroundColor: string) => {
    // Use a simple luminance check to determine if the text should be dark or light
    const luminance =
      0.299 * parseInt(backgroundColor.slice(1, 3), 16) +
      0.587 * parseInt(backgroundColor.slice(3, 5), 16) +
      0.114 * parseInt(backgroundColor.slice(5, 7), 16);

    return luminance > 128
      ? theme.palette.text.primary
      : theme.palette.text.secondary;
  };

  const isActiveLink = (path: string) => {
    // Compare the current location with the link's path
    return location.pathname === path;
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <SendIcon sx={{ color: "orange", transform: "rotate(180deg)" }} />
          <Typography variant="h6" noWrap component="div">
            Shares
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to="/buttons" style={{ textDecoration: "none" }}>
            <ListItem
              key="Button"
              disablePadding
              sx={{
                display: "flex",
                alignItems: "center",
                // borderRadius: "8px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s, transform 0.2s",
                "&:hover": {
                  backgroundColor: "#f5f5f5", // Change to your preferred hover color
                  transform: "scale(1.02)",
                },
                backgroundColor: isActiveLink("/buttons")
                  ? "#d7d7d7"
                  : "transparent", // Highlight active link
                color: getTextColor(
                  isActiveLink("/buttons") ? "#e0e0e0" : "transparent"
                ), // Dynamically set text color
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 2,
                  }}
                >
                  <ButtonIcon />{" "}
                  {/* Use the icon you prefer for the Button item */}
                </ListItemIcon>
                <ListItemText primary="Button" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/blogs" style={{ textDecoration: "none" }}>
            <ListItem
              key="Typography"
              disablePadding
              sx={{
                display: "flex",
                alignItems: "center",
                // borderRadius: "8px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                transition: "background-color 0.3s, transform 0.2s",
                "&:hover": {
                  backgroundColor: "#f5f5f5", // Change to your preferred hover color
                  transform: "scale(1.02)",
                },
                backgroundColor: isActiveLink("/blogs")
                  ? "#d7d7d7"
                  : "transparent", // Highlight active link
                color: getTextColor(
                  isActiveLink("/blogs") ? "#e0e0e0" : "transparent"
                ), // Dynamically set text color
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 2,
                  }}
                >
                  <TypographyIcon />
                  {/* Use the icon you prefer for the Typography item */}
                </ListItemIcon>
                <ListItemText primary="Typography" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
}
