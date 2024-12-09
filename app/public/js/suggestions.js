import { suggestionsController } from "./controllers/suggestionsController.js";

import { suggestionsView } from "./view/suggestionsView.js";

import { UserModel } from "./model/userModel.js";
import { RoleModel } from "./model/roleModel.js";
import { CourseModel } from "./model/courseModel.js";
import { StyleModel } from "./model/styleModel.js";
import { ColorModel } from "./model/colorModel.js";
import { ClothesModel } from "./model/clothesModel.js";
import { PaletteModel } from "./model/paletteModel.js";
import { OutfitModel } from "./model/outfitModel.js";
import { InterestModel } from "./model/interestModel.js";
import { ClosetModel } from "./model/closetModel.js"

window.onload = async function () {
    var view = new suggestionsView();

    var userModel = new UserModel();
    var roleModel = new RoleModel();
    var courseModel = new CourseModel();
    var styleModel = new StyleModel();
    var colorModel = new ColorModel();
    var clothesModel = new ClothesModel();
    var paletteModel = new PaletteModel();
    var outfitModel = new OutfitModel();
    var interestModel = new InterestModel();
    var closetModel = new ClosetModel()


    var controller = new suggestionsController(view, userModel, roleModel, courseModel, styleModel, colorModel, clothesModel, paletteModel, outfitModel, interestModel, closetModel);

    await controller.showMenu();
    await controller.loadData();
    await controller.showData();
}