import React, { Component } from 'react';
import styled from 'styled-components';

const MenuStyled = styled.div`
    display: inline-flex;
    a:hover {
        color: cornflowerblue;
    }
`;

const MenuItemStyled = styled.a`
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 24px;
    color: rgb(46,46,46);
    font-weight: bold;
    text-align: center;
    padding: 40px;
    text-decoration: none;
    text-transform: uppercase

    
`;

const MenuContainer = styled.div`
border-bottom: 5px solid #f3f2f2;
`


class Menu extends Component {
    render() {
        return (
            <MenuContainer>
                <MenuStyled>
                    <MenuItemStyled href="#">Menu</MenuItemStyled>
                    <MenuItemStyled href="#">Catering</MenuItemStyled>
                    <MenuItemStyled href="#">About Us</MenuItemStyled>
                    <MenuItemStyled href="#">Contact</MenuItemStyled>
                </MenuStyled>
            </MenuContainer>
        );
    }
}



export default Menu;