import { NextChakraProvider } from "../components/provider";
const MainLayout = ({children}) => {
    return (
        <html>
            <body>
                <NextChakraProvider>
                {children}
                </NextChakraProvider>
            </body>
        </html>
    );
}
export default MainLayout