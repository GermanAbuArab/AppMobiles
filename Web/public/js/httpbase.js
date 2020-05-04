
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Gabuarab:german118431@appmobilesej1-lirw3.gcp.mongodb.net/test?retryWrites=true&w=majority";
const personas = async () => {
        const client = await MongoClient.connect(url,{useUnifiedTopology:true});
        try {
           const coleccionPersonas = await client
            .db("ApplicacionesMobilesEj1")
            .collection("Personas")
            .find({}, {projection: {_id: 0}})
            .toArray();
        return coleccionPersonas;}
        catch (e) {
            throw e;
        }
        finally {
            client.close();
        }
};



module.exports = {personas};