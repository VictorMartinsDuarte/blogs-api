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

module.exports = {
  createPost,
  findPost,
};