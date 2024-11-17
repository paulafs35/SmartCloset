import { adminTableController } from "./controllers/adminTableController.js";

import { adminTableView } from "./view/adminTableView.js";

import { UserModel } from "./model/userModel.js";
import { CourseModel } from "./model/courseModel.js";
import { StyleModel } from "./model/styleModel.js";
import { ColorModel } from "./model/colorModel.js";
import { ClothesModel } from "./model/clothesModel.js";

window.onload = function() {
    var view = new adminTableView()

    var userModel = new UserModel
    var courseModel = new CourseModel()
    var styleModel = new StyleModel()
    var colorModel = new ColorModel()
    var clothesModel = new ClothesModel()


    var controller = new adminTableController(view, userModel, courseModel, styleModel, colorModel, clothesModel)

    controller.showMenu()
    controller.showTableData()
}