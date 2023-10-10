"use client";
import Card from "@/components/Card";
import Footbar from "@/components/Footbar";
import Modal from "@/components/Modal";
import Contact from "@/components/contact/Contact";
import ExternalLink from "@/components/navigation/ExternalLink";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FaReact } from "react-icons/fa";
import { IconType } from "react-icons";
import ModalContacts from "@/components/ModalContacts";

export type NameLink = {
  name: string;
  icon: string | undefined;
};
export type NameLink2 = {
  name: string;
  icon: string | undefined;
  link: string;
};
export default function Home() {
  const techLevelUp: NameLink[] = [
    { name: "Expo", icon: "/expo.png" },
    { name: "React Native", icon: "/react.png" },
    { name: "JavaScript", icon: "/js.png" },
  ];

  const techPortfolio: NameLink[] = [
    { name: "Next JS", icon: "/next.svg" },
    { name: "React JS", icon: "/react.png" },
    { name: "TypeScript", icon: "/ts.png" },
    { name: "TailWind", icon: "/tw.png" },
  ];

  const exLinks: NameLink2[] = [
    { name: "GitHub", icon: "/github.png", link: "https://github.com/genaiPT" },
    { name: "LinkedIn", icon: "/li.png", link: "https://www.linkedin.com/in/ricardolinharespsicologo/" },
  ];

  const { ref: refCard1, inView: viewCard1 } = useInView({
    threshold: 0.3,
  });
  const { ref: refCard2, inView: viewCard2 } = useInView({
    threshold: 0.3,
  });
  const { ref: refContactos, inView: viewContacts } = useInView({
    threshold: 0.3,
  });
  const [persistentViewCard1, setPersistentViewCard1] = useState(false);
  const [persistentViewCard2, setPersistentViewCard2] = useState(false);
  const [persistentViewContacts, setPersistentViewContacts] = useState(false);

  useEffect(() => {
    if (viewCard1) setPersistentViewCard1(true);
    if (viewCard2) setPersistentViewCard2(true);
    if (viewContacts) setPersistentViewContacts(true);
  }, [viewCard1, viewCard2, viewContacts]);

  const [openModal, setOpenModal] = useState(false);
  const [openModalContacts, setOpenModalContacts] = useState(false);

  const handleModalOpen = useCallback(() => {
    setOpenModal(true);
    document.body.classList.add("overflow-hidden");
  }, []);

  const handleModalClose = useCallback(() => {
    setOpenModal(false);
    document.body.classList.remove("overflow-hidden");
  }, []);

  const handleModalContacts = useCallback(() => {
    setOpenModalContacts((prev) => !prev);
  }, []);

  return (
    <>
      <Modal
        open={openModal}
        close={handleModalClose}
        imageSrc="/FeatureDesign_pt.png"
        linkApp={"https://play.google.com/store/apps/details?id=com.rlpsicologia.levelup&hl=en&gl=US"}
        title="Level-up"
        subtitle={`O objetivo da app era criar um sistema de promoção de saúde mental, que permitisse rastrear o progresso feito e cativasse os utilizadores. Era também necessário um método de monetização.<br/><br/> A applicação conta com um sistema de Status tipo RPG, titulos de conquistas, inventário de itens adquiridos, registos de gratidão e meditação, entre outras coisas. A app é freemium, utilizando anúncios e uma opção de compra que permir acesso a funcionalidades exclusivas e desativação de anúncios`}
      />
      <ModalContacts open={openModalContacts} handleModal={handleModalContacts} />
      <div className="overflow-hidden overflow-x-hidden ">
        <main className="flex min-h-screen flex-col items-center justify-between pb-8 ">
          <section className="bg-slate-400 bg-opacity-25  w-full px-10 md:px-24 pt-8 pb-8 flex flex-col md:flex-row gap-8 lg:gap-32 justify-center items-center  ">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col" id="sobre">
                <h1 className="text-3xl font-bold mb-1">Ricardo Linhares</h1>
                <h3 className="text-xl italic mb-2">Front-end developer e Psicólogo</h3>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">SOBRE MIM</h3>
                <div className="flex  flex-col gap-y-2">
                  <p>
                    Há tempos atrás, entrei na universidade em Ciências da Computação, no segundo ano, uma cadeira
                    opcional de psicologia virou a minha vida noutra direção.
                  </p>
                  <p>
                    Enventualmente, tornei-me Psicólogo Clínico, mas uma ideia de uma aplicação para disponibilizar aos
                    meus clientes entre sessões e após o final do processo clínico, voltou a virar a Computação na minha
                    direção.
                  </p>
                  <p>
                    Decidi ser eu mesmo a construir a aplicação; e um bichinho que há uns anos não existia, desta vez
                    foi diferente - aparentemente gosto de construir coisas!
                  </p>
                </div>
                {/*      <div className="mt-8 ">
                  <Link href={"/"} target="_blank">
                    <button
                      className="hover:shadow-sm hover:bg-opacity-90 rounded-md bg-orange-500 py-3 px-8 text-base font-semibold text-white outline-none"
                      type="button"
                    >
                      CV
                    </button>
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="">
              <img
                src="/ricardo-linhares.png"
                alt="Ricardo Linhares Psicólogo"
                title="Ricardo Linhares Psicólogo"
                width="800"
              />
            </div>
          </section>
          <div id="projectos" className="mb-14"></div>
          <section className="flex flex-row">
            <div>
              <h2 className="text-center mb-8 text-2xl font-bold">PROJECTOS</h2>
              <div className="flex gap-8 flex-col md:flex-row px-14 md:px-24">
                <div
                  ref={refCard1}
                  className={`${
                    persistentViewCard1
                      ? "opacity-100 ease-in duration-200 translate-x-0 "
                      : "opacity-0 -translate-x-60"
                  }`}
                >
                  <Card
                    imageSrc="/app.png"
                    title="Level-up"
                    subtitle="App android. A funcionalidade principal é completar desafios psicológicos diários, seguir o progresso e ir desbloqueando novo conteúdo."
                    iconArray={techLevelUp}
                    openModal={handleModalOpen}
                  />
                </div>
                <div
                  ref={refCard2}
                  className={`${
                    persistentViewCard2
                      ? "opacity-100 ease-in duration-200 translate-x-0 md:delay-300 "
                      : "opacity-0 translate-x-60"
                  }`}
                >
                  <Card
                    imageSrc="/site.png"
                    title="Este site"
                    subtitle="O objetivo foi contruir algo rápido para funcionar como portfólio e aproveitar para usar outras tecnologias que tenho vindo a aprender."
                    iconArray={techPortfolio}
                  />
                </div>
              </div>
            </div>
          </section>
          <section
            ref={refContactos}
            id="contactos"
            className={`px-14 md:px-24 mt-14 justify-start ${
              persistentViewContacts ? " opacity-100 ease-in  duration-500" : "opacity-0 "
            }`}
          >
            <h2 className={`text-center  mb-8 text-2xl font-bold `}>CONTACTOS</h2>
            <div className="flex flex-1 flex-col md:flex-row gap-16 md:gap-16 lg:gap-32">
              <div>
                <Contact handleModal={handleModalContacts} />
              </div>
              {/* link uteis */}
              <div>
                <ExternalLink exLinks={exLinks} />
              </div>
            </div>
          </section>
        </main>
        <footer>
          <Footbar />
        </footer>
      </div>
    </>
  );
}
function sendEmailToServer(formData: any) {
  throw new Error("Function not implemented.");
}
