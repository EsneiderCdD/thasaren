import ViewCode from "../components/reusables/ViewCode/ViewCode";
import {ejemploBasico, ejemploEsqueleto } from "../components/reusables/ViewCode/code/data";

const ViewCodePage = () => {
    return (
        <div className="container">
            <h2>Code Viewer</h2>
            <p>View code</p>
            <section>
                <h3>Ejemplo basico</h3>
                <ViewCode code={ejemploBasico} />
            </section>
            <section>
                <h3>Paso 1: Esqueleto</h3>
                <ViewCode code = {ejemploEsqueleto} />
            </section>


        </div>
    );
};

export default ViewCodePage;
