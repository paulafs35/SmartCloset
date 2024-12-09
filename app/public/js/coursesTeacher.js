import { coursesTeacherController } from "./controllers/coursesTeacherController.js";

import { coursesTeacherView } from "./view/coursesTeacherView.js";

import { UserModel } from "./model/userModel.js";
import { RoleModel } from "./model/roleModel.js";
import { CourseModel } from "./model/courseModel.js";
import { StyleModel } from "./model/styleModel.js";

window.onload = async function() {
    var view = new coursesTeacherView();

    var userModel = new UserModel();
    var roleModel = new RoleModel();
    var courseModel = new CourseModel();
    var styleModel = new StyleModel();


    var controller = new coursesTeacherController(view, userModel, roleModel, courseModel, styleModel);

    await controller.showMenu();
    await controller.showTableData();
    controller.addEventListeners()
}