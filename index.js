require('dotenv').config();
const express = require("express");
var bodyParser = require('body-parser')
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();
app.use(cors({
    origin: ["*", "http://localhost:3000"]
}))
app.use(bodyParser.json());
const PORT = 3000;

mongoose.connect(process.env.MONGOOSE_URL, { useNewUrlParser: true })
    .then(() => { console.log("Database is Connected") })
    .catch((err) => { console.log("Database is not Connected ", err) })


//Home Page
app.get("/", (res) => res.send("Server is ON"))
//Admin Router
const adminRouter = require("./routes/adminRoutes")
app.use("/admin", adminRouter)

//Customer Router
const vendorRouter = require("./routes/vendorRoutes")
app.use("/vendor", vendorRouter)

//Product Router
const productRouter = require("./routes/productRoutes")
app.use("/product", productRouter)

//Category Router
const categoryRouter = require("./routes/categoryRoutes")
app.use("/category", categoryRouter)


app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server is Live on " + PORT)
    } else {
        console.log("Server is facing error", error)

    }
})
