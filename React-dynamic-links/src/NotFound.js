
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (<div
        style={{ background: "red" }}>
        <h1> This Page 404 Not Found</h1>
        <Link to={'/home'}>
            <button> return To back Home </button>
        </Link>
    </div>)
}