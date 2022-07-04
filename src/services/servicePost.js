const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { Category, BlogPost, PostCategory, User } = require('../database/models');

const sequelize = new Sequelize(config.development);

const createPost = async (title, content, categoryIds, id) => {
  const categories = await Category.findAll({ where: { id: categoryIds } });
  if (categories.length === 0) return undefined;
  
  const transact = await sequelize.transaction(async (t) => {
    const newPost = await BlogPost.create({
      title,
      content,
      userId: id,
    }, { transaction: t });

    const postCategories = categoryIds.map((categoryId) => ({ postId: newPost.id, categoryId }));

    await PostCategory.bulkCreate(postCategories, { transaction: t });

    return newPost;
  });
  
  return transact;
};

const findPost = async (email) => {
  const userInfo = await User.findOne({ where: { email } });
  return userInfo;
};

const getAll = async () => {
  const post = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: 'password' },
    },
    { model: Category, as: 'categories' },
  ],
  });
  return post;
};

const getById = async (id) => {
  const postById = await BlogPost.findByPk(id, {
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: 'password' },
    },
    { model: Category, as: 'categories' },
    ],
  });
  if (!postById) return undefined;
  return postById;
};

const updateById = async (title, content, id, userId) => {
  await BlogPost.update({ title, content }, { where: { id } });
  const updatedPost = await getById(id);

  if (userId !== updatedPost.user.id) return undefined;
  return updatedPost;
};

const deletePost = async (id, userId) => {
  const post = await getById(id);
  if (userId !== post.user.id) {
    return undefined;
  }
  await BlogPost.delete({ where: { id } });
};

module.exports = {
  createPost,
  findPost,
  getAll,
  getById,
  updateById,
  deletePost,
};