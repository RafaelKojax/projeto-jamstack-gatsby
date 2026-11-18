import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  margin-top: 4rem;
  padding: 2rem 1.25rem;
  border-top: 1px solid #334155;
  text-align: center;
  color: #94a3b8;
  font-size: 0.9rem;
`;

export const Footer = () => (
  <FooterWrapper>
    <p>Desenvolvido com Gatsby &amp; Arquitetura Jamstack — Pós-Graduação Instituto Infnet</p>
  </FooterWrapper>
);