const introducirVacuna = async () => {
  const respuesta = await.inquirer.prompt([
    {
      name:"",
      type: "list",
      message: "Introducir Vacunas"
    },

    {
      name:"",
      type: "list",
      message: "Introducir personas vacunadas"
    }
  ])
}
