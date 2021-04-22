const express = require('express');
require('dotenv').config();
const port = 5000;

const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
// console.log(DB_NAME);
const ObjectId = require('mongodb').ObjectId;
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://Practice_Data:${DB_PASSWORD}@cluster0.fp4ts.mongodb.net/${DB_USER}?retryWrites=true&w=majority`;
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    const data = [
        {
            id: 1,
            name: "Mobile",
            img: "https://mb.com.ph/wp-content/uploads/subs/technology/uploads/2020/03/realme-5i.jpg",
            inventor: "Martin 'Marty' Cooper (born December 26, 1928) is an American engineer. He is a pioneer in the wireless communications industry",
            des: "A mobile phone (also known as a hand phone, cell phone, or cellular telephone) is a small portable radio telephone. The mobile phone can be used to communicate over long distances without wires. It works by communicating with a nearby base station (also called a 'mobile tower') which connects it to the main phone network. When moving, if the mobile phone gets too far away from the cell it is connected to, that cell sends a message to another cell to tell the new cell to take over the call. This is called a 'hand off', and the call continues with the new cell the phone is connected to."
        },
        {
            id: 2,
            name: "Laptop",
            img: "https://www.kindpng.com/picc/m/193-1936242_high-resolution-laptop-png-transparent-png.png",
            inventor: "The laptop was invented by Adam Osborne in 1981. It was called ''Osborne 1'' and cost $1,795. It came bundled with $1,500 worth of programmes.",
            des: "Early laptop displays were so primitive that PC Magazine in 1986 published an article discussing them with the headline 'Is It On Yet?'. It said of the accompanying montage of nine portable computers, 'Pictured at the right are two screens and seven elongated smudges'. The article stated that 'LCD screens still look to many observers like Etch-a-Sketch toys, or gray chalk on a dirty blackboard', and predicted that until displays improved, 'laptops will continue to be a niche rather than a mainstream direction'. As technology improved during the 1990s, the usefulness and popularity of laptops increased. "
        },
        {
            id: 3,
            name: "Car",
            img: "https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990__340.png",
            inventor: "The first working steam-powered vehicle was designed—and quite possibly built—by Ferdinand Verbiest, a Flemish member of a Jesuit mission in China around 1672.",
            des: "Cars came into global use during the 20th century, and developed economies depend on them. The year 1886 is regarded as the birth year of the modern car when German inventor Karl Benz patented his Benz Patent-Motorwagen. Cars became widely available in the early 20th century. One of the first cars accessible to the masses was the 1908 Model T, an American car manufactured by the Ford Motor Company."
        },
        {
            id: 4,
            name: "Telephone",
            img: "https://pngimg.com/uploads/phone/phone_PNG467.png",
            inventor: "Antonio Meucci, Alexander Graham Bell, and Elisha Gray amongst others, have all been credited with the telephone's invention",
            des: "Early telephones were technically diverse. Some of them used liquid transmitters which soon went out of use. Others were dynamic: their diaphragms vibrated a coil of wire in the field of a permanent magnet or vice versa. Such sound-powered telephones survived in small numbers through the 20th century in military and maritime applications where the ability to create its own electrical power was crucial. "
        },
        {
            id: 5,
            name: "Television",
            img: "https://freepngimg.com/thumb/technology/52684-7-led-television-download-hd-png.png",
            inventor: "John Logie Baird FRSE (13 August 1888 – 14 June 1946) was a Scottish inventor, electrical engineer",
            des: "Television (TV), sometimes shortened to tele or telly, is a telecommunication medium used for transmitting moving images in monochrome (black and white), or in color, and in two or three dimensions and sound. The term can refer to a television set, a television show, or the medium of television transmission. Television is a mass medium for advertising, entertainment, news, and sports."
        },
        {
            id: 6,
            name: "Refrigerator",
            img: "https://purepng.com/public/uploads/large/purepng.com-refrigeratorrefrigeratorfridgeiceboxrefrigeratoryfreezer-17015283688270hzmo.png",
            inventor: " Scottish professor William Cullen designed a small refrigerating machine in 1755",
            des: "A refrigerator maintains a temperature a few degrees above the freezing point of water. Optimum temperature range for perishable food storage is 3 to 5 °C (37 to 41 °F).[1] A similar device that maintains a temperature below the freezing point of water is called a freezer. The refrigerator replaced the icebox, which had been a common household appliance for almost a century and a half."
        }
    ]
    res.send(data);
})

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db(DB_NAME).collection("work1_data");
    console.log("Mongo Connected")
  // perform actions on the collection object
//   client.close();
});

app.listen(process.env.PORT || port)