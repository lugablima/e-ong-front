import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { theme } from "./assets/theme";
import UserProvider from "./context/UserContext";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";
import OngsPage from "./pages/OngsPage";
import PhonesPage from "./pages/PhonesPage";
import ProfilePage from "./pages/ProfilePage";
import SignInPage from "./pages/SignInPage";
import SignUpOngPage from "./pages/SignUpOngPage";
import SignUpPage from "./pages/SignUpPage";

export function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-up/ong" element={<SignUpOngPage />} />
            <Route path="/ongs" element={<OngsPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/phones" element={<PhonesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </ChakraProvider>
  );
}
