
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div className="todolist">
            <Navbar className="bg-body-tertiary">
                <Navbar.Brand><h2>TODOLIST</h2></Navbar.Brand>
            </Navbar>
            <Navbar className="bg-body-tertiary">
                <h2> {new Date().toDateString()}</h2>
            </Navbar>
        </div>
    )
}
export default Header;