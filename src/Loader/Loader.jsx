import { Audio } from "react-loader-spinner";

export const Loader = () => (
    <Audio
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="loading..."
        wrapperStyle
        wrapperClass
    />
);

export default Loader;
