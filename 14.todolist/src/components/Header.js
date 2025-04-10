import './Header.css';


const Header = () => {
    return (
        <div className="todolist">
            <h1>TODOLIST</h1><br/>
            <h2> {new Date().toDateString()}</h2>
        </div>
    )
}
export default Header;