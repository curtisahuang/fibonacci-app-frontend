import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";
import { useHistory } from "react-router";
import { SignIn } from "../../components/SignIn";
import { useUserState } from "../../store/user/useUserState";
import { ReactComponent as Niwa } from "./assets/niwa.svg";
import "./home.css";

export const Home = () => {
  const { userData } = useUserState();

  const history = useHistory();
  const linkHandler = (page: string) => {
    history.push(page);
  };

  // // Sample code of how to use the useApi hook in a component
  // // If you want to check useApi: src/utils/api/useApi.ts
  // // How to define the apiHelper(getGardens): src/helpers/api/gardens/getGardens.ts
  // const [gardensApi, getGardensData] = useApi(getGardens);
  // const gardens = useMemo(() => gardensApi.response ?? [], [gardensApi]);

  // useEffect(() => {
  //   getGardensData();
  // }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
      className="splash-page"
    >
      <div className="splash-page">
        <div className="ni-wa-container">
          <Niwa className="ni-wa-character" />
          <h1 className="ni-wa">ni•wa</h1>
          <h3 className="ni-wa-definition">a garden or courtyard</h3>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => linkHandler("/about")}
          >
            What is my niwa?
          </Button>
          <div>
            {userData.isLoggedIn ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => linkHandler("/user/myniwa")}
              >
                Get me to my Gardens!
              </Button>
            ) : (
              <div>
                <h4>Sign in to get started!</h4>
                <SignIn />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
