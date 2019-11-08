import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';
import styled from 'styled-components';

const TitleNasa = styled.div`
display:flex;
flex-direction: row;
`

const NasaNav = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"><img src="https://img.icons8.com/color/48/000000/nasa.png" alt="Nasa Logo"></img></NavbarBrand>
                <NavItem>
                    <TitleNasa>Nasa Photo of the Day</TitleNasa>
                </NavItem>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/"><Button color="primary">Nasa Insight</Button></NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <Button color="primary">See More...</Button>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NasaNav;