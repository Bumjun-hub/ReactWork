import './Footer.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (


        <footer className='footer'>
            <Navbar bg="dark" data-bs-theme="dark" className='footerNav'>
                <Container>
                    <Nav className='Nav'>
                        <a>TJoeun</a>&emsp;
                    </Nav><br/>
                    
                          
                </Container>
            </Navbar>
            
        </footer>




    )
}
export default Footer;