import { ClosetController } from "./controllers/closetController.js";

import { ClosetView } from "./view/closetView.js";

import { UserModel } from "./model/userModel.js";
import { RoleModel } from "./model/roleModel.js";
import { StyleModel } from "./model/styleModel.js";
import { ColorModel } from "./model/colorModel.js";
import { ClothesModel } from "./model/clothesModel.js";
import { ClosetModel } from "./model/closetModel.js"

window.onload = async function () {
    var view = new ClosetView();

    var userModel = new UserModel();
    var roleModel = new RoleModel();
    var styleModel = new StyleModel();
    var colorModel = new ColorModel();
    var clothesModel = new ClothesModel();
    var closetModel = new ClosetModel()


    var controller = new ClosetController(view, userModel, roleModel, styleModel, colorModel, clothesModel, closetModel);

    await controller.showMenu();
    controller.addEventListeners();
    controller.loadData();
}