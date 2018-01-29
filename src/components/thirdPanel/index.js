import React, { Component } from 'react';
import styled from 'styled-components';
import Panel3ImagePNG from '../../media/Panel3Image.png';

const TextStyled = styled.div`
    letter-spacing: -1px;
    color: rgb(85,85,89);
    font-weight: bold;
    text-align: left;
    margin-top: 200px;
    margin-left: 100px;
    h1 {
        font-size: 24px;
    }
    p{
        margin-left: 30px;
        margin-top: 30px;
        margin-right: 100px;
        font-weight: normal;
        font-size: 18px;
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

class ThirdPanel extends Component {
    render() {
        return (
            <TextContainer>
                 <ImageStyled src={Panel3ImagePNG} />
                <TextStyled>
                    <h1> &mdash; Vegan Hotdogs</h1>
                    <p> Praesent commodo cursus magna, vel scelerisque nsil consectetur et.  Aenean eu leo quam.  Pellentesque ornare sem lacinia quam venenatis vestibulum </p>
                </TextStyled>
            </TextContainer>
        );
    }
}

export default ThirdPanel;