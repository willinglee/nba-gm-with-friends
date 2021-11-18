import { createContext, useState, useEffect, FC } from "react";

import { theme as defaultTheme, darkTheme, funTheme } from "./stitches.config";

interface ColorModeProviderValue {
  colorMode: ColorMode;
  cycleToggleMode: () => void;
}

export const ColorModeContext = createContext<ColorModeProviderValue | null>(
  null
);

type ColorMode = string;
type MediaTheme = string;
type ColorModeProviderType = [ColorMode, () => void];
type ColorModeProviderProps = {
  children: any;
};

type AvaiableThemes = {
  [x: string]:
    | typeof defaultTheme.className
    | typeof darkTheme.className
    | typeof funTheme.className;
};

const availableThemes: AvaiableThemes = {
  light: defaultTheme.className,
  dark: darkTheme.className,
  fun: funTheme.className,
};

const saveColorMode = (newMode: ColorMode) => {
  window.localStorage.setItem("color-mode", newMode);
};

const getSavedColorModePreference = (): ColorMode => {
  const savedMode = window.localStorage.getItem("color-mode");

  if (typeof savedMode !== "string") {
    return "";
  }

  return savedMode;
};

const getMediaTheme = (): MediaTheme => {
  const mql = matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches === "boolean";

  if (hasMediaQueryPreference) return mql.matches ? "dark" : "light";

  return "dark";
};

const useColorMode = (): ColorModeProviderType => {
  const [colorMode, setColorMode] = useState("");
  const html = document.documentElement;

  const applyColorMode = (newMode: ColorMode) => {
    html.classList.remove(availableThemes[colorMode]);
    html.classList.add(availableThemes[newMode]);
    setColorMode(newMode);
  };

  let savedColorMode = getSavedColorModePreference();
  // If no localStorage exists, use the user's OS setting
  if (savedColorMode === "") {
    savedColorMode = getMediaTheme();
  }

  html.classList.add(availableThemes[savedColorMode]);
  useEffect(() => {
    setColorMode(savedColorMode);
  }, [savedColorMode]);

  // Listen out for if a user changes operating system
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      applyColorMode(e.matches ? "dark" : "light");
    });

  window
    .matchMedia("(prefers-color-scheme: light)")
    .addEventListener("change", (e) => {
      applyColorMode(e.matches ? "light" : "dark");
    });

  const cycleToggleMode = (): void => {
    const keys = Object.keys(availableThemes);
    let index = keys.indexOf(colorMode);
    if (index === keys.length - 1) {
      index = 0;
    } else if (index >= 0) {
      index = index + 1;
    }
    const newMode = keys[index];
    applyColorMode(newMode);
    saveColorMode(newMode);
  };

  return [colorMode, cycleToggleMode];
};

const ColorModeProvider: FC = ({ children }) => {
  const [colorMode, cycleToggleMode] = useColorMode();

  const colorModeContext = {
    colorMode,
    cycleToggleMode,
  };

  return (
    <ColorModeContext.Provider value={colorModeContext}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
