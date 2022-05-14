import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Box } from "@mui/system";
import {
  Avatar,
  Button,
  ButtonBase,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import me from "../../assets/images/me.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import moment from "moment";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Proflle() {
  const navigate = useNavigate();
  const questions = useSelector((state) => state.questions.all);
  return (
    <Box>
      <Header />
      <Container maxWidth="md" sx={{ marginTop: "20px" }}>
        <Paper
          variant="outlined"
          sx={{ width: "100%", height: "fit-content", paddingBottom: "30px" }}
        >
          <Grid container sx={{ marginTop: "30px" }}>
            <Grid
              item
              lg={4}
              md={4}
              sm={4}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar
                src={me}
                sx={{
                  width: "100px",
                  height: "100px",
                  marginLeft: { sm: "40px", xs: 0 },
                }}
              />
            </Grid>
            <Grid
              item
              lg={8}
              md={8}
              sm={8}
              xs={12}
              sx={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { lg: 25, md: 25, sm: 22, xs: 20 },
                  fontFamily: "merriweather",
                  color: "#6E48AA",
                  maxWidth: { sm: "400px", xs: "100%" },
                  overflow: "hidden",
                  whiteSpace: "pre-wrap",
                  textAlign: { sm: "left", xs: "center" },
                  marginLeft: { sm: "-20px", xs: 0 },
                }}
              >
                Farhan Khan
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    sx: "12px",
                  },
                  fontFamily: "merriweather",
                  color: "#808080",
                  maxWidth: { sm: "400px", xs: "100%" },
                  overflow: "hidden",
                  whiteSpace: "pre-wrap",
                  textAlign: { sm: "left", xs: "center" },
                  marginLeft: { sm: "-20px", xs: 0 },
                  marginTop: "10px",
                }}
              >
                my name is farhan khan. i am a computer science student of
                integral university. A javascript developer.
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{}}>
            <Grid item lg={4} md={4} sm={4} xs={12}></Grid>
            <Grid
              item
              lg={8}
              md={8}
              sm={8}
              xs={12}
              sx={{
                marginLeft: { md: "-95px", sm: "-90px", xs: 0 },
                marginTop: "50px",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <ButtonBase>
                <FacebookIcon style={{ fontSize: "35px", color: "#6E48AA" }} />
              </ButtonBase>
              <ButtonBase>
                <InstagramIcon style={{ fontSize: "35px", color: "#6E48AA" }} />
              </ButtonBase>
              <ButtonBase>
                <LinkedInIcon style={{ fontSize: "35px", color: "#6E48AA" }} />
              </ButtonBase>
              <ButtonBase>
                <TelegramIcon style={{ fontSize: "35px", color: "#6E48AA" }} />
              </ButtonBase>
              <ButtonBase>
                <WhatsAppIcon style={{ fontSize: "35px", color: "#6E48AA" }} />
              </ButtonBase>
            </Grid>
          </Grid>
          <Grid sx={{ textAlign: "center", marginTop: "30px" }}>
            <Button
              variant="contained"
              onClick={() => console.log("clicked...")}
              sx={{
                fontFamily: "merriweather",
                backgroundColor: "#6E48AA",

                "&:hover": { backgroundColor: "#EC6F66" },
                transform: "scale(0.8)",
                marginLeft: { md: "-230px", sm: "-200px" },
              }}
            >
              Edit Profile
            </Button>
          </Grid>
        </Paper>

        {/* user questions section  */}

        <div>
          <Accordion sx={{ marginTop: "30px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { lg: 25, md: 25, sm: 22, xs: 20 },
                  fontFamily: "merriweather",
                  color: "#6E48AA",
                }}
              >
                Your Questions
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {questions.map((question) => {
                const answersLength = question.answers.length;

                return (
                  <ButtonBase
                    onClick={() =>
                      navigate(`/detailedQuestion/${question._id}`)
                    }
                  >
                    <Grid
                      sx={{
                        borderBottom: "1px solid #d1d0d0",
                        padding: "10px",
                        marginTop: 2,
                        width: { lg: 800, md: 800, sm: "600px", xs: "340px" },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: { lg: 23, md: 23, sm: 20, xs: 18 },
                          fontFamily: "merriweather",
                          color: "#6E48AA",
                          maxWidth: "700px",
                          overflow: "hidden",
                          whiteSpace: "pre-wrap",
                          textAlign: "left",
                        }}
                      >
                        {question.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            sx: "12px",
                          },
                          fontFamily: "merriweather",
                          color: "#808080",
                          maxWidth: "600px",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textAlign: "left",
                          marginTop: "5px",
                        }}
                      >
                        {question.description}
                      </Typography>
                      <Grid
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: "5px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "merriweather",
                            fontSize: "13px",
                          }}
                        >
                          {answersLength + " " + "answers"}
                        </Typography>
                        <Typography
                          sx={{ fontFamily: "merriweather", fontSize: "13px" }}
                        >
                          {moment(question.date).fromNow()}
                        </Typography>
                      </Grid>
                    </Grid>
                  </ButtonBase>
                );
              })}
            </AccordionDetails>
          </Accordion>
        </div>
      </Container>
    </Box>
  );
}

export default Proflle;

{
  /* <div className="socialMediaLinksContainer d-flex-row">
                {userDataObj?.socialLinks?.map((link) => {
                  return (
                    <a
                      href={
                        link.icon === whatsappSm
                          ? `https://wa.me/${link.username}`
                          : link.icon === telegramSm
                          ? `https://t.me/${link.username}`
                          : link.icon === facebookSm
                          ? `https://facebook.com/${link.username}`
                          : link.icon === pinterestSm
                          ? `https://in.pinterest.com/${link.username}`
                          : link.icon === spotifySm
                          ? `https://open.spotify.com/user/${link.username}`
                          : link.icon === linkedInSm
                          ? `https://www.linkedin.com/in/${link.username}`
                          : link.icon === instagramSm
                          ? `https://instagram.com/${link.username}`
                          : "#"
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="socialIconInView"
                        src={link.icon}
                        alt=""
                      />
                    </a>
                  );
                })}
              </div> */
}
