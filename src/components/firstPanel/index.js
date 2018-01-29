import React, { Component } from 'react';
import styled from 'styled-components';
import HotDogLogoPNG from '../../media/HotDogLogo.png';

const TextStyled = styled.div`
    font-size: 56px;
    letter-spacing: -2px;
    color: rgb(85,85,89);
    text-align: center;
    margin-top: 50px;   
    font-weight: 300;
`;

const ImageStyled = styled.img`
    margin-top: 100px;
`;

const TextContainer = styled.div`
    background-color: #fbfafa;
    width: 100%;
    height: 600px;
`

const ButtonStyled = styled.button`
    border-radius: 10px;
    padding: 15px;
    background: #286782;
    color: white;
    border: 2px solid;
    font-size: 20px;
    letter-spacing: -1px;
    line-height: 24px;
    color: rgb(255,255,255);
    margin-top: 50px;
    cursor: pointer;
    font-weight: 600;
    line-height: 1.2;
`;

class FirstPanel extends Component {

    onClick = () =>
    {
        window.open("#", "_self"); 
    }
    render() {
        return (
            <TextContainer>
                <ImageStyled src={HotDogLogoPNG} />
                <TextStyled>Dirty Dogs serves all-beef, vegan, and vegetarian hot dogs</TextStyled>
                <ButtonStyled onClick={this.onClick}>More Dogs 'n Make Em Hot</ButtonStyled>
            </TextContainer>
        );
    }
}


export default FirstPanel;