export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=5X3CxEw43YsjbuLWSinR3aZdtBNYZuK3&q=${category}&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifts = data.map((img) => ({
    img: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifts);
  return gifts;
};
