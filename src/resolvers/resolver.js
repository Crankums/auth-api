const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')
const models = require('../models')
require('dotenv').config()

const resolvers = {
    Query: {
        async me(_, args, { user }) {
            if(!user) throw new Error("You are not authenticated")
            return await models.User.findBYPk(user.id)
        },
        async user(root, { id }, { user }) {
            try {
                if(!user) throw new Error("You are not authenticated")
                return models.User.findBYPk(id)
            } catch (error) {
                throw new Error(error.message)
            }
        },
        async allUsers(root, args, { user }) {
            try {
                if (!user) throw new Error("You are not authenticated")
                return models.User.findall()
            } catch (error) {
                throw new Error(error.message)
            }
        }
    }
    
}