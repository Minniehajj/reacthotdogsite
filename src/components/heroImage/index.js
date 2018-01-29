import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeroImagePNG from '../../media/HeroImage.png';

const ImageStyled = styled.img`
    width: 100%;
`;

class HeroImage extends Component {
    render() {
        return (
            <ImageStyled src={HeroImagePNG} />
        );
    }d
}


export default HeroImage;