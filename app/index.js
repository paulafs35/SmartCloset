const express = require("express");

const homeRoutes = require('./routes/homeRoutes');
const adminRoutes = require('./routes/adminRoutes');
const teacherRoutes = require('./routes/teacherRoutes');

const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const styleRoutes = require('./routes/styleRoutes');
const colorRoutes = require('./routes/colorRoutes');
const clothesRoutes = require('./routes/clothesRoutes');
const roleRoutes = require('./routes/roleRoutes');
const interestRoutes = require('./routes/interestRoutes');
const paletteRoutes = require('./routes/paletteRoutes');
const outfitRoutes = require('./routes/outfitRoutes');

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static("public"));

app.use("/", homeRoutes);
app.use("/admin", adminRoutes);
app.use("/teacher", teacherRoutes);

app.use("/user", userRoutes);
app.use("/course", courseRoutes);
app.use("/style", styleRoutes);
app.use("/color", colorRoutes);
app.use("/role", roleRoutes);
app.use("/clothes", clothesRoutes);

app.use("/interest", interestRoutes);
app.use("/palette", paletteRoutes);
app.use("/outfit", outfitRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.info(`Servidor en localhost: ${PORT}`);
});