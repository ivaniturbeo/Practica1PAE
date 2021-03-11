const MongoClient = require ('mongodb').MongoClient;

const dotenv = require('dotenv');

dotenv.config();
const url = process.env.MONGO_URL;

let db; 
let isConnecting;

class Database{
    collectionName;
    constructor(){ 
        if(isConnecting)return;
        isConnecting = true;
        MongoClient.connect(url, {useUnifiedTopology: true}, (err,client)=>{
            if(err){
                console.log(err);
                return;
            }

             db = client.db();
            console.log('Connected to MongoDB');
            
        });
        // setTimeout(()=>{
        //    console.log("database connection timeout", db);
        // },2000);    
    }

    useCollection(name){
        this.collectionName = name;
    }

    find(filters, cb){
        const collection = db.collection(this.collectionName); 
        return collection.find(filters).toArray(cb);
    }
    insert(obj_user){
        const collection = db.collection(this.collectionName); 
        return collection.insertOne(obj_user).then((result)=>{
            console.log('User successfully created');
        }).catch(err=>{
            console.log(err);
        })
    }
}

module.exports = Database;