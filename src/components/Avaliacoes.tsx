import * as React from "react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import maxCastanho from "@/assets/reviewers/max-castanho.jpg.asset.json";
import francieliAraujo from "@/assets/reviewers/francieli-araujo.jpg.asset.json";
import alineLanza from "@/assets/reviewers/aline-lanza.jpg.asset.json";
import josianeFernandes from "@/assets/reviewers/josiane-fernandes.jpg.asset.json";
import kalitaSilveira from "@/assets/reviewers/kalita-silveira.jpg.asset.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const FOTOS_AVALIADORES: Partial<Record<string, string>> = {
  "Max Castanho": maxCastanho.url,
  "Francieli Araujo": francieliAraujo.url,
  "Aline Lanza": alineLanza.url,
  "Josiane Fernandes": josianeFernandes.url,
  "Kalita Silveira": kalitaSilveira.url,
};

const REVIEWS = [
  { nome: "Max Castanho", quando: "1 ano atrás", texto: "Por meio de indicação solicitei os serviços destes profissionais para manutenção em minha residência, agendamento e pontualidade excelentes, serviços e limpeza da área de trabalho excelentes. Com certeza indico pois na minha experiência com a equipe foi excelente no trabalho e a comunicação na ações tomadas." },
  { nome: "Francieli Araujo", quando: "1 ano atrás", texto: "Vou tá deixando aqui desde já meus parabéns, ótimo profissional, ele passa confiança no que faz sem contar o capricho. Parabéns, super indico!" },
  { nome: "Aline Lanza", quando: "1 ano atrás", texto: "Ótimo profissional, trabalho de excelência! Recomendo." },
  { nome: "Josiane Fernandes", quando: "1 ano atrás", texto: "Nunca pensei que ia me empolgar pra falar de piscina, mas aqui estou! 😂 O serviço foi tão bom que não tem como não deixar um elogio. Ele chegou certinho no horário, não fez bagunça, deixou tudo brilhando." },
  { nome: "Kalita Silveira", quando: "1 ano atrás", texto: "Sinceramente, me surpreendi com a qualidade do serviço! Já contratei outros piscineiros, mas nunca tinha visto alguém tão detalhista e cuidadoso. Ele não só limpou a piscina, mas deixou a água cristalina de verdade." },
  { nome: "Marcelo Jackson", quando: "2 anos atrás", texto: "Muito bom profissional." },
  { nome: "Lucas Rego", quando: "2 anos atrás", texto: "Serviço de qualidade!" },
  { nome: "Paulo Henrique da Silva", quando: "2 anos atrás", texto: "Sempre que eu preciso está à disposição, é o melhor de Joinville." },
  { nome: "Alanis Schelbauer", quando: "2 anos atrás", texto: "Melhor piscineiro de Joinville." },
  { nome: "Gisela Gon", quando: "3 anos atrás", texto: "Perfeito, minha piscina sempre azul, confiança." },
  { nome: "Caue Rodrigo", quando: "3 anos atrás", texto: "Serviços de ótima qualidade." },
  { nome: "Rodrigo Tripa Silva", quando: "3 anos atrás", texto: "Profissional de excelência, serviço de ótima qualidade. Preço justo. Recomendo." },
  { nome: "Ronaldo Brugnago", quando: "3 anos atrás", texto: "Melhor da região ★★★★★" },
];


const CORES_GOOGLE = {
  azul: "#4285F4",
  vermelho: "#EA4335",
  amarelo: "#FBBC05",
  verde: "#34A853",
};

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill={CORES_GOOGLE.azul}
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.58 2.77c2.08-1.92 3.28-4.74 3.28-8.59z"
      />
      <path
        fill={CORES_GOOGLE.verde}
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53l-3.66 2.84C4.99 20.53 7.7 23 12 23z"
      />
      <path
        fill={CORES_GOOGLE.amarelo}
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09L2.18 7.07C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill={CORES_GOOGLE.vermelho}
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.31-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function Estrelas() {
  return (
    <p className="flex gap-0.5" aria-label="5 de 5 estrelas">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4" fill={CORES_GOOGLE.amarelo} aria-hidden="true">
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </p>
  );
}

function CardAvaliacao({ r }: { r: (typeof REVIEWS)[number] }) {
  return (
    <article className="relative h-full rounded-[1.5rem] border border-border/60 bg-background p-6 pt-7 shadow-soft">
      <GoogleG className="absolute right-5 top-5 h-5 w-5" />
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage
            src={FOTOS_AVALIADORES[r.nome]}
            alt={`Perfil de ${r.nome} no Google`}
            width={40}
            height={40}
            className="object-cover"
          />
          <AvatarFallback className="bg-primary text-base font-extrabold text-primary-foreground">
            {r.nome[0]}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 pr-6">
          <p className="truncate font-bold">{r.nome}</p>
          <p className="text-xs text-muted-foreground">{r.quando}</p>
        </div>
      </div>
      <div className="mt-3">
        <Estrelas />
      </div>
      <p className="mt-2 text-sm leading-relaxed">{r.texto}</p>
      <p className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
        <GoogleG className="h-3.5 w-3.5" />
        Avaliação publicada no Google
      </p>
    </article>
  );
}

export function Avaliacoes() {
  const [api, setApi] = useState<CarouselApi>();
  const [atual, setAtual] = useState(0);
  const [total, setTotal] = useState(0);

  const onSelect = React.useCallback((emblaApi: NonNullable<CarouselApi>) => {
    setAtual(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!api) return;
    setTotal(api.scrollSnapList().length);
    onSelect(api);
    api.on("select", onSelect);
    api.on("reInit", onSelect);
  }, [api, onSelect]);

  return (
    <section id="avaliacoes" className="overflow-hidden bg-muted py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="eyebrow text-accent">Avaliações no Google</p>
            <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none md:text-6xl">
              Quem confia, <span style={{ color: CORES_GOOGLE.azul }}>recomenda</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 rounded-[1.5rem] border border-border/60 bg-background px-6 py-4 shadow-soft">
            <GoogleG className="h-9 w-9" />
            <div>
              <p className="text-3xl font-extrabold leading-none">5,0</p>
              <div className="mt-1">
                <Estrelas />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">50 avaliações no Google</p>
            </div>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          className="mt-12"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="-ml-5">
            {REVIEWS.map((r) => (
              <CarouselItem key={r.nome} className="pl-5 basis-full sm:basis-1/2 lg:basis-1/3">
                <CardAvaliacao r={r} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-[-14px] h-11 w-11 rounded-full border-border/60 shadow-soft" />
          <CarouselNext className="right-[-14px] h-11 w-11 rounded-full border-border/60 shadow-soft" />
        </Carousel>

        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              aria-label={`Ir para página ${i + 1} de avaliações`}
              onClick={() => api?.scrollTo(i)}
              className="h-2.5 rounded-full transition-all"
              style={{
                width: i === atual ? "1.75rem" : "0.625rem",
                backgroundColor: i === atual ? CORES_GOOGLE.azul : "color-mix(in srgb, currentColor 25%, transparent)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export function Mapa({ endereco }: { endereco: string }) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(endereco)}&z=16&output=embed`;
  return (
    <section id="local" className="mx-auto max-w-6xl px-6 py-28">
      <p className="eyebrow text-accent">Onde estamos</p>
      <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none md:text-6xl">Adhemar Garcia, Joinville</h2>
      <p className="mt-4 text-muted-foreground">{endereco}</p>
      <div className="mt-10 overflow-hidden rounded-[2rem] shadow-soft">
        <iframe title="Mapa O Piscineiro" src={src} className="h-[450px] w-full border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  );
}
