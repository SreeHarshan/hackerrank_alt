const express = require('express')
const app = express()
const port = 3001

const cors = require('cors')
app.use(cors())

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://harshan:2qWouluUfy0AU0sX@cluster0.c1rpxhj.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to db");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

//run().catch(console.dir);

app.get("/register",async(req,res)=>{
    console.log("register");
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    const myDB = client.db("cred");
    const Col = myDB.collection("cred");
    const doc = { name: req.query.name, password: req.query.password };
    const result = await Col.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`,);
    await client.close();
    res.send({msg:"Successfully inserted",register:true});
})

app.get("/login",async(req,res)=>{
    console.log("login");
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    const myDB = client.db("cred");
    const Col = myDB.collection("cred");
    username  = req.query.name;
    password = req.query.password;
//    console.log(username);
    const cursor =  Col.find({"name": username});
//    const cursor = Col.find();
    const doc = await cursor.toArray();
    if(doc[0]["password"]===password){
        res.send({msg:"Successfully logged in",login:true});
    }
    else{
        res.send({msg:"Login failed",login:false});
    }
    await client.close();

    
})

app.get("/getcontest",async(req,res)=>{
        await client.connect();
    await client.db("admin").command({ ping: 1 });
    const myDB = client.db("cred");
    const Col = myDB.collection("cred");
    c_name  = req.query.c_name;
//    console.log(username);
    const cursor =  Col.find({"c_name": c_name});
//    const cursor = Col.find();
    const doc = await cursor.toArray();
    await client.close();

})

app.get("/addcontest",async(req,res)=>{
        await client.connect();
    await client.db("admin").command({ ping: 1 });
    const myDB = client.db("cred");
    const Col = myDB.collection("cred");
    c_name  = req.query.name;
    c_id = req.query.c_id;
    owner = req.query.owner;
//    console.log(username);
    const cursor =  Col.insertOne({"c_name": c_name,"c_id":c_id,"owner":owner});
//    const cursor = Col.find();
    const doc = await cursor.toArray();
    await client.close();

})



app.get("/join",async(req,res)=>{
        await client.connect();
    await client.db("admin").command({ ping: 1 });
    const myDB = client.db("cred");
    const Col = myDB.collection("cred");
    uname  = req.query.name;
    c_id = req.query.c_id;
    owner = req.query.owner;
//    console.log(username);
    const cursor =  Col.insertOne({"c_id":c_id,"name":uname});
//    const cursor = Col.find();
    const doc = await cursor.toArray();
    await client.close();

})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

