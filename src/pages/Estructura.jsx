import './styles/Estructura.css';

const Estructura = () => {
    return (
        <div className="container">

            {/* Sección Flexbox */}
            <section className="section-demo">
                <h2 className="section-title"> Flexbox</h2>
                <div className="flex-demo-container">
                    <div className="flex-item flex-item-1">Flex 1</div>
                    <div className="flex-item flex-item-2">Flex 2</div>
                    <div className="flex-item flex-item-1">Flex 1</div>
                </div>
            </section>

        </div>
    );
};

export default Estructura;
