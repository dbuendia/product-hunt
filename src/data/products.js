import Daniel from "../images/avatars/daniel.jpeg";
import Elliot from "../images/avatars/elliot.jpeg";
import Helen from "../images/avatars/helen.jpeg";
import Molly from "../images/avatars/molly.png";
import aqua from "../images/products/image-aqua.png";
import rose from "../images/products/image-rose.png";
import yellow from "../images/products/image-yellow.png";
import steel from "../images/products/image-steel.png";

function generateVoteCount() {
  // Generates random number from 1 to 10
  let vote = Math.floor(Math.random() * 10);
  return vote;
}

export const products = [
  {
    id: 1,
    title: "Pala amarilla",
    description: "Experiencia en construcción de castillos de arena a pedido.",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: `${Daniel}`,
    productImageUrl: `${aqua}`,
  },
  {
    id: 2,
    title: "Cauchos todo terreno",
    description: "Buena tracción en cualquier planeta.",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: `${Helen}`,
    productImageUrl: `${rose}`,
  },
  {
    id: 3,
    title: "Alumineros",
    description: "Sombreros de papel de aluminio a medida",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: `${Molly}`,
    productImageUrl: `${steel}`,
  },
  {
    id: 4,
    title: "Cuadernos de hojas invisibles",
    description: "Protege tus apuntes mas secretos",
    url: "#",
    votes: generateVoteCount(),
    submitterAvatarUrl: `${Elliot}`,
    productImageUrl: `${yellow}`,
  },
];
