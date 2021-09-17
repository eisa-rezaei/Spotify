const url = "https://api.github.com/repos/facebook/react";

const getUserInfo = async () => {
  const user = await fetch(url);
  const res = await user.json();
  return res;
};

export default getUserInfo;
