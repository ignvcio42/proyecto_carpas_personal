// mongodb.js

import { MongoClient } from "mongodb";

const uri = "mongodb+srv://nvcho:nicolas42@cluster0.nonsip0.mongodb.net/carpas_personal?retryWrites=true&w=majority";
const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true
};

let client;
let clientPromise;

if (!uri) {
	throw new Error("Add Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri, options);
		global._mongoClientPromise = client.connect();
	}

	clientPromise = global._mongoClientPromise;
} else {
	client = new MongoClient(uri, options);
	clientPromise = client.connect();
}

export default clientPromise;
