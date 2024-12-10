const express = require("express");
const session = require("express-session");
const MySQLStore = require('express-mysql-session')(session);
const db = require('./config/db')

const homeRoutes = require('./routes/homeRoutes');
const adminRoutes = require('./routes/adminRoutes');
const clientRoutes = require('./routes/clientRoutes');

const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const styleRoutes = require('./routes/styleRoutes');
const colorRoutes = require('./routes/colorRoutes');
const clothesRoutes = require('./routes/clothesRoutes');
const roleRoutes = require('./routes/roleRoutes');
const interestRoutes = require('./routes/interestRoutes');
const paletteRoutes = require('./routes/paletteRoutes');
const outfitRoutes = require('./routes/outfitRoutes');
const closetRoutes = require('./routes/closetRoutes');
const learnedRoutes = require('./routes/learnedRoutes');

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false}));
app.use(express.static("public"));

const sessionStore = new MySQLStore(db.optConnection);

app.use(session({
    secret: 'secret',
    store: sessionStore,
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 8 * 60 * 60 * 1000, 
    },
}))

app.use("/", homeRoutes);
app.use("/admin", adminRoutes);
app.use("/client", clientRoutes);

app.use("/user", userRoutes);
app.use("/course", courseRoutes);
app.use("/style", styleRoutes);
app.use("/color", colorRoutes);
app.use("/role", roleRoutes);
app.use("/clothes", clothesRoutes);

app.use("/interest", interestRoutes);
app.use("/palette", paletteRoutes);
app.use("/outfit", outfitRoutes);
app.use("/closet", closetRoutes);
app.use("/learned", learnedRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.info(`Servidor en localhost: ${PORT}`);
});