import { UserFormView } from "./view/userFormView.js"

import { UserModel } from "./model/userModel.js"
import { StyleModel } from "./model/styleModel.js"
import { RoleModel } from "./model/roleModel.js"
import { InterestModel } from "./model/interestModel.js"

import { userFormController } from "./controllers/userFormController.js"


window.onload = function (){
    var userModel = new UserModel()
    var styleModel = new StyleModel()
    var roleModel = new RoleModel()
    var interestModel = new InterestModel()

    var view = new UserFormView()

    var controller = new userFormController(view, userModel, styleModel, roleModel, interestModel)

    controller.addEventListeners()
    controller.setForNewOrUpdate()

    controller.showStyles()
}






