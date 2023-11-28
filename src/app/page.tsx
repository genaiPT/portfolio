"use client";
import Card from "@/components/Card";
import Footbar from "@/components/Footbar";
import Modal from "@/components/Modal";
import Contact from "@/components/contact/Contact";
import ExternalLink from "@/components/navigation/ExternalLink";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import ModalContacts from "@/components/ModalContacts";
import { useScroll } from "@/context/ScrollContext";
import text from "@/data/text.json";
import { language } from "@/utils/language";

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
    { name: "LinkedIn", icon: "/li.png", link: "https://www.linkedin.com/in/ricardolinharespsicologo/?locale=en_US" },
  ];

  const { ref: refCard1, inView: viewCard1 } = useInView({
    threshold: 0.2,
  });
  const { ref: refCard2, inView: viewCard2 } = useInView({
    threshold: 0.2,
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

  const { sectionRefs } = useScroll();

  const { contactos, projectos, sobreMim } = sectionRefs;
  console.log("index", contactos);
  return (
    <>
      <Modal
        open={openModal}
        close={handleModalClose}
        imageSrc="/FeatureDesign_pt.png"
        linkApp={"https://play.google.com/store/apps/details?id=com.rlpsicologia.levelup&hl=en&gl=US"}
        title="Level-up"
        subtitle={text[language].modal}
      />
      <ModalContacts open={openModalContacts} handleModal={handleModalContacts} />
      <div className="overflow-hidden overflow-x-hidden ">
        <main className="flex min-h-screen flex-col items-center justify-between pb-8 ">
          <section className="bg-slate-400 bg-opacity-25  w-full px-12 md:px-28 pt-8  flex flex-col md:flex-row gap-8 lg:gap-32 justify-center items-center  ">
            <div className="flex flex-col gap-6 ">
              <div ref={sobreMim} className="flex flex-col" id="sobre">
                <h1 className="text-3xl font-bold mb-1">Ricardo Linhares</h1>
                <h3 className="text-xl italic mb-10">{text[language].title}</h3>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{text[language].nav.sobre.toUpperCase()}</h3>
                <div className="flex  flex-col gap-y-2">
                  <p>{text[language].p1}</p>
                  <p>{text[language].p2}</p>
                  {/*  <p>{text[language].p3 }</p> */}
                </div>
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
          <section ref={projectos} className="flex flex-row">
            <div>
              <h2 className="text-center mb-8 text-2xl font-bold"> {text[language].nav.projectos.toUpperCase()}</h2>
              <div className="flex gap-8 flex-col md:flex-row px-14 md:px-24">
                <div
                  ref={refCard1}
                  className={`${
                    persistentViewCard1
                      ? "opacity-100 ease-in duration-300 translate-x-0 "
                      : "opacity-0 -translate-x-32 md:-translate-x-60"
                  }`}
                >
                  <Card
                    imageSrc="/app.png"
                    title="Level-up"
                    subtitle={text[language].card1sub}
                    iconArray={techLevelUp}
                    openModal={handleModalOpen}
                  />
                </div>
                <div
                  ref={refCard2}
                  className={`${
                    persistentViewCard2
                      ? "opacity-100 ease-in duration-300 translate-x-0 md:delay-300 "
                      : "opacity-0 translate-x-32 md:translate-x-60"
                  }`}
                >
                  <Card
                    imageSrc="/site.png"
                    title={text[language].card2title}
                    subtitle={text[language].card2sub}
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
            <h2 ref={contactos} className={`text-center  mb-8 text-2xl font-bold `}>
              {text[language].nav.contactos.toUpperCase()}
            </h2>
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
