import React, { useState } from "react";
import styled from "styled-components";

const FormCard = styled.form`
  background: #1e293b;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid #334155;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 600px;
  width: 100%;

  @media (max-width: 600px) {
    padding: 1.25rem;
  }
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-weight: 600;
    font-size: 0.95rem;
  }

  input,
  textarea {
    padding: 0.75rem;
    border-radius: 6px;
    border: 1px solid #475569;
    background: #0f172a;
    color: #f8fafc;
    font-size: 1rem;
    width: 100%;
  }

  input:focus,
  textarea:focus {
    outline: 2px solid #38bdf8;
    border-color: transparent;
  }
`;

const ErrorText = styled.span`
  color: #f87171;
  font-size: 0.85rem;
`;

const SubmitButton = styled.button`
  background: #38bdf8;
  color: #0f172a;
  font-weight: 700;
  padding: 0.85rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const ContactForm = () => {
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.nome.trim() || formData.nome.trim().length < 3) {
      newErrors.nome = "Informe seu nome completo (mínimo 3 caracteres).";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Informe um endereço de e-mail válido.";
    }
    if (!formData.mensagem.trim() || formData.mensagem.trim().length < 10) {
      newErrors.mensagem = "A mensagem deve ter pelo menos 10 caracteres.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("Enviando...");
    try {
      // Envio para endpoint back-end (ex: Netlify Forms ou endpoint REST)
      await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus("Mensagem enviada com sucesso!");
      setFormData({ nome: "", email: "", mensagem: "" });
    } catch (error) {
      setStatus("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <FormCard name="contato" data-netlify="true" onSubmit={handleSubmit} noValidate>
      <FieldGroup>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          name="nome"
          type="text"
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          placeholder="Seu nome"
        />
        {errors.nome && <ErrorText>{errors.nome}</ErrorText>}
      </FieldGroup>

      <FieldGroup>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="seuemail@exemplo.com"
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}
      </FieldGroup>

      <FieldGroup>
        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows="4"
          value={formData.mensagem}
          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
          placeholder="Escreva sua mensagem..."
        />
        {errors.mensagem && <ErrorText>{errors.mensagem}</ErrorText>}
      </FieldGroup>

      <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
      {status && <p style={{ color: "#38bdf8", fontWeight: 600 }}>{status}</p>}
    </FormCard>
  );
};