import { MoonIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import themeNav from "./Theme.module.css";

const Theme = ({ theme, ChangeTheme }) => {
  // const { toggleColorMode } = useColorMode();

  const handleDarkMode = () => {
    console.log("Theme::", theme);
    ChangeTheme();
  };

  return (
    <Box flex="0.3">
      {theme ? (
        <Box className={themeNav.SunDark} onClick={handleDarkMode}>
          <Box mt="0.2rem">
            <BsFillSunFill />
          </Box>
        </Box>
      ) : (
        <Box className={themeNav.MoonLight} onClick={handleDarkMode}>
          <MoonIcon mt="-0.3rem" boxsize="1.05rem" />
        </Box>
      )}
    </Box>
  );
};

export default Theme;
