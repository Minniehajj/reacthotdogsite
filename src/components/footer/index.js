import React, { Component } from 'react';
import styled from 'styled-components';

const FooterTextLeft = styled.div`
    font-size: 14px;
    line-height: 24px;
    color: rgb(85,85,89);
    text-align: left;
    margin:25px;
    width: 50%;
    a{
        text-decoration: none;
    }
`;

const FooterTextRight = FooterTextLeft.extend`
    text-align: right;
`
const FooterContainer = styled.div`
    display:flex;
    background-color: #efefef;
    height: 70px;
`


class Footer extends Component {
    render() {
        return (        
            <FooterContainer>
                <FooterTextLeft>® Dirty Dogs all rights reserved</FooterTextLeft>
                <FooterTextRight>274 Marconi Blvd. Columbus, OH 43215 &nbsp;|&nbsp; 614.538.0095&nbsp;|&nbsp; <a href="#">Contact Us</a></FooterTextRight>
             </FooterContainer>
        )
    }
}


export default Footer;