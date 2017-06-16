module.exports = {
  roleManager(role) {
    let option = [];
    switch (role) {
      case "admin":
        option = ["Home"]
        return option
        break;
    }
  }
};