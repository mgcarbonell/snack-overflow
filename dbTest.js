const db = require('./models')
const methodOverride = require('method-override')

<<<<<<< HEAD
//test out db comment create
//create a comment and associate it with logged in user

db.comment.findOrCreate({
  where: {
    text: "this is the GOAT snack",
    userId: 1,
    snackId: 2
  }
}).then(function([newComment]){
  console.log(newComment.text)
})










// router.use(methodOverride('_method'))

// create a user for us to use
// db.user.create({
//   name: "Susan Doolittle",
//   email: "heythere@aol.com",
//   password: "erjwklejr"
// }).then( function(createdUser) {
//   console.log(createdUser.dataValues)
//   console.log('Successfully created ' + createdUser.dataValues.firstName)
// })

// db.user.findOrCreate({
//   // constraint
//   where: {
//     id: 10
//   }
// }).then(function([returnedUser, created]) {
//   // Second step: findOrCreate a snack to associate with Susan
//   const snack = req.params.id
//   console.log(snack)
//   db.snack.destroy({
// }).then(function() {
//   // Last Step: associating the user to the snack - addSnack()
//   // addSnack() is a method generated by Sequelize that uses the name of the model
//   returnedUser.addSnack(returnedSnack).then( function(relationInfo) {
//     console.log(relationInfo)
//     console.log('-----------------------------')
//       console.log(`${returnedSnack.name} added to ${returnedUser.name}`)
//     })
  // })
// })

// db.user.findOrCreate({
//   where: {
//     name: "Martin",
//     email: "martin@gmail.com"
//   }
// }).then(([returnedUser, created]) => {
//   db.snack.findAll({
//     where: {name}
//   })
// })

=======
>>>>>>> submain
db.comment.create({
  userId: 1,
  content: "This is the best snack"
}).then(function(comment){
  console.log(comment.get())
}).catch((error)=>{
  console.log(error)
})