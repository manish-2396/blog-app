import { extendTheme, theme as base } from "@chakra-ui/react";

const theme2 = extendTheme({
  fonts: {
    heading: `Poppins, ${base.fonts?.heading}`,
    body: `sans-serif, ${base.fonts?.body}`,
  },
});

export default theme2;
