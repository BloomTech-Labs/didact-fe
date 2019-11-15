import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Heading, DidactHeader, StyledButton, Flex, LargeFont, LargeFont1, SmallerFont, StyledImg, Middle, BlackBox, WhiteLargeText, WhiteLargeText1, StyledInput, StyledBlueButton, SmallText, SecondImg, StyledImgCircle } from './LandingStyles.js';
import computer from '../../images/computer.png';
import computer2 from '../../images/computer2.png';
import playCircle from '../../images/play-circle.png';
// const useStyles = makeStyles(theme => ({

// }))


export default function Landing({ history }) {
    const [ text, setText ] = useState('');


 return (
    <Container>
        <Heading>
            <DidactHeader>Didact</DidactHeader>
            <StyledButton onClick={() => history.push('/login')}>Login</StyledButton>
        </Heading>
        <Flex>
            <Middle>
                <LargeFont>Learn online.</LargeFont>
                <LargeFont1>But for real</LargeFont1>
                <LargeFont1>this time.</LargeFont1>
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
                    <WhiteLargeText1>
                        the beta goes live
                    </WhiteLargeText1>
                </div>
                <StyledInput placeholder="    Enter your email address">
                </StyledInput>
                <StyledBlueButton>Sign Up</StyledBlueButton>
            </Flex>
            <Flex>
            <SmallText>
                Forget that, I want to join now, Alpha bugs and all 
            </SmallText>
            <StyledImgCircle src={playCircle}/>
            </Flex>
            </BlackBox>
            <SecondImg src={computer2} />
    </Container>
    )
}

   

