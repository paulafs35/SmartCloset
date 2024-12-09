import { CoursesController } from "./controllers/coursesController.js";

import { CoursesView } from "./view/coursesView.js";

import { UserModel } from "./model/userModel.js";
import { RoleModel } from "./model/roleModel.js";
import { CourseModel } from "./model/courseModel.js";
import { StyleModel } from "./model/styleModel.js";

window.onload = async function () {
    var view = new CoursesView();

    var userModel = new UserModel();
    var roleModel = new RoleModel();
    var courseModel = new CourseModel();
    var styleModel = new StyleModel();


    var controller = new CoursesController(view, userModel, roleModel, courseModel, styleModel);

    await controller.showMenu();
    await controller.loadData();
    await controller.showData();
}