//if deployed, use the deployed databse otherwide use the local monoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongo://localhost/mongoHealines";

//connect to the Mongo DB
mongoose.connect(MONGODB_URI);