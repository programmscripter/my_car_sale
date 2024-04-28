import instance from "../../API/config";

export const CreateNewUser = (user) => {
   return instance.post('/api/users/create-new-user', {
      _age: user._age,
      _name: user._name,
      _email: user._email,
      _gender: user.gender, 
      _surname: user.surname,
      _password: user.passwrod
   })
}