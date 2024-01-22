const connection = require('../db/connection');

const getData = async (req, res) => {
    db = await connection.getDb();
    data = db.db("w02_team").collection("professional").find();
    professionalArray = await data.toArray();
    res.send(professionalArray[0]);
};

module.exports = {
    getData
};

