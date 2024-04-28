import { UserModel } from '../Models/UserModel.js'

export default {
   createNewUser: async (req, res) => {
      try {
         const { _age, _name, _surname, _gender, _email, _password } = req.body;

         const user = await UserModel({
            age: _age,
            name: _name,
            surname: _surname,
            gender: _gender,
            email: _email,
            password: _password
         })

         user.save();

         return res.status(200).json("Success!");

      } catch (err) {

         return res.status(500).json('Server Error');

      }
   }
}