let {db} = require('./app');

class UserData {
    constructor(username,password,email,db){
        this.db = db;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    toJSON() {
        return {
            "username": this.username,
            "email": this.email,
            "password": this.password
        }
    }


    async getUserRef() {
        let ref = await this.db.collection("Users").doc(this.username);
        return ref;
    }

    async getUser(){
        let ref = await this.db.collection("Users").doc(this.username).get();
        return ref;
    }
}

class NewUser extends UserData {
    constructor(username,password,email,db) {
        super(username,password,email,db)
    }

    toJSON() {
        return super.toJSON()
    }

    signUpUser() {
        let collectionRef = this.db.collection("Users");
        let ref = collectionRef.doc(this.username);
        ref.set(super.toJSON());
    }

    getUser() {
        this.signUpUser();
        super.getUser();
    }

}

class ExistingUser extends UserData {
    constructor(username,password,email,db) {
        super(username,password,email,db);
        this.isLoggedIn = false;
    }
    toJSON() {
        return super.toJSON()
    }

    async loginUser() {
        console.log("Logging in")
        if(this.isLoggedIn){
            return formatDBReturn({"status" : "User logged in already"});
        }
        let collectionRef = this.db.collection("Users");
        let user = await collectionRef.doc(this.username).get();
        if(user.exists){
            if(user.username == this.username && user.password == this.password && user.email == this.email){
                this.isLoggedIn = true;
                return formatDBReturn({"status" : "passed"})
            }
            else{
                return formatDBReturn({"status" : "passed"})
            }
        }
        else{
            return formatDBReturn({"status" : "User doesn't exist"});
        }
    }

    async getUser() {
        return await super.getUser();
    }
}


function formatDBReturn(data){
    return {
        "results" : data
    }
}

module.exports = {NewUser,ExistingUser,formatDBReturn}