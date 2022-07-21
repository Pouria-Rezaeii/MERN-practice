import {makeStyles} from "@material-ui/styles";
import type {NextPage} from "next";

const Home: NextPage = () => {
  const c = useStyles();

  return <div className={c.container}>Home</div>;
};

export default Home;

const useStyles = makeStyles((theme) => ({
  container: {},
}));
