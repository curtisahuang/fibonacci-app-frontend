import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";
import { useHistory } from "react-router";
import { SignIn } from "../../components/SignIn";
import { useUserState } from "../../store/user/useUserState";
import "./About.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import gardenPhoto from "./assets/david-emrich-9a0S_8bU0lo-unsplash.jpg";
import gardenPhoto2 from "./assets/david-emrich-dJcDUnby4n4-unsplash(small).jpg";

const useStyles = makeStyles({
  root: {
    opacity: 0.8,
  },
  media: {
    height: 140,
  },
});

export const About = () => {
  const { userData } = useUserState();

  const classes = useStyles();

  const history = useHistory();
  const linkHandler = () => {
    history.push("/user/myniwa");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className="info-page"
    >
      <div className="about-page">
        <div className="about-container">
          <Card className={classes.root}>
            <CardActionArea>
              {/* <CardMedia
                className={classes.media}
                image={gardenPhoto}
                title=""
              /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  My niwa is about growing a beautiful garden
                </Typography>
                <Typography>
                  <ol>
                    <li>
                      Create a flower bed with seeds (good habits you'd like to
                      have!)
                    </li>
                    <li>Every day, complete your seeds to gain coins!</li>
                    <li>Use your coins to either buy flowers...</li>
                    {/* <li>Or try your luck with the gacha for rare flowers!</li> */}
                    <li>
                      Try to collect all the flowers while bettering yourself!
                    </li>
                  </ol>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {userData.isLoggedIn ? (
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={() => linkHandler()}
                >
                  Get me to my niwa!
                </Button>
              ) : (
                <SignIn />
              )}
            </CardActions>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};
