import React from "react";
import { StoreProvider } from "./src/context/shopContext";

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)
