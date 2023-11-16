"use client";
import React, { ReactNode, createContext, useContext, useRef } from "react";

export type SectionRefsTypes = {
  sobreMim: React.RefObject<HTMLDivElement>;
  projectos: React.RefObject<HTMLDivElement>;
  contactos: React.RefObject<HTMLDivElement>;
};

type ScrollContextType = {
  scrollToSection: (section: keyof SectionRefsTypes) => void;
  sectionRefs: SectionRefsTypes;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

type ScrollProviderProps = {
  children: ReactNode;
};

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const sectionRefs = {
    sobreMim: useRef<HTMLDivElement>(null),
    projectos: useRef<HTMLDivElement>(null),
    contactos: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: string) => {
    const targetRef = sectionRefs[section as keyof SectionRefsTypes];

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return <ScrollContext.Provider value={{ scrollToSection, sectionRefs }}>{children}</ScrollContext.Provider>;
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
