const {User} = require('../models/models');

class UserController {
    async createOrUpdateUser(req,res){
        const {name, surname} = req.body;
        const user = await User.create({name, surname});
        return res.json(user);
    }
    async getUsers(req,res){
        const users = await User.findAll();
        return res.json(users);
    }
    async getOneUser(req,res){
        const id = req.params.id;
        const user = await User.findAll({where: {id}});
        return res.json(user);
    }
    async updateUser(req,res){
        const {id, name, surname} = req.body;
        const user = await User.update(
            {
                name,
                surname
            },
            {
                where: {id}
            }
        )
        return res.json(user);
    }
    async deleteUser(req,res){
        const id = req.params.id;
        const user = await User.destroy({where: {id}});
        return res.json(user);
    }
}

module.exports = new UserController();