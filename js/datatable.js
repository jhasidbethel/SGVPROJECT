// funcionalidad a la tabla de producto //

let rIndex,table = document.getElementById("table");

// check the empty input

function checkEmptyInput() {
  let vacio = false,
  Nombre = document.getElementById("Nombre").value,
  Codigo = document.getElementById("Codigo").value,
  Descripcion = document.getElementById("Descripcion").value;
  Categoria = document.getElementById("Categoria").value;
  Almacen = document.getElementById("Almacen").value;
  
  if(Nombre === ""){
    alert("Por favor llene el campo de nombre");
    vacio = true;
  }
  else if(Codigo === ""){
    alert("Por favor llene el campo de codigo");
    vacio = true;
  }
  else if(Descripcion === ""){
    alert("Porfavor llene el campo de descripcion");
    vacio = true;
  }
  else if(Categoria === ""){
    alert("Por favor llene el campo de categoria");
    vacio = true;
  }
  else if(Almacen === ""){
    alert("Por favor llene el campo de almacen");
    vacio = true;
  }
  return vacio;
}

// add Row

function addHtmlTableRow() {
  
  // get the table by id
  // create a new row and cells
  // get value from input text
  // set the values into row cell's
  if(!checkEmptyInput()){
    let newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    cell5 = newRow.insertCell(4),
    
    Nombre = document.getElementById("Nombre").value,
    Codigo = document.getElementById("Codigo").value,
    Descripcion = document.getElementById("Descripcion").value,
    Categoria = document.getElementById("Categoria").value, 
    Almacen = document.getElementById("Almacen").value;
    
    cell1.innerHTML = Nombre;
    cell2.innerHTML = Codigo;
    cell3.innerHTML = Descripcion;
    cell4.innerHTML = Categoria;
    cell5.innerHTML = Almacen;
    // call the function to set the event to the new row
    
    selectedRowToInput();}
  
  }
  
  function selectedRowToInput() {
    
    for(let i = 1; i < table.rows.length; i++)
    {
      table.rows[i].onclick = function() {
        rIndex = this.rowIndex;
        document.getElementById("Nombre").value = this.cells[0].innerHTML;
        document.getElementById("Codigo").value = this.cells[1].innerHTML;
        document.getElementById("Descripcion").value = this.cells[2].innerHTML;
        document.getElementById("Categoria").value = this.cells[2].innerHTML;
        document.getElementById("Almacen").value = this.cells[2].innerHTML;
      
      };
    }
  }
  
  selectedRowToInput();
  
  function editHtmlTbleSelectedRow() {
    let Nombre = document.getElementById("Nombre").value,
    Codigo = document.getElementById("Codigo").value,
    Descripcion = document.getElementById("Descripcion").value,
    Categoria = document.getElementById("Categoria").value,
    Almacen = document.getElementById("Almacen").value;
    if(!checkEmptyInput()){
      table.rows[rIndex].cells[0].innerHTML = Nombre;
      table.rows[rIndex].cells[1].innerHTML = Codigo;
      table.rows[rIndex].cells[2].innerHTML = Descripcion;
      table.rows[rIndex].cells[3].innerHTML = Categoria;
      table.rows[rIndex].cells[4].innerHTML = Almacen;
    }
  }
  
  function removeSelectedRow() {
    table.deleteRow(rIndex);
    
    document.getElementById("Nombre").value = "";
    document.getElementById("Codigo").value = "";
    document.getElementById("Descripcion").value = "";
    document.getElementById("Categoria").value = "";
    document.getElementById("Almacen").value = "";
  }

