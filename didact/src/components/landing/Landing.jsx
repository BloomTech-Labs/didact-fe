import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Heading, DidactHeader, StyledButton, Flex, LargeFont, LargeFont1, SmallerFont, StyledImg, Middle, BlackBox, WhiteLargeText, WhiteLargeText1, StyledInput, StyledBlueButton, SmallText, SecondImg, StyledImgCircle, Warning, SocialImg } from './LandingStyles.js';
import computer from '../../images/computer.png';
import computer2 from '../../images/computer2.png';
import playCircle from '../../images/play-circle.png';
import twitter from '../../images/Twitter.png';
import axios from 'axios';
import beURL from '../../utils/beURL.js';



const Landing = ({ history }) => {
    const [ email, setEmail ] = useState('');
    const [ error, setError ] = useState('');

    const sendEmail = () => {
        if (email !== '' && email.includes('@') && email.includes('.com')){
             axios.post(`${beURL}auth/emaillist`, { email: email })
                .then(res => {
                    if (res.data.message === "Email was already in database"){
                        setError('This email is already registered.')
                    } else {
                        setEmail('');
                        setError("Thanks! You'll get an email with beta signups open!")
                    }
                    
                })
                .catch(err => {
                    setEmail('');
                    setError('Please try again.')
                })
        } else {
            setError('It must be a valid email.')
        }
       
    }

    return (
        <Container>
            <Heading>
                <DidactHeader style={{fontFamily: 'ITC Grouch'}}>Didact</DidactHeader>
                <StyledButton onClick={() => history.push('/login')}>Login</StyledButton>
            </Heading>
            <Flex>
                <Middle>
                    <LargeFont>Learn online.</LargeFont>
                    <LargeFont1>But for real</LargeFont1>
                    <LargeFont1>this time.</LargeFont1>
                    <SmallerFont>All your courses in one spot, and a community to help you along the way.</SmallerFont>
                    
                </Middle>
                <StyledImg src={computer2} />
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
                    <StyledInput value={email} placeholder="    Enter your email address" onChange={(e) => setEmail(e.target.value)}>
                    </StyledInput>
                    <StyledBlueButton onClick={() => sendEmail()}>Sign Up</StyledBlueButton>
                </Flex>
                {error ? <Warning>{error}</Warning> : <Warning></Warning>}
                <Flex>
                
                <SmallText>
                    Forget that, I want to join now, Alpha bugs and all 
                </SmallText>
                <StyledImgCircle src={playCircle} onClick={() => history.push('/register')}/>
                </Flex>
                </BlackBox>
                <SecondImg src={computer} />
                <a href="https://twitter.com/DidactLMS" target="_blank">
                    <SocialImg src={twitter} target="_blank"/>
                </a>
        </Container>
        )
}

   
export default Landing;
