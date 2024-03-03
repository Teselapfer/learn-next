'use client'
import { Container } from "@chakra-ui/react"
import { NavBar } from "../components/nav"
export default function Page() {
    return (
        <>
            <NavBar>
            </NavBar>
            <Container bg="red" >
                Layout Test
            </Container>
        </>
    )
}