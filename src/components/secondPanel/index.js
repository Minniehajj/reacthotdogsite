import React, { Component } from 'react';
import styled from 'styled-components';
import Panel2ImagePNG from '../../media/Panel2Image.png';

const TextStyled = styled.div`
    letter-spacing: -1px;
    color: rgb(85,85,89);
    font-weight: bold;
    text-align: left;
    margin-top: 200px;
    margin-left: 100px;
    h1 {
        font-size: 24px;
        font-weight: 700;
    }
    p{
        margin-left: 40px;
        margin-top: 30px;
        margin-right: 100px;
        font-weight: normal;
        font-size: 18px;
        font-weight: 300;
    }
`;

const ImageStyled = styled.img`
    min-width: 50%;
`;

const TextContainer = styled.div`
    background-color: #fbfafa;
    height: 600px;
    display: flex;
    
`

class SecondPanel extends Component {
    render() {
        return (
            <TextContainer>
                <TextStyled>
                    <h1> &mdash; &nbsp; Gourmet All Beef Hotdogs </h1>
                    <p> Praesent commodo cursus magna, vel scelerisque nsil consectetur et.  Aenean eu leo quam.  Pellentesque ornare sem lacinia quam venenatis vestibulum </p>
                </TextStyled>
                <ImageStyled src={Panel2ImagePNG} />
            </TextContainer>
        );
    }
}

export default SecondPanel;