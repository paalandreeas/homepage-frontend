import { ProjectInfo } from "./types";
import amdb_poster from "../images/amdb_poster.png";
import bbbj_poster from "../images/bbbj_poster.png";
import homepage_poster from "../images/homepage_poster.png";
import homeserver_poster from "../images/homeserver_poster.png";
import interactive_gallary_poster from "../images/interactive_gallary_poster.png";

export const projects: ProjectInfo[] = [
  {
    title: "AMDB (A Movie Database)",
    subtitle: "November 2020",
    img: amdb_poster,
    link: "/amdb",
    github: "https://github.com/paalandreeas/IT2810-frontend",
    demo: "http://it2810.morholmen.no/",
    paragraphs: [
      "Dette prosjektet ble laget som en del av faget IT2810 Webutvikling sammen med to venner. Det er en prototype på en filmdatabase med fokus på pagination på større mengder data, sortering, filtrering og brukergenerert data. Frontenden av prosjektet ble laget med React, TypeScript, Redux, Axios og Material UI. Backenden av prosjektet ble laget med Node, Express, Mongoose, Passport med JWT. Databasen kjører MongoDB for en full MERN stack. Testing ble gjort med Jest, Cypress og Mocha. Frontend og backend hostes med AWS.",
    ],
  },
  {
    title: "Portfolio nettside",
    subtitle: "April 2021",
    img: homepage_poster,
    link: "/portfolio_webpage",
    github: "https://github.com/paalandreeas/homepage-frontend",
    paragraphs: [
      "Dette er siden du ser på nå. Dette prosjektet ble påbegynt mars 2021. Siste store oppdatering ble gjort i april 2021. Jeg lagde denne nettsiden for å vise fram prosjektene jeg har jobbet med, samt utforske noen nye teknologier. Jeg var godt kjent med React og Typescript før jeg begynte på dette prosjektet, men jeg hadde lyst til å prøve meg fram med Tailwind CSS og noen animasjoner. Da jeg så etter et bibliotek for animasjoner i React, kom jeg over Framer Motion. Etter litt eksperimentering kom jeg fram til det du ser på nå. Denne siden bruker også Redux for state management selv om det er en massiv overdrivelse for størrelsen på dette prosjektet.",
      "Videre har jeg lyst til å gjøre noen endringer til denne siden når jeg får tid. Jeg er ikke helt fornøyd med hvordan Framer Motion fungerer på mobil (det hakker litt for mye). Jeg har lyst til å koble denne siden opp til en backend, men jeg vet ikke for hva ennå (har allerede lagt opp for dette med Redux). Jeg har også lyst til å legge inn en toggle for light mode / dark mode, men jeg har ikke funnet en fargepalett jeg er helt fornøyd med ennå. En logo må også lages, samt bytte ut fonter til noe litt mer fancy. Forsidebildet må byttes ut til noe litt mer relevant.",
    ],
  },
  {
    title: "Hjemmeserver",
    subtitle: "Februar 2021",
    img: homeserver_poster,
    link: "/home_server",
    paragraphs: [
      "I desember 2020 bestilte jeg alle delene jeg trengte for å bygge en hjemmeserver, noe jeg har hatt lyst på veldig lenge. I februar fikk jeg delene og fikk satt den opp. Jeg bruker Rancher, Kubernetes og Docker for å hoste noen mikrotjenester. Jeg vet dette er en massiv overdrivelse for en hjemmeserver, men jeg synes det er gøy å eksperimentere med noe som brukes for å deploye store internettjenester i virkeligheten. Foreløpig kjører den kun en Jellyfin og en Minecraft server jeg og noen venner spiller på, men jeg jobber med å legge inn en reverse proxy for å få SSL sertifikat for en deployment av denne siden du leser på nå. Jeg har også planer om å hoste Home Assistant for automatisering av kollektivet jeg bor i, samt flere andre mikrotjenester.",
    ],
  },
  {
    title: "Interaktivt galleri",
    subtitle: "September 2020",
    img: interactive_gallary_poster,
    link: "/interactive_gallary",
    github: "https://github.com/paalandreeas/it2810-interactive-gallery",
    demo: "https://art-exhibition.morholmen.no",
    paragraphs: [
      "Dette prosjektet ble laget som en del av faget IT2810 Webutvikling sammen med to venner. Det var en av de første oppgavene vi fikk i faget og hadde som fokus å lage et interaktivt og animert galleri. Hvert kunstverk har noen tilsvarende lyder, temaer og dikt som hentes dynamisk fra PoetryDB. Den er laget med React, TypeScript og en custom React Context for state management.",
    ],
  },
  {
    title: "Fiktiv resturant",
    subtitle: "Høst 2018",
    img: bbbj_poster,
    link: "/imaginary_restaurant",
    github: "https://github.com/paalandreeas/it2805-imaginary-restaurant",
    demo: "https://it2805.morholmen.no",
    paragraphs: [
      "Dette prosjektet ble laget som en del av faget IT2801 Webteknologi sammen med tre venner. Siden ble skrevet i ren HTML, CSS og JavaScript med ganske store begrensninger i og med at det er et introduksjonsfag til webutvikling. Likevel ble det et gøy og lærerikt prosjekt som vi lærte mye og vekket en interesse for webutvikling hos meg.",
    ],
  },
];
