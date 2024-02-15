const bcrypt = require("bcryptjs")

const users = []

module.exports = {
  login: (req, res) => {
    console.log('Logging In User');
    const { username, password } = req.body;
    let userFound = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            userFound = true; // Mark that we found a user
            const checkPass = bcrypt.compareSync(password, users[i].passwordHashed);

            if (checkPass) {
                // Passwords match
                const userToReturn = {...users[i]};
                delete userToReturn.passwordHashed; // Remove hashed password for security

                console.log("User logged in", userToReturn);
                res.status(200).send(userToReturn);
                return; // Exit the function early
            } else {
                // Passwords do not match
                return res.status(400).send("Incorrect password");
            }
        }
    }
  
    if (!userFound) {
        // If we complete the loop and find no user
        res.status(400).send("User not found.");
    }
},






    register: (req, res) => {
        // we destructure the user and pass from req.body
        console.log('Registering User')
        const {username, password, email, firstName, lastName} = req.body;


        //here we set the salt library and hash the password
        let salt = bcrypt.genSaltSync(5)
        const passwordHashed = bcrypt.hashSync(password, salt); 

        //create a new user object with the hashed pass
        // holds the new info
        const newUser = {
          username,
          passwordHashed,
          email,
          firstName,
          lastName
        };

        // add this new user who is signing up to array of users
        users.push(newUser);


        const userToReturn = {...newUser};
        delete userToReturn.passwordHashed;
        // check to see what userToReturn is lol
        console.log('User Registered', userToReturn);
        res.status(200).send(userToReturn)

        




        // console.log(req.body)
        // users.push(req.body)
        // res.status(200).send(req.body)
    }
}