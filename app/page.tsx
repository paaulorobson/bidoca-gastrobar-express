"use client";
import { useState } from "react";
import {
  ArrowRight,
  Coffee,
  ConciergeBell,
  Utensils,
  MapPin,
  Menu,
  X,
  Instagram,
  MessageCircle,
} from "lucide-react";
const phone = "5598988798810";
const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent("Olá! Gostaria de fazer uma reserva no Bidoca.")}`;
const links = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Cardápio", "#cardapio"],
  ["Eventos", "#eventos"],
  ["Localização", "#localizacao"],
];
function ButtonLink({
  href,
  children,
  outline = false,
}: {
  href: string;
  children: React.ReactNode;
  outline?: boolean;
}) {
  return (
    <a
      className={outline ? "btn btn-outline" : "btn btn-orange"}
      href={href}
      target={href.startsWith("https") ? "_blank" : undefined}
      rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
    >
      {children}
      <ArrowRight size={17} />
    </a>
  );
}
function Photo({
  name,
  alt,
  extension = "jpg",
  className = "",
}: {
  name: string;
  alt: string;
  extension?: "jpg" | "png";
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`photo ${className}`}
      style={{ backgroundImage: `url('/images/${name}.${extension}')` }}
    />
  );
}
export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <header className="header">
        <div className="wrap nav">
          <a className="brand" href="#inicio">
            BI<span>DO</span>CA<small>GASTROBAR & DRINKS</small>
          </a>
          <nav className={open ? "navlinks active" : "navlinks"}>
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
          <a
            className="reserve top-reserve"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Fazer Reserva
          </a>
          <button
            className="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <section id="inicio" className="hero">
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <h1>
            BI<span>DO</span>CA
          </h1>
          <div className="hero-subtitle">GASTROBAR & DRINKS</div>
          <p>
            Boa comida, bons drinks
            <br />e os melhores momentos.
          </p>
          <a
            className="reserve hero-reserve"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={19} /> Fazer Reserva
          </a>
        </div>
      </section>
      <section id="sobre" className="light-section">
        <div className="wrap about-grid">
          <div className="section-copy">
            <span className="eyebrow">SOBRE NÓS</span>
            <h2>
              Mais que um bar,
              <br />
              um ponto de encontro.
            </h2>
            <p>
              No Bidoca, cada detalhe é pensado para o seu conforto. Um ambiente
              acolhedor, boa gastronomia, drinks especiais e experiências que
              tornam qualquer momento mais especial.
            </p>
            <ButtonLink href="#galeria" outline>
              Conheça nosso espaço
            </ButtonLink>
          </div>
          <Photo
            name="coquetel-citrico"
            extension="png"
            alt="Coquetel cítrico com laranja, gelo e hortelã"
          />
        </div>
      </section>
      <section className="hours dark-section">
        <div className="wrap hours-grid">
          <div className="section-copy">
            <span className="eyebrow">FUNCIONAMENTO</span>
            <h2>
              Estamos
              <br />
              sempre prontos
              <br />
              para te receber.
            </h2>
            <p>
              Do café da manhã ao jantar, o Bidoca é o lugar certo para todas as
              horas do seu dia.
            </p>
          </div>
          <div className="hour-item">
            <Coffee />
            <h3>Café da Manhã</h3>
            <p>07:15 às 10:00</p>
          </div>
          <div className="hour-item">
            <ConciergeBell />
            <h3>Almoço</h3>
            <p>11:00 às 14:00</p>
          </div>
          <div className="hour-item">
            <Utensils />
            <h3>Jantar</h3>
            <p>18:00 às 22:00</p>
          </div>
        </div>
      </section>
      <section id="eventos" className="events">
        <div className="event event-music">
          <div className="event-overlay" />
          <div className="event-content">
            <span className="eyebrow">SÁBADOS</span>
            <h2>
              Música
              <br />
              ao vivo
            </h2>
            <p>A partir de 20:30</p>
            <ButtonLink href="https://www.instagram.com/p/DekSNUBoDaq/?vrfl=OG9zeHZiajB6ZWdm">
              Ver programação
            </ButtonLink>
          </div>
        </div>
        <div className="event event-games">
          <div className="event-overlay" />
          <div className="event-content">
            <span className="eyebrow">JOGOS</span>
            <h2>
              Os melhores
              <br />
              jogos da rodada
            </h2>
            <p>
              Transmitimos ao vivo
              <br />
              com alta qualidade.
            </p>
            <ButtonLink href={whatsapp}>Saiba mais</ButtonLink>
          </div>
        </div>
      </section>
      <section id="cardapio" className="light-section">
        <div className="wrap menu-grid">
          <div className="section-copy">
            <span className="eyebrow">NOSSO CARDÁPIO</span>
            <h2>
              Sabores que
              <br />
              conquistam.
            </h2>
            <p>
              Pratos elaborados, petiscos incríveis e drinks especiais para
              todos os momentos.
            </p>
            <ButtonLink href="https://clipfood.com.br/bidoca/categories" outline>
              Ver cardápio completo
            </ButtonLink>
          </div>
          <Photo
            name="bolinhas-crocantes"
            extension="png"
            alt="Bolinhas crocantes com molho cremoso"
          />
          <Photo
            name="prato-bidoca"
            extension="png"
            alt="Prato Bidoca com carne, arroz e fritas"
          />
          <Photo
            name="chopp-bidoca"
            extension="png"
            alt="Caneca de chopp Bidoca congelada"
          />
        </div>
      </section>
      <section id="galeria" className="gallery dark-section">
        <div className="wrap gallery-grid">
          <div className="section-copy">
            <span className="eyebrow">GALERIA</span>
            <h2>
              Um ambiente
              <br />
              para viver bons
              <br />
              momentos.
            </h2>
            <p>Confira um pouco do que te espera no Bidoca.</p>
            <ButtonLink href="https://www.instagram.com/bidocagastrobar">
              Ver mais fotos
            </ButtonLink>
          </div>
          <Photo name="interior" alt="Ambiente interno do gastrobar" />
          <Photo name="cheers" alt="Pessoas brindando com cerveja" />
          <Photo name="bar" alt="Balcão do bar com iluminação aconchegante" />
        </div>
      </section>
      <section id="localizacao" className="light-section location">
        <div className="wrap location-grid">
          <div className="section-copy">
            <span className="eyebrow">LOCALIZAÇÃO</span>
            <h2>Venha nos visitar.</h2>
            <p className="address">
              <MapPin size={26} /> Av. Castelo Branco, 1052 - Centro
              <br />
              Vargem Grande - MA
            </p>
          </div>
          <div className="map">
            <iframe
              title="Mapa da localização do Bidoca"
              src="https://www.google.com/maps?q=Av.%20Castelo%20Branco%2C%201052%2C%20Centro%2C%20Vargem%20Grande%2C%20MA&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="contact">
            <strong>Reserve sua mesa</strong>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={22} /> (98) 98879-8810
            </a>
            <p>
              Será um prazer
              <br />
              receber você no Bidoca!
            </p>
          </div>
        </div>
      </section>
      <footer>
        <div className="wrap footer-inner">
          <span>© {new Date().getFullYear()} Bidoca Gastrobar & Drinks</span>
          <a href="#inicio">Voltar ao início ↑</a>
        </div>
      </footer>
    </main>
  );
}
