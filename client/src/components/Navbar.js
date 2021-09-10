import {
  Flex,
  Stack,
  useColorMode,
  IconButton,
  Box,
  Image,
} from "@chakra-ui/react";
import {Link} from 'react-router-dom';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      w="100vw"
      align="center"
      justify="center"
      fontSize={["md", "lg", "xl", "xl"]}
      h="7vh"
      boxShadow="md"
      p={2}
    >
      <Flex w={["100vw", "100vw", "80vw", "80vw"]} justify="space-around">
        <Box>
          <Image
            h="5vh"
            src="https://cdn4.buysellads.net/uu/1/100164/1630700863-2021_RHD_Sandbox_ads260x200.png"
            alt="Logo of Chakra-ui"
          />
        </Box>
        <Stack spacing={8} justify="center" align="center" isInline>
          <Link to="/">Home</Link>
          <Link to="/create">Create</Link>
          <Link to="/edit">Edit</Link>
          <Link to="/login">Login</Link>
          
        </Stack>
        <Box>
          <IconButton
            rounded="full"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? "moon" : "sun"}
          >
            Change Color Mode
          </IconButton>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
