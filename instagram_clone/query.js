const { User, UserFollower, sequelize } = require('./models')
const stringify = require('../utils')

const getUsersAndFollowers = async () => {
  try {
    const data = await User.findAll({
      include: [{
        model: User,
        as: 'followers',
        through: { attribues: [] }
      }]
    })
    stringify(data)
  } catch (error) {
    console.log(error)
  }
}

const getUserFollowing = async () => {
  try {
    const data = await User.findAll({
      include: [{
        model: User,
        as: 'following',
        through: { attribues: [] }
      }]
    })
    stringify(data)
  } catch (error) {
    console.log(error)
  }
}

async function main() {
  try {
    // await getUsersAndFollowers()
    await getUserFollowing()
  } catch (error) {
    console.log(error)
  } finally {
    sequelize.close()
  }
}

main()
