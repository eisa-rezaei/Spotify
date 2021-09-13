const getMusic = (store) => store.music.currentMusic;

const isItemInList = (id) => (store) => {
  return store.currentMusic.currentMusic.some((item) => item.id === id);
};

const selectros = {
  isItemInList,
  getMusic,
};

export default selectros;
