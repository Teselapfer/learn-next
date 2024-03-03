import { Box, Flex, HStack, Stack, IconButton, useColorModeValue, useDisclosure, Menu, useColorMode } from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons"


export const NavBar = ({ children, logo }) => {

  const gray = useColorModeValue("gray.100", "gray.900")
  const menuGray = useColorModeValue("gray.200", "gray.700")
  const { isOpen, onToggle } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box bg={gray} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between" >
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={onToggle}
        />
        <HStack>
          {logo}
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {children}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Menu>
          </Menu>
          <IconButton icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
        </Flex>
      </Flex>
      {isOpen ? <Box pb={4} display={{ md: "none" }}>
        <Stack as="nav" spacing={4}>
          {children}
        </Stack>
      </Box> : null}
    </Box>)

}

export const NavLink = ({ children, href }) => {
  const gray = useColorModeValue("gray.200", "gray.700")
  return (
    <Box as="a" href={href} px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: gray }}>{children}</Box>
  )
}


