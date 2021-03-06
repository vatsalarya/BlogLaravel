import {
  Flex,
  Stack,
  // useColorMode,
  Box,
  Image,
  // Avatar,
  Menu,
  MenuButton,
  MenuList,
  // MenuItem,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = (props) => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const handleClick = (event) => {
		event.preventDefault();
		axios.post('/logout')
			.then(response =>{
        localStorage.clear();
				props.setUser(null);
			})
			.catch(error => {
				console.log(error.response.data);
			})
  }
  return (
    <Flex
      w="100vw"
      align="center"
      justify="center"
      fontSize={["md", "lg", "xl", "xl"]}
      h="7vh"
      // bg="green.50"
      boxShadow="md"
      p={2}
    >
      <Flex w={["100vw", "90vw", "80vw", "80vw"]} justify="space-around">
        <Box>
          <a href="/">
            <Image
              h="5vh"
              src="https://i.ibb.co/zVcCZsJ/logo.png"
              alt="Vatsal's Blog"
            />
          </a>
        </Box>
        <Stack spacing={8} justify="center" align="center" isInline>
          {props.user ? (
            <>
              <Link to="/blogs">Blogs</Link>
              <Link to="/create">Create</Link>
              <Link to="/userblogs">My Blogs</Link>
            </>) : ("")}
          <a href="https://vatsalarya.github.io/portfolio/">About</a>
        </Stack>
        <Flex align="center" justify="center">
          {props.user ? (
            <>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  <Flex>
                    <Image
                      h="2.5vh"
                      src="https://cdn4.buysellads.net/uu/1/100164/1630700863-2021_RHD_Sandbox_ads260x200.png"
                      alt="Avatar"
                      borderRadius="50%"
                      mr="10px"
                    />
                    {/* <Avatar
                      src="https://cdn4.buysellads.net/uu/1/100164/1630700863-2021_RHD_Sandbox_ads260x200.png"
                      h="3vh"
                      w="3vh"
                      mx="20px"
                    ></Avatar> */}
                    {props.user.first_name}
                  </Flex>
                </MenuButton>
                <MenuList>
                  {/* <MenuItem>Download</MenuItem> */}
                  <Link to="/login" onClick={handleClick}>Logout</Link>
                </MenuList>
              </Menu>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
          {/* <IconButton
            rounded="full"
            ml="2vw"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? "moon" : "sun"}
          >
            Change Color Mode
          </IconButton> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
