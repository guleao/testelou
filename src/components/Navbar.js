import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Grid,
  Paper,
} from "@mui/material";
import { WhatsApp, Menu } from "@mui/icons-material";

const Navbar = ({ bloco1Ref, faqRef, contatoRef }) => {
  const [mobileView, setMobileView] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuButtonRef = React.useRef(null);

  const handleResize = () => {
    setMobileView(window.innerWidth < 600);
  };

  const handleDrawerOpen = (event) => {
    event.preventDefault();
    setDrawerOpen(true);
    menuButtonRef.current.blur();
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    document.activeElement.blur();
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "22px",
        }}
      >
        <Grid sx={{ cursor: "pointer" }}>
          <img
            src="./img/logo.png"
            alt="Logo"
            sx={{ marginRight: "20px" }}
            onClick={() => (window.location.href = "/")}
          />
        </Grid>

        <Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <Typography
              variant="h6"
              onClick={() =>
                bloco1Ref.current.scrollIntoView({ behavior: "smooth" })
              }
              sx={{
                cursor: "pointer",
                position: "relative",
                "&:hover::before": { width: "100%" },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "0",
                  height: "2px",
                  bottom: "-5px",
                  left: "50%",
                  backgroundColor: "#ffffff",
                  transition: "all 0.5s ease",
                  transform: "translateX(-50%)",
                },
              }}
            >
              Bloco 1
            </Typography>
            <Typography
              variant="h6"
              onClick={() =>
                faqRef.current.scrollIntoView({ behavior: "smooth" })
              }
              sx={{
                cursor: "pointer",
                position: "relative",
                "&:hover::before": { width: "100%" },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "0",
                  height: "2px",
                  bottom: "-5px",
                  left: "50%",
                  backgroundColor: "#ffffff",
                  transition: "all 0.5s ease",
                  transform: "translateX(-50%)",
                },
              }}
            >
              FAQ
            </Typography>
            <Typography
              variant="h6"
              onClick={() =>
                contatoRef.current.scrollIntoView({ behavior: "smooth" })
              }
              sx={{
                cursor: "pointer",
                position: "relative",
                "&:hover::before": { width: "100%" },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "0",
                  height: "2px",
                  bottom: "-5px",
                  left: "50%",
                  backgroundColor: "#ffffff",
                  transition: "all 0.5s ease",
                  transform: "translateX(-50%)",
                },
              }}
            >
              Contato
            </Typography>
          </Box>
        </Grid>

        <Grid>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              marginLeft: "auto",
              backgroundColor: "#ffffff",
              color: "#000000",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#ffffff",
              },
              "&:focus": {
                backgroundColor: "#ffffff",
              },
            }}
            disableRipple
            onClick={() =>
              window.open(
                "https://wa.me/5545988041417?text=Oi%20mensagem%0A",
                "_blank"
              )
            }
          >
            <WhatsApp sx={{ marginRight: "5px" }} />
            Entre em contato
          </Button>
        </Grid>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    return (
      <Toolbar
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Grid container>
          <Grid item xs={2}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
                marginTop: "20px",
              }}
              onClick={handleDrawerOpen}
              ref={menuButtonRef}
            >
              <Menu />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
              <Paper
                sx={{ width: "210px", height: "100%", background: "#FFA500" }}
              >
                <List>
                  <ListItem
                    button
                    onClick={() =>
                      bloco1Ref.current.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Typography
                      variant="h6"
                      color={"white"}
                      sx={{
                        position: "relative",
                        "&:hover::before": { width: "100%" },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          width: "0",
                          height: "2px",
                          bottom: "0",
                          left: "50%",
                          backgroundColor: "#ffffff",
                          transition: "all 0.5s ease",
                          transform: "translateX(-50%)",
                        },
                      }}
                    >
                      Bloco 1
                    </Typography>
                  </ListItem>
                  <ListItem
                    button
                    onClick={() =>
                      faqRef.current.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Typography
                      variant="h6"
                      color={"white"}
                      sx={{
                        position: "relative",
                        "&:hover::before": { width: "100%" },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          width: "0",
                          height: "2px",
                          bottom: "0",
                          left: "50%",
                          backgroundColor: "#ffffff",
                          transition: "all 0.5s ease",
                          transform: "translateX(-50%)",
                        },
                      }}
                    >
                      FAQ
                    </Typography>
                  </ListItem>
                  <ListItem
                    button
                    onClick={() =>
                      contatoRef.current.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    <Typography
                      variant="h6"
                      color={"white"}
                      sx={{
                        position: "relative",
                        "&:hover::before": { width: "100%" },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          width: "0",
                          height: "2px",
                          bottom: "0",
                          left: "50%",
                          backgroundColor: "#ffffff",
                          transition: "all 0.5s ease",
                          transform: "translateX(-50%)",
                        },
                      }}
                    >
                      Contato
                    </Typography>
                  </ListItem>
                </List>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    marginTop: "15px",
                    marginLeft: "15px",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#ffffff",
                    },
                    "&:active": {
                      backgroundColor: "#ffffff",
                    },
                    "&:focus": {
                      backgroundColor: "#ffffff",
                    },
                  }}
                  onClick={() =>
                    window.open(
                      "https://wa.me/5545988041417?text=Oi%20mensagem%0A",
                      "_blank"
                    )
                  }
                >
                  <WhatsApp sx={{ marginRight: "5px" }} />
                  Entre em contato
                </Button>
              </Paper>
            </Drawer>
          </Grid>
          <Grid item xs={8} container justifyContent="center">
            <img src="./img/logo.png" alt="Logo" />
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Toolbar>
    );
  };

  return (
    <div onClick={(event) => event.stopPropagation()}>
      <AppBar position="static" sx={{ background: "#FFA500", height: "130px" }}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </div>
  );
};

export default Navbar;
