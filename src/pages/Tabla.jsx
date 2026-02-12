import './styles/Tabla.css';

const Tabla = () => {
    return (
        <div className="container">
            <h2 className="mb-2">Datos Estructurados</h2>
            <div className="table-wrapper">
                <table className="minimal-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Rol</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Admin Principal</td>
                            <td>Administrador</td>
                            <td>Activo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Usuario Demo</td>
                            <td>Editor</td>
                            <td>Inactivo</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Invitado</td>
                            <td>Viewer</td>
                            <td>Activo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tabla;
