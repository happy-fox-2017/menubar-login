
function checkRole(role) {
  let menu
  switch (role) {
    case "boss":
      menu = ["Edit Task", "Delete Task", "Create Task", "Email To manager"]
      return menu
      break;
    case "manager":
      menu = ["View Task", "Email To Boss"]
      return menu
      break
    default:
      console.log(`Your Role is undefined`);
      break

  }
}

module.exports = {checkRole}
