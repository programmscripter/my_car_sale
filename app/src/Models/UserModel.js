class User {
    _age;
    _name;
    _email;
    _gender;
    _surname;
    _password;

    constructor(props){
       this._age = props.age;
       this._name = props.name;
       this._email = props.email;
       this._gender = props.gender;
       this._surname = props.surname;
       this._password = props.password
    }

    async CreateNewUser() {
       try {
          
       } catch(err) {
         console.log(err)
       }
    }
}