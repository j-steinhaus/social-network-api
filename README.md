# Social Network API

# User Story
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

# Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

# Installation
After cloning or downloading a local copy of the repository, from a terminal install the required dependencies that are listed in the package.json file:

npm install
Once the node_modules folder is created and all dependencies are downloaded, type the following in your terminal:

npm start
The start command effectively stands in for running "node index.js" as shown in the "scripts" property in the package.json file you download.
