const users = []
const bcrypt = require('bcryptjs')

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      const salt = bcrypt.genSaltSync(5)
      let hashedPass = bcrypt.hashSync(password,salt)
      console.log(hashedPass)
      for (let i = 0; i < users.length; i++) {
        if(users[i].username === username && bcrypt.compareSync(password, users[i].password)){
          usersToReturn = (users[i])
          delete usersToReturn.passwordhash
          res.status(200).send(users[i])
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        const salt = bcrypt.genSaltSync(5)
        const passHash = bcrypt.hashSync(req.body.password, salt)
        req.body.password = passHash
        console.log(req.body)
        users.push(req.body)
        res.status(200).send(req.body)
    }
}