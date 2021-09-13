import musicImage1 from "./../assets/music-pic/1.png";
import musicImage2 from "./../assets/music-pic/2.png";
import musicImage3 from "./../assets/music-pic/3.jpg";
import musicImage4 from "./../assets/music-pic/4.png";
import musicImage5 from "./../assets/music-pic/5.jpg";
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
    image: musicImage1,
    tag: "house",
    musicName: "Some tea",
    artist: "jesus",
    music_src: music1,
  },
  {
    id: 2,
    image: musicImage2,
    tag: "club house",
    musicName: "Some where",
    artist: "jesus_2",
    music_src: music2,
  },
  {
    id: 3,
    image: Tiesto,
    tag: "ELEC",
    musicName: "Escape me",
    artist: "Teisto",
    music_src: music10,
  },
  {
    id: 4,
    image: musicImage4,
    tag: "juzz",
    musicName: "Some body",
    artist: "Asghar",
    music_src: music4,
  },
  {
    id: 5,
    image: Tiesto,
    tag: "ELEC",
    musicName: "I will be Here",
    artist: "Teisto",
    music_src: music12,
  },
  {
    id: 6,
    image: musicImage6,
    tag: "house",
    musicName: "Some one",
    artist: "vin jay",
    music_src: music6,
  },
  {
    id: 7,
    image: musicImage7,
    tag: "Rock and Roll",
    musicName: "Some How",
    artist: "Eisa",
    music_src: music7,
  },
  {
    id: 8,
    image: Tiesto,
    tag: "ELEC",
    musicName: "stay Here",
    artist: "Teisto",
    music_src: music8,
  },
  {
    id: 9,
    image: Tiesto,
    tag: "ELEC",
    musicName: "I",
    artist: "Teisto",
    music_src: music9,
  },
  {
    id: 10,
    image: musicImage3,
    tag: "house",
    musicName: "Some thing",
    artist: "jesus_3",
    music_src: music3,
  },
  {
    id: 11,
    image: Tiesto,
    tag: "ELEC",
    musicName: "Techno",
    artist: "Teisto",
    music_src: music11,
  },
  {
    id: 12,
    image: musicImage5,
    tag: "pop",
    musicName: "Some time",
    artist: "Akbar",
    music_src: music5,
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
