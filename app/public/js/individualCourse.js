import { IndividualCourseController } from "./controllers/individualCourseController.js";

import { IndividualCourseView } from "./view/individualCourseView.js";

import { UserModel } from "./model/userModel.js";
import { RoleModel } from "./model/roleModel.js";
import { CourseModel } from "./model/courseModel.js";
import { StyleModel } from "./model/styleModel.js";

window.onload = async function () {
    var view = new IndividualCourseView();

    var userModel = new UserModel();
    var roleModel = new RoleModel();
    var courseModel = new CourseModel();
    var styleModel = new StyleModel();


    var controller = new IndividualCourseController(view, userModel, roleModel, courseModel, styleModel);

    await controller.showMenu();
    await controller.loadData();
}