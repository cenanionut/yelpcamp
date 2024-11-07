const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "6726bea2532ace0818dc6fa1",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: "https://res.cloudinary.com/dm9jttcje/image/upload/v1730677090/YelpCamp/nwbluhrz29sqz4jtmf2x.jpg",
          filename: "YelpCamp/nwbluhrz29sqz4jtmf2x",
        },
        {
          url: "https://res.cloudinary.com/dm9jttcje/image/upload/v1730677091/YelpCamp/nufbauoarduxwnwvm3dc.jpg",
          filename: "YelpCamp/nufbauoarduxwnwvm3dc",
        },
        {
          url: "https://res.cloudinary.com/dm9jttcje/image/upload/v1730677092/YelpCamp/drmvh9yn21hw2wkj9tpm.jpg",
          filename: "YelpCamp/drmvh9yn21hw2wkj9tpm",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!",
      price,
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
