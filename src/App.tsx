import { createContext } from "react";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useMode } from "./theme";
import { CssBaseline, ThemeOptions, ThemeProvider } from "@mui/material";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  const [theme, colorMode] = useMode();
  const ColorModeContext = createContext(colorMode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme as ThemeOptions}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
