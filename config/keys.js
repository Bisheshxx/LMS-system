// module.exports = {
//   //mongoURI: "mongodb://spectre:spectre007@ds253537.mlab.com:53537/elearning", //apurva's
//   // mongodb+srv://<username>:<password>@cluster0.ps0ve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//   mongoURI: 'mongodb+srv://admin:admin@cluster0-xb8vd.gcp.mongodb.net/E-learning?retryWrites=true&w=majority',
//   secretOrKey: "secret"
// };
const mongoose = require("mongoose");
//connecting the db in mongo atlas
mongoose.connect('mongodb+srv://admin-sakriya:khadka123@cluster0.kgbux.mongodb.net/covid',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})  