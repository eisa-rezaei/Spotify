import musicImage1 from "./../assets/music-pic/1.png";
import musicImage2 from "./../assets/music-pic/2.png";
import musicImage3 from "./../assets/music-pic/3.jpeg";
import musicImage4 from "./../assets/music-pic/4.png";
import musicImage6 from "./../assets/music-pic/6.jpeg";
import musicImage7 from "./../assets/music-pic/7.png";

import recent_artist4 from "./../assets/recent-artists/1.jpeg";
import recent_artist5 from "./../assets/recent-artists/2.jpeg";
import recent_artist3 from "./../assets/recent-artists/3.jpg";
import recent_artist6 from "./../assets/recent-artists/4.jpg";
import recent_artist2 from "./../assets/recent-artists/5.jpeg";
import recent_artist1 from "./../assets/recent-artists/6.jpeg";
import Tiesto from "./../assets/recent-artists/artist-icon.png";

import music1 from "./../musics/Adele_1.mp3";
import music2 from "./../musics/Adele_2.mp3";
import music3 from "./../musics/Alexander.mp3";
import music4 from "./../musics/Ed.mp3";
import music5 from "./../musics/Music.mp3";
import music6 from "./../musics/VinJay_1.mp3";
import music7 from "./../musics/VinJay_2.MP3";

import music8 from "./../musics/Tiesto.mp3";
import music9 from "./../musics/Teisto_2.mp3";
import music10 from "./../musics/tiesto_1.mp3";
import music11 from "./../musics/Tiesto-Escape.mp3";
import music12 from "./../musics/Tiesto-IWillBeHere.mp3";
import { FaHome, FaMicrophoneAlt } from "react-icons/fa";
import { IoIosCompass } from "react-icons/io";
import { SiOpenstreetmap } from "react-icons/si";
import { IoTime } from "react-icons/io5";

export const NAVLINKS = [
  { icon: <FaHome />, title: "Home", linkSrc: "/" },
  { icon: <IoIosCompass />, title: "Explore", linkSrc: "/explore" },
  { icon: <SiOpenstreetmap />, title: "IGTV", linkSrc: "/igtv" },
  { icon: <FaMicrophoneAlt />, title: "Microphone", linkSrc: "/microphone" },
  { icon: <IoTime />, title: "Time", linkSrc: "/time" },
];

export const musics = [
  {
    id: 1,
    image: musicImage6,
    tag: "house",
    musicName: "Milion years ago",
    artist: "Adel",
    music_src: music1,
    description:
      "Stop waiting for exceptional things to just happen.He found a leprechaun in his walnut shell.There can never be too many cherries on an ice cream sundae.They improved dramatically once the lead singer left.Honestly, I didn't care much for the first season, so I didn't bother with the second.Best friends are like old tomatoes and shoelaces.Despite what your teacher may have told you, there is a wrong way to wield a lasso.He had accidentally hacked into his company's server",
  },
  {
    id: 2,
    image: musicImage6,
    tag: "pop",
    musicName: "Remedy",
    artist: "Adel",
    music_src: music2,
    description:
      "The beauty of the African sunset disguised the danger lurking nearby.She was too busy always talking about what she wanted to do to actually do any of it.People generally approve of dogs eating cat food but not cats eating dog food.The group quickly understood that toxic waste was the most effective barrier to use against the zombies.I want to buy a onesie… but know it won’t suit me.It's much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball.She wanted a pet platypus but ended up getting a duck and a ferret instead.",
  },
  {
    id: 3,
    image: Tiesto,
    tag: "ELEC",
    musicName: "Escape me",
    artist: "Teisto",
    music_src: music10,
    description:
      "The most exciting eureka moment 've had was when I realized that the instructions on food packets were just guidelines.Most shark attacks occur about 10 feet from the beach since that's where the people are.He wasn't bitter that she had moved on but from the radish.His ultimate dream fantasy consisted of being content and sleeping eight hours in a row.I would be delighted if the sea were full of cucumber juice.If I don’t like something, I’ll stay away from it.",
  },
  {
    id: 4,
    image: musicImage4,
    tag: "juzz",
    musicName: "Founded Love",
    artist: "Ed sheeran",
    music_src: music4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facerefugiat vel doloribus animi, ratione corrupti nam culpa obcaecatidebitis dolores accusamus labore, quas dolore illum odit veniamvoluptate. Sunt, iure. fugiat vel doloribus animi, rationecorrupti nam culpa obcaecati debitis dolores accusamus labore,",
  },
  {
    id: 5,
    image: Tiesto,
    tag: "ELEC",
    musicName: "I will be Here",
    artist: "Teisto",
    music_src: music12,
    description:
      "corrupti nam culpa obcaecati debitis dolores accusamus labore,quas dolore illum odit veniam voluptate. Sunt, iure. fugiat veldoloribus animi, ratione corrupti nam culpa obcaecati debitisdolores accusamus labore, quas dolore illum odit veniam voluptate.Sunt, iure. fugiat vel doloribus animi, ratione corrupti nam culpaobcaecati debitis.",
  },
  {
    id: 6,
    image: musicImage2,
    tag: "house",
    musicName: "On Repeat",
    artist: "vin jay",
    music_src: music6,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam asperiores facere ea nihil alias non itaque, veniam fugit quod voluptatem? Assumenda, quibusdam? ",
  },
  {
    id: 7,
    image: musicImage7,
    tag: "Rap",
    musicName: "Out of my mind",
    artist: "vin jay",
    music_src: music7,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ex cum! Ipsam, et? Sapiente provident eaque commodi sint ipsum eveniet.",
  },
  {
    id: 8,
    image: Tiesto,
    tag: "ELEC",
    musicName: "stay Here",
    artist: "Teisto",
    music_src: music8,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iste, aliquam magnam voluptatem cumque ratione eum eos impedit dolore minus?",
  },
  {
    id: 9,
    image: Tiesto,
    tag: "ELEC",
    musicName: "Techno",
    artist: "Teisto",
    music_src: music9,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, iure maxime autem dolorem quia perferendis. Tempora natus laboriosam iusto a.",
  },
  {
    id: 10,
    image: musicImage3,
    tag: "house",
    musicName: "Fairytale",
    artist: "Alexander Reybak ",
    music_src: music3,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum dolores, animi numquam fugiat, corporis ratione inventore sed consequatur, labore perspiciatis voluptatum dolorum earum.",
  },
  {
    id: 11,
    image: Tiesto,
    tag: "ELEC",
    musicName: "Techno",
    artist: "Teisto",
    music_src: music11,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam sunt soluta assumenda, exercitationem ipsa quam inventore sed nisi laborum saepe!",
  },
  {
    id: 12,
    image: musicImage1,
    tag: "pop",
    musicName: "Another Love",
    artist: "Tom odell",
    music_src: music5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aperiam repudiandae rem dolore dignissimos inventore iure magnam deleniti culpa nemo?",
  },
];

export const recent_artists = [
  {
    id: 1,
    image: recent_artist1,
  },
  {
    id: 2,
    image: recent_artist2,
  },
  {
    id: 3,
    image: recent_artist3,
  },
  {
    id: 4,
    image: recent_artist4,
  },
  {
    id: 5,
    image: recent_artist5,
  },
  {
    id: 6,
    image: recent_artist6,
  },
];

export const GENRES = [
  "Classic",
  "Techno",
  "House",
  "Hip-hop",
  "Chillout",
  "Manimal",
  "Blues",
  "Country",
  "Electronic",
];
