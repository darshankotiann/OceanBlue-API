const jwt = require("jsonwebtoken");
const vendorAuth = async (req, res, next) => {
    try {
        let token = req?.headers?.authorization?.split(" ")[1];
        const data = await jwt.verify(token, process.env.SECRET_KEY);
        if (data && data.role == "vendor") {
            const vendorid = {
                _id: data._id
            }
            req["vendor"] = vendorid
            next();
        } else {
            return res.json({ error: true, message: "Unauthorized access" });
        }

    } catch (err) {
        return res.status(500).json({ error: true, message: err.message })
    }
}
module.exports = vendorAuth 