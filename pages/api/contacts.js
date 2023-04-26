import { MongoClient } from "mongodb";

async function contactHandler(req, res) {
  if (req.method === "POST") {
    const { email, userName, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      email.trim() === "" ||
      message.trim() === "" ||
      !message ||
      !userName ||
      userName.trim() === ""
    ) {
      res.status(422).json({ message: "invalid user input" });
      return;
    }
    const newMessage = {
      message: message,
      name: userName,
      email: email,
    };

    let client;
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.twm76d7.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      console.log(connectionString);
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Couldnot connect to database" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Sending message failed" });
    }

    client.close();
    res.status(201).json({ data: newMessage });
  }
}
export default contactHandler;
