import React from "react";
import { Layout } from "../components/Layout";
import { ContactForm } from "../components/ContactForm";
import { Seo } from "../components/Seo";

const ContatoPage = () => (
  <Layout>
    <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Contato</h1>
    <p style={{ color: "#94a3b8", marginBottom: "1.5rem" }}>
      Envie uma mensagem utilizando o formulário estático abaixo:
    </p>
    <ContactForm />
  </Layout>
);

export const Head = () => (
  <Seo
    title="Contato"
    description="Formulário de contato responsivo com validação."
    pathname="/contato"
  />
);

export default ContatoPage;