import '../styles/HelloWorld.css';
function Origin() {
    return (
        <div className="HelloWorld-container">
            <h3 className='HelloWorld-title'>Html</h3>
            <p>
                Para empezar necesitaremos una hoja en blanco la cual sera representada con iuna hoja html
            </p>
            <h4>index.html</h4>
            <p>


                !DOCTYPE html
                html lang="en"
                head
                meta charset="UTF-8"
                meta name="viewport" content="width=device-width, initial-scale=1.0"
                title Document /title
                link rel="stylesheet" href="styles.css"
                head
                body
                div class="container"
                h1 Hello World /h1
                button onclick="helloWorld()" Click me /button
                /div
                script src="script.js" /script
                /body
                /html

            </p>
            <h4>script.js</h4>
            <p>
                function helloWorld 
                    alert "Hello World"
            </p>

        </div>
    );
}

export default Origin;