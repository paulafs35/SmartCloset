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

const app = express();
app.use(express.json());
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


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.info(`Servidor en localhost: ${PORT}`);
});