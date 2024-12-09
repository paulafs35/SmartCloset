import { IndividualCourseController } from "./controllers/individualCoursesController.js";

import { IndividualCourseView } from "./view/individualCourseView.js";

import { UserModel } from "./model/userModel.js";
import { RoleModel } from "./model/roleModel.js";
import { CourseModel } from "./model/courseModel.js";
import { LearnedModel } from "./model/learnedModel.js";

window.onload = async function () {
    var view = new IndividualCourseView();

    var userModel = new UserModel();
    var roleModel = new RoleModel();
    var courseModel = new CourseModel();
    var learnedModel = new LearnedModel();


    var controller = new IndividualCourseController(view, userModel, roleModel, courseModel, learnedModel);

    await controller.showMenu();
    await controller.loadData();
}