import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "0",
    url: "https://ontheline.vercel.app/",
    title: "Plataforma de cursos",
    description:
      "Nextjs 14, Shadcn, Tailwind, Axios, Zod, Postgres, Planet Scale, Clerk, Stripe, uploadThing, MuxData.",
    image_url: "/plataforma-de-cursos.png",
  },
  {
    id: "1",
    url: "https://tarefas-lac.vercel.app/",
    title: "Lista de Tarefas",
    description:
      "Responsivo, componentes reaproveitaveis, uso de props, CRUD, Postgres, Zod, Tema claro/escuro.",
    image_url: "/tarefas.png",
  },
  {
    id: "2",
    url: "https://alfatech-one.vercel.app/",
    title: "AlfaTech",
    description:
      "Responsivo, componentes reaproveitaveis, uso de props, tabelas.",
    image_url: "/alfatech.png",
  },
  {
    id: "3",
    url: "https://manhattan-coffee-house-two.vercel.app/",
    title: "Manhattan Coffee House",
    description: "Desktop only, estático, estilo panfleto",
    image_url: "/manhattan-coffee.png",
  },
  {
    id: "4",
    url: "https://loja-de-oculos-six.vercel.app/",
    title: "Óticas Vida",
    description:
      "Responsivo, estático, uso de props.",
    image_url: "/oticas-vida.png",
  },
  {
    id: "5",
    url: "https://sorveteria-six.vercel.app/",
    title: "Sol & Neve",
    description:
      "Responsivo, componentes reaproveitaveis, uso de props.",
    image_url: "/sol-e-neve.png",
  },
];

export default function Page() {
  return (
    <div className="grid 
    sm:grid-cols-1 
    md:grid-cols-2 md:max-w-fit
    lg:grid-cols-2 
    xl:grid-cols-3 xl:max-w-w-fit 
    2xl:grid-cols-4 2xl:max-w-w-fit 
    place-items-center mx-auto gap-x-8
    ">
      {projects.map((project) => (
        <div
          key={project.id}
          className="rounded-md bg-primary text-secondary p-4 sm:w-[350px] h-[300px] mb-4 flex flex-col "
        >
          <div className="flex-grow">
            <h1 className="text-xl font-bold flex justify-between">
              {project.title}{" "}
              <Link href={project.url} target="_blank">
                <ExternalLink className="hover:text-blue-500" />
              </Link>{" "}
            </h1>
            <p className="text-sm">{project.description}</p>
          </div>
          <div className="w-full h-[200px] relative">
            <Image
              className="rounded-sm my-2 object-cover absolute top-0 left-0 w-full h-full"
              src={project.image_url}
              layout="fill"
              objectFit="contain"
              alt="demonstrativo"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
