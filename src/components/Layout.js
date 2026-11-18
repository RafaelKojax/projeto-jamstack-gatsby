import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => (
  <>
    <Header />
    <main className="container" style={{ paddingTop: "2rem" }}>
      {children}
    </main>
    <Footer />
  </>
);