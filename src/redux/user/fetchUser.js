const url = "https://api.github.com/repos/facebook/react";

const getUserInfo = async () => {
  try {
    const user = await fetch(url);
    const res = await user.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default getUserInfo;
