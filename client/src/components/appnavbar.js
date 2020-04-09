import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavBar extends Component {
    //sets state of hamburger menu//
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                {/* expand will make hamburger appear on small screens. mb puts bottom margin on nav and other Items below it dark gives attribute of dark*/}
                <Navbar color="dark" dark expand="sm" className="mb-b">
                    <Container>
                        <NavbarBrand href='/'>ShoppingList</NavbarBrand>
                        {/* Call in Toggler then on click call toggle function */}
                        <NavbarToggler onclick={this.toggle} />
                        {/* Collapse expands or minimizes menue on click set state to the current state give it an attribute of navbar so it knows its a navbar */}
                        <Collapse isOpen={this.state.isOpen} navbar>
                            {/* "ml-auto" aligns items automatically from left */}
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/eaglesfan05">Github</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );

    }
}


export default AppNavBar
