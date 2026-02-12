import './styles/ReusableSquare.css';

function Square({ title, type }) {
    return (
        <div className={`square ${type}`}>
            <p>{title}</p>
        </div>
    )
}

export default Square