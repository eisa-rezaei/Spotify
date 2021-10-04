import React, { useMemo } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useHistory, useParams } from "react-router-dom";
import { musics } from "../../data/data";
import Layout from "../Layout";
import SingleMusic from "./components/SingleMusic";
import {
  StAlbumArtist,
  StAlbumArtistInfo,
  StAlbumArtistInfoFollowPart,
  StAlbumArtistMusicsContainer,
  StAlbumContainer,
  StAlbumHeader,
} from "./styles";

const Album = React.memo(() => {
  const { id } = useParams();
  const History = useHistory();
  const currentSinger = musics?.filter((music) => music.id === parseInt(id))[0];
  const selectedSigner = musics?.filter(
    (music) => music.artist === currentSinger.artist
  );

  const followers = useMemo(() => {
    return Math.floor(Math.random() * 100) + "k";
  }, []);
  return (
    <Layout>
      <StAlbumContainer>
        <StAlbumHeader>
          <RiArrowLeftSLine onClick={History.goBack} />
          NowPlaying
          <span>Followed</span>
        </StAlbumHeader>
        <StAlbumArtist>
          <img src={currentSinger.image} alt={currentSinger.artist} />
          <StAlbumArtistInfo>
            {currentSinger.artist}
            <StAlbumArtistInfoFollowPart>
              <span>
                {selectedSigner.length}
                <p>Albums:</p>
              </span>
              <HiOutlineDotsVertical />
              <span>
                {followers}
                <p>Followers </p>
              </span>
            </StAlbumArtistInfoFollowPart>
          </StAlbumArtistInfo>
        </StAlbumArtist>
        <StAlbumArtistMusicsContainer>
          {selectedSigner.map((music, index) => (
            <SingleMusic key={index} {...music} index={index} />
          ))}
        </StAlbumArtistMusicsContainer>
      </StAlbumContainer>
    </Layout>
  );
});

export default Album;
