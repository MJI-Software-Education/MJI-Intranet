import React from 'react'

export const Xml = () => {
    return (
        <div className="addDocentes">
            <h1>Agregar empleados</h1>
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
          Cargar empleados
        </button>
      </div>
    );
}
