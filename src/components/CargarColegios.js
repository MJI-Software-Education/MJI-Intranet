import React, { useState } from "react";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
import { dispatchNewColegio } from "../controllers/colegio";

class CargarColegios extends React.Component {
  constructor(props) {
    
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      file: "",
    };
  }

  handleClick(e) {
    this.refs.fileUploader.click();
  }

  filePathset(e) {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    console.log(file);
    this.setState({ file });

    console.log(this.state.file);
  }

  readFile(e) {
      e.preventDefault();
    var f = this.state.file;
    var name = f.name;
    const reader = new FileReader();
    reader.onload = (evt) => {
      // evt = on_file_select event
      /* Parse data */
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      /* Update state */
    //   console.log("Data>>>" + data);// shows that excel data is read
    //   console.log(this.convertToJson(data)); // shows data in json format
    this.convertToJson(data)    
};
    reader.readAsBinaryString(f);
  }

  convertToJson(csv) {
    var lines = csv.split("\n");

    var result = [];

    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }
    (()=>{
        result.map(r=>{
            this.props.dispatch(dispatchNewColegio(r.idColegio,r.rbd,r.nombre,r.direccion,r.sostenedor,r.tipo)).then(resp=>console.log(r.nombre));
        })
    })();
    // console.log(JSON.stringify(result))

    
    
        // this.props.dispatch(dispatchNewColegio()); 

            
    // return JSON.stringify(result); 
  }

  render() {
    return (
        <div className="addDocentes">
  
      <div className="file-select pointer" id="src-file2">
        <input
         className="pointer"
          type="file"
          id="file"
          ref="fileUploader"
          placeholder="Seleccione archivo"
          onChange={this.filePathset.bind(this)}
        />
        </div>
        <button
          onClick={(e) => {
            this.readFile(e);
          }}
        >
          Cargar colegios
        </button>
      </div>
    );
  }
}

export default CargarColegios;