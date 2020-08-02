import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;

const getAll = () => fetch(URL_CATEGORIES).then(async (resp) => {
  if (resp.ok) {
    const categories = await resp.json();
    return categories;
  }
  throw new Error('Não foi possível pegar os dados');
});
const getAllCategoriesWithVideos = () => fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (resp) => {
  if (resp.ok) {
    const categoriesWithVideos = await resp.json();
    return categoriesWithVideos;
  }
  throw new Error('Não foi possível pegar os dados');
});

const create = (category) => fetch(`${URL_CATEGORIES}`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(category),
}).then(async (resp) => {
  if (resp.ok) {
    const categories = await resp.json();
    return categories;
  }
  throw new Error('Não foi possível cadastrar a categoria');
});

const update = (category) => fetch(`${URL_CATEGORIES}/${category.id}`, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(category),
}).then(async (resp) => {
  if (resp.ok) {
    const categories = await resp.json();
    return categories;
  }
  throw new Error('Não foi possível cadastrar a categoria');
});
export default {
  getAllCategoriesWithVideos,
  getAll,
  create,
  update,
};
