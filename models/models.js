const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false}
});
const Post = sequelize.define('post',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    content: {type: DataTypes.STRING, allowNull: false}
});

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
    User,
    Post
};