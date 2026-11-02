import * as React from "react";

const NUMERO = "554791858900";

const OPCOES = [
  {
    titulo: "Pedir orçamento",
    descricao: "Me conta como está a sua piscina",
    mensagem: "Olá! Gostaria de um orçamento para limpeza e manutenção da minha piscina.",
  },
  {
    titulo: "Tirar dúvidas",
    descricao: "Pergunte o que quiser, sem compromisso",
    mensagem: "Olá! Tenho uma dúvida sobre a minha piscina.",
  },
];

function linkWhats(mensagem: string) {
  return `https://wa.me/${NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

function WhatsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2s-1 .3-3.4-.7a11.6 11.6 0 0 1-4.6-4.1c-.4-.5-1-1.6-1-2.7s.6-1.7.8-2 .5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.2-.3.3-.1.6a8 8 0 0 0 1.5 1.8 7 7 0 0 0 2 1.3c.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.4.2.5.3s.1.7-.1 1.4Z"
      />
    </svg>
  );
}

export function WhatsFlutuante() {
  const [aberto, setAberto] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!aberto) return;
    const aoClicarFora = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setAberto(false);
    };
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
    };
    document.addEventListener("mousedown", aoClicarFora);
    document.addEventListener("keydown", aoTeclar);
    return () => {
      document.removeEventListener("mousedown", aoClicarFora);
      document.removeEventListener("keydown", aoTeclar);
    };
  }, [aberto]);

  return (
    <div
      ref={ref}
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7"
    >
      {aberto && (
        <div className="rise w-[min(20rem,calc(100vw-2.5rem))] rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
          <p className="eyebrow text-whats">WhatsApp</p>
          <h2 className="mt-2 font-display text-2xl font-black uppercase leading-none">
            Como posso ajudar?
          </h2>
          <div className="mt-4 flex flex-col gap-3">
            {OPCOES.map((o) => (
              <a
                key={o.titulo}
                href={linkWhats(o.mensagem)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background p-4 transition hover:border-whats hover:bg-whats/10"
              >
                <WhatsIcon className="mt-0.5 h-6 w-6 shrink-0 text-whats" />
                <span>
                  <span className="block font-extrabold">{o.titulo}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{o.descricao}</span>
                </span>
              </a>
            ))}
          </div>
          <a
            href={`tel:+${NUMERO}`}
            className="mt-4 block text-center text-sm font-semibold text-muted-foreground transition hover:text-whats"
          >
            ou ligue: +55 47 9185-8900
          </a>
        </div>
      )}

      <div className="relative">
        {!aberto && (
          <span aria-hidden className="absolute inset-0 animate-ping rounded-full bg-whats/50" />
        )}
        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-label="Falar no WhatsApp para pedir orçamento ou tirar dúvidas"
          className="relative flex items-center gap-3 rounded-full bg-whats px-5 py-4 font-extrabold text-whats-foreground shadow-soft transition hover:bg-whats-dark"
        >
          <WhatsIcon className="h-7 w-7" />
          <span className="hidden sm:inline">Orçamento rápido</span>
        </button>
      </div>
    </div>
  );
}
