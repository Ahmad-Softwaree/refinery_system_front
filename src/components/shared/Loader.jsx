import { Spinner } from "@chakra-ui/react";

const Loader = ({
  size = "sm",
  screen = false,
  spaceY = false,
  color = "white",
}) => {
  let height = screen ? "h-screen" : "h-fit";
  let margin = spaceY ? "my-10" : "";
  return (
    <div
      className={`w-full flex justify-center items-center flex-col ${margin} ${height}`}>
      <Spinner color={color} size={size} />
    </div>
  );
};

export default Loader;
