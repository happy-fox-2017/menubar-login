helpers = {
  pembagian : function pembagian(role){
      switch (role) {
        case "Admin":
          let htmlAdmin = `<li><a href="sass.html">Dokter</a></li>
          <li><a href="badges.html">Patient</a></li>
          <li><a href="collapsible.html">Employee</a></li>`
          return htmlAdmin
          break;
        case "Dokter" :
          let htmlEmployee = `<li><a href="collapsible.html">Dokter</a></li>`
          return htmlEmployee
        case "Patient" :
          let htmlPatient = `<li><a href="badges.html">Patient</a></li>`
          return htmlPatient
        default:
          break;
      }
  }
}