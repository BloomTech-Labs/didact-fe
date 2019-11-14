import React from 'react'
import {ContentDiv, LambdaImage, ImageDiv, CardContainer, Card, PersonImage, PersonInfo} from './AboutStyles.js'

// Pictures
import LambdaLogo from '../../images/lambdalogo.png'
import EliImage from '../../images/team/eli.png'
import SethImage from '../../images/team/seth.png'
import AndrewImage from '../../images/team/andrew.png'
import ToddImage from '../../images/team/todd.png'
import JonImage from '../../images/team/jon.png'
import MarkImage from '../../images/team/mark.png'
import BenImage from '../../images/team/ben.png'

// Icons
import { FaDribbble, FaGithub } from 'react-icons/fa';
//Material UI Icons
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const About = ({props}) => {
console.log(props)
    const handleBack = () => {
        props.history.push('/')
    }   

    const teamArray = [
        {name: 'Andrew Allen', img: <PersonImage alt="" src={AndrewImage} />, area: "Development", icon: <FaGithub style ={{width: '25px', height: "25", color: "white", marginBottom: '10px'}}/>, link: "https://github.com/AndrewA0112"},
        {name: 'Mark Dudlik', img: <PersonImage alt="" src={MarkImage}/>, area: "User Experience", icon: <FaDribbble style ={{width: '25px', height: "25", color: "white", marginBottom: '10px'}}/>, link: "http://markdudlik.com/"},
        {name: 'Jonathan Scott',img: <PersonImage alt="" src={JonImage}/>, area: "Development", icon: <FaGithub style ={{width: '25px', height: "25", color: "white", marginBottom: '10px'}}/>, link: "https://github.com/jondscott21"},
        {name: 'Eli Sacks', img: <PersonImage alt="" src={EliImage}/>, area: "Development", icon: <FaGithub style ={{width: '25px', height: "25", color: "white", marginBottom: '10px'}}/>, link: "https://github.com/Bastlifa"},
        {name: 'Todd McKenzie', img: <PersonImage alt="" src={ToddImage}/>, area: "Team Lead/ Development", icon: <FaGithub style ={{width: '25px', height: "25", color: "white", marginBottom: '10px'}}/>, link: "http://www.github.com/toddmckenzie"},
        {name: 'Seth Nadu', img: <PersonImage alt="" src={SethImage}/>, area: "Development", icon: <FaGithub style ={{width: '25px', height: "25", color: "white", marginBottom: '10px'}}/>, link: "https://github.com/sethnadu"},
        {name: 'Ben Allen', img: <PersonImage alt="" src={BenImage}/>, area: "Development", icon: <FaGithub style ={{width: '25px', height: "25", color: "white", marginBottom: '10px'}}/>, link: "https://github.com/allenben746"},
    ]

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '-10px 0 10px 0', borderBottom: '1px solid black'}}>
                <p style={{fontWeight: 'bold', marginLeft: '10px'}}>About</p>
                <p onClick = {handleBack} style={{cursor: 'pointer', display: 'flex', flexDirection:'row', alignItems: 'center'}}><ChevronLeftIcon style={{fontSize: '1.6rem'}}/>{`${" "} Back To Dashboard`}</p>
            </div>
            <ContentDiv>
                <div style={{margin: '-10px 0 60px 20px', maxWidth: "620px", width: "100%", fontSize: "1.6rem"}}>
                    <p>Didact was developed in Lambda Labs</p>
                    <p style={{marginTop: '50px'}}>There will also be additional text here that talks about other things about the project</p>
                </div>
                <ImageDiv>
                    <LambdaImage src={LambdaLogo} alt="Lambda School" />
                </ImageDiv>
            </ContentDiv>
            <h4 style={{textAlign: 'left', marginLeft: '15px'}}>Team</h4>
            <CardContainer>
                {teamArray.map(person => {
                    return(
                    <Card>
                        {person.img}
                        <PersonInfo>
                            <div style={{fontFamily: "ITC Grouch"}}>
                                <p style={{color: "white", fontSize: "20px", marginTop: "5px", fontWeight: 'bolder'}}>{person.name}</p>
                                <p style={{color: "white", marginTop: "-20px"}}>{person.area}</p>
                            </div>
                            <a style ={{color: "white"}} href={person.link}>{person.icon}</a>
                        </PersonInfo>

                    </Card> )
                })}

            </CardContainer>
        </div>
    )
}

export default About;