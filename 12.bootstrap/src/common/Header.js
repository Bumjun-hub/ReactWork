import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <header>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">TJoeun</Navbar.Brand>

            <Nav className="me-auto">
              <Nav.Link href="#home">홈</Nav.Link>
              <Nav.Link href="#category1">카테고리1</Nav.Link>
              <Nav.Link href="#category2">카테고리2</Nav.Link>
              <Nav.Link href="#category3">카테고리3</Nav.Link>
            </Nav>

            <Form className="d-flex" style={{ alignItems: 'center' }}>
              <Form.Control
                type="email"
                placeholder="이메일"
                className="me-2"
                size="sm"
              />
              <Form.Control
                type="password"
                placeholder="비밀번호"
                className="me-2"
                size="sm"
              />
              <Button variant="outline-light" size="sm" type="submit" className='loginbtn'>
                로그인
              </Button>
              <Button variant="light" size="sm" className="ms-2">
                회원가입
              </Button>
            </Form>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;