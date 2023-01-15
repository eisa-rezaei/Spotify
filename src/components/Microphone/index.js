import React from "react";
import Layout from "../Layout";
import { StMicrophoneContainer } from "./styles";
import music  from "../../musics/Adele_2.mp3"
import { SpectrumVisualizer, SpectrumVisualizerTheme } from 'react-audio-visualizers';


const Microphone = () => {
  return (
    <Layout>
      <StMicrophoneContainer>
      <SpectrumVisualizer
        audio={music}
        theme={SpectrumVisualizerTheme.roundBars}
        colors={['#009688', '#26a69a']}
        iconsColor="#26a69a"
        backgroundColor="white"
        showMainActionIcon
        showLoaderIcon
        highFrequency={8000}
    />
      </StMicrophoneContainer>
    </Layout>
  );
};

export default Microphone;
