import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { WhatsFlutuante } from "@/components/WhatsFlutuante";

const NUMERO = "554791858900";

describe("Botão flutuante de WhatsApp", () => {
  it("abre o painel com as duas mensagens prontas para o mesmo número", () => {
    render(<WhatsFlutuante />);

    // fechado: nenhum link de WhatsApp ainda na tela
    expect(screen.queryByRole("link", { name: /orçamento/i })).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: /WhatsApp/i }));

    const orcamento = screen.getByRole("link", { name: /Pedir orçamento/i });
    const duvidas = screen.getByRole("link", { name: /Tirar dúvidas/i });

    expect(orcamento.getAttribute("href")).toBe(
      `https://wa.me/${NUMERO}?text=${encodeURIComponent(
        "Olá! Gostaria de um orçamento para limpeza e manutenção da minha piscina.",
      )}`,
    );
    expect(duvidas.getAttribute("href")).toBe(
      `https://wa.me/${NUMERO}?text=${encodeURIComponent(
        "Olá! Tenho uma dúvida sobre a minha piscina.",
      )}`,
    );
  });
});
