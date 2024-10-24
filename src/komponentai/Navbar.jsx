import Nav from 'react-bootstrap/Nav';

export const Navbar =()=> {

    return (
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/">Pagrindinis</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/new">Naujų darbuotojų registracijos forma</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/feedback">Feedback, apie darbuotoją, forma</Nav.Link>
          </Nav.Item>
        </Nav>
      );
}