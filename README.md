<h3 align="center">
🦖 a web application for dinosaur 🦕 lovers
</h3>

![Screenshot 2023-08-18 at 4 11 10 PM](https://github.com/WorkForPerfection/DinoHub/assets/52626825/10ccdbe7-52a1-444a-bd65-29e5eb80e75e)


### Installation ###
* To run the app, first clone this repository to your local machine
* Then go into the repository and install the packages with the followin command lines:
```
npm install react
npm install react-bootstrap bootstrap
npm install axios
npm install node    #backend
npm install cors    #backend for altering CORS policy
npm install express #backend
npm install cron    #backend for generating daily dinos  
```

### Running the app ###
* Now, go into the server folder with `cd server` and start it with `node server.js`
* Then, open a *separate* command line at the root of the project and `cd client` then use `npm start` to start the front-end
* It's that simple! Now your app will be hosted at localhost:3000, and you can enjoy many things the DinoHub has to offer!
<br/>

*Database requires local setup*

*If using xampp on mac and mysql database won't start, use the following command: 

sudo /Applications/XAMPP/xamppfiles/bin/mysql.server start
