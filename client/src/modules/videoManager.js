
const baseUrl = '/api/video';

export const getAllVideos = () => {
  return fetch(`${baseUrl}/GetWithComments`)
    .then((res) => res.json())
};

export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};

export const searchVideos = (searchTerm, sortOption) => {
    return fetch(`${baseUrl}/search?q=${searchTerm}&sortDesc=${sortOption}`)
    .then((res) => res.json())
};