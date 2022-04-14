'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class UserFollower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   UserFollower.belongsToMany(models.UserFollower, {
      //     as: 'following',
      //     through: models.User,
      //     foreignKey: 'followerId'
      //   }),
      //     UserFollower.belongsToMany(models.UserFollower, {
      //       as: 'followers',
      //       through: models.User,
      //       foreignKey: 'userId'
      //     })
    }
  }
  UserFollower.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      followerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'UserFollower',
      tableName: 'user_followers'
    }
  )
  return UserFollower
}
