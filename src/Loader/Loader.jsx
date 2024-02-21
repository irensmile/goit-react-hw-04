import { Audio } from "react-loader-spinner";

export const Loader = () => (
  <Audio
    height="40"
    width="40"
    radius="9"
    color="blue"
    ariaLabel="loading..."
    wrapperStyle
    wrapperClass
  />
);

export default Loader;
