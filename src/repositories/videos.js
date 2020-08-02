import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/videos`;
const create = (video) => fetch(`${URL_CATEGORIES}?_embed=videos`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(video),
}).then(async (resp) => {
  if (resp.ok) {
    const videos = await resp.json();
    return videos;
  }
  throw new Error('Não foi possível cadastrar videos');
});

export default {
 create,
};
