import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Heading, DidactHeader, StyledButton, Flex, LargeFont, SmallerFont, StyledImg, Middle, BlackBox, WhiteLargeText, StyledInput, StyledBlueButton, SmallText, SecondImg } from './LandingStyles.js';
import computer from '../../images/computer.png';
import computer2 from '../../images/computer2.png'
// const useStyles = makeStyles(theme => ({

// }))


export default function Landing() {
    const [ text, setText ] = useState('');


 return (
    <Container>
        <Heading>
            <DidactHeader>Didact</DidactHeader>
            <StyledButton>Login</StyledButton>
        </Heading>
        <Flex>
            <Middle>
                <LargeFont className="first">Learn online.</LargeFont>
                <LargeFont>But for real</LargeFont>
                <LargeFont>this time.</LargeFont>
                <SmallerFont>All your courses in one spot, and a community to help you along the way.</SmallerFont>
                
            </Middle>
            <StyledImg src={computer} />
        </Flex>
        <BlackBox>
            <Flex>
                <div>
                    <WhiteLargeText>
                        Get notified when 
                    </WhiteLargeText>
                    <WhiteLargeText>
                        the beta goes live
                    </WhiteLargeText>
                </div>
                <StyledInput placeholder="Enter your email address">
                </StyledInput>
                <StyledBlueButton>Sign Up</StyledBlueButton>
            </Flex>
            <SmallText>
                Forget that, I want to join now, Alpha bugs and all 
            </SmallText>
            </BlackBox>
            <SecondImg src={computer2} />
    </Container>
    )
}

   

