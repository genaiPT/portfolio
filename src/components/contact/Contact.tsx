"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/sendEmail";
import text from "@/data/text.json";
import { language } from "@/utils/language";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

type Props = {
  handleModal: () => void;
};

const Contact: FC<Props> = ({ handleModal }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();
  const [nextSubmission, setNextSubmission] = useState(true);

  function onSubmit(data: FormData) {
    sendEmail(data, handleModal);
    setNextSubmission(false);

    setTimeout(() => {
      setNextSubmission(true);
    }, 2000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="mb-5 ">
          <label htmlFor="name" className="mb-3 block text-base font-medium text-black">
            {text[language].c.nome}
          </label>
          <input
            type="text"
            placeholder={text[language].c.nomeplace}
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 block text-base font-medium text-black">
            Email
          </label>
          <input
            type="email"
            placeholder={text[language].c.mailplace}
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            {...register("email", { required: true })}
          />
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="message" className="mb-3 block text-base font-medium text-black">
          {text[language].c.mensagem}
        </label>
        <textarea
          rows={4}
          placeholder={text[language].c.menplace}
          className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div className="flex flex-1 items-center justify-center md:justify-start ">
        <button
          className="hover:shadow-sm hover:bg-opacity-90 rounded-md bg-orange-500 py-3 px-8 text-base font-semibold text-white outline-none"
          type="submit"
          disabled={!nextSubmission}
        >
          {!nextSubmission ? text[language].c.sending : text[language].c.send}
        </button>
      </div>
    </form>
  );
};

export default Contact;
