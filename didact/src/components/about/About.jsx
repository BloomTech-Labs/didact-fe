import React from 'react'
import {ContentDiv, 
        ContentDivMobile, 
        LambdaImage, 
        CardContainerOpen, 
        CardContainer, 
        Card, 
        PersonImage, 
        PersonInfo, 
        BottomDiv,
        CardOpen} from './AboutStyles.js'

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
    const handleBack = () => {
        props.history.push('/')
    }   

    const teamArray = [
        {id: 1, name: 'Andrew Allen', img: <PersonImage alt="" src={AndrewImage} />, area: "Development", icon: <FaGithub style ={{width: '25px', height: "25", color: "white", marginBottom: '10px'}}/>, link: "https://github.com/AndrewA0112"},
        {id: 2, name: 'Jonathan Scott',img: <PersonImage alt="" src={JonImage}/>, area: "Development", icon: <FaGithub style ={{width: '25px', height: "25", color: "white", marginBottom: '10px'}}/>, link: "https://github.com/jondscott21"},
        {id: 3, name: 'Eli Sacks', img: <PersonImage alt="" src={EliImage}/>, area: "Development", icon: <FaGithub style ={{width: '25px', height: "25", color: "white", marginBottom: '10px'}}/>, link: "https://github.com/Bastlifa"},
        {id: 4, name: 'Todd McKenzie', img: <PersonImage alt="" src={ToddImage}/>, area: "Team Lead/ Development", icon: <FaGithub style ={{width: '25px', height: "25", color: "white", marginBottom: '10px'}}/>, link: "http://www.github.com/toddmckenzie"},
        {id: 5, name: 'Seth Nadu', img: <PersonImage alt="" src={SethImage}/>, area: "Development", icon: <FaGithub style ={{width: '25px', height: "25", color: "white", marginBottom: '10px'}}/>, link: "https://github.com/sethnadu"},
        {id: 6, name: 'Ben Allen', img: <PersonImage alt="" src={BenImage}/>, area: "Development", icon: <FaGithub style ={{width: '25px', height: "25", color: "white", marginBottom: '10px'}}/>, link: "https://github.com/allenben746"},
        {id: 7, name: 'Mark Dudlik', img: <PersonImage alt="" src={MarkImage}/>, area: "User Experience", icon: <FaDribbble style ={{width: '25px', height: "25", color: "white", marginBottom: '10px'}}/>, link: "http://markdudlik.com/"},
    ]

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '-10px 5px 10px 10px', borderBottom: '1px solid black'}}>
                <p style={{fontWeight: 'bold'}}>About</p>
                <p onClick = {handleBack} style={{cursor: 'pointer', display: 'flex', flexDirection:'row', alignItems: 'center'}}><ChevronLeftIcon style={{fontSize: '1.6rem'}}/>{`${" "} Back To Dashboard`}</p>
            </div>
            {!props.phoneSize ?
            (<ContentDiv>
                <div style={{margin: '-10px 0 10px 10px', width: "100%", fontSize: "1.6rem"}}>
                    <p>There are extensive resources available for self-directed online education. However, studies have revealed that completion rates are often less than 10%. Many times, people sign up for classes they never start. Research shows that these issues are related to the ways students engage with online courses and the need for a more fully-realized educational experience and set of tools for online learners. </p>
                </div>
                <div style={{margin: '-10px 0 10px 10px', width: "100%", fontSize: "1.6rem"}}>
                    <p>Didact aims to bring together online learning resources in a way that encourages thoughtful time management and goal setting with integrated support strategies so students can reach their self-educational goals, no matter the source of their lessons. The goal of Didact is to connect online education and student support services to enable higher completion rates and more successful students.</p>
                </div>
            </ContentDiv>)
            :
            (<ContentDivMobile>
                <div style={{margin: '-10px 0 60px 10px', width: "100%", fontSize: "1.6rem"}}>
                    <p>There are extensive resources available for self-directed online education. However, studies have revealed that completion rates are often less than 10%. Many times, people sign up for classes they never start. Research shows that these issues are related to the ways students engage with online courses and the need for a more fully-realized educational experience and set of tools for online learners. </p>
                </div>
                <div style={{margin: '-40px 0 20px 10px', width: "100%", fontSize: "1.6rem"}}>
                    <p>Didact aims to bring together online learning resources in a way that encourages thoughtful time management and goal setting with integrated support strategies so students can reach their self-educational goals, no matter the source of their lessons. The goal of Didact is to connect online education and student support services to enable higher completion rates and more successful students.</p>
                </div>
            </ContentDivMobile> )} 
            <h4 style={{textAlign: 'left', marginLeft: '15px'}}>Team</h4>
            {!props.open ? (
            <CardContainerOpen>
                {teamArray.map(person => {
                    return(
                    <CardOpen key={person.id}>
                        {person.img}
                        <PersonInfo>
                            <div >
                                <p style={{fontFamily: 'ITC Grouch', color: "white", fontSize: "20px", marginTop: "5px", fontWeight: 'bolder'}}>{person.name}</p>
                                <p style={{fontFamily: 'ITC Grouch', color: "white", marginTop: "-20px"}}>{person.area}</p>
                            </div>
                            <a style ={{color: "white"}} href={person.link}>{person.icon}</a>
                        </PersonInfo>

                    </CardOpen> )
                })}

            </CardContainerOpen>)
            :(
            <CardContainer>
            {teamArray.map(person => {
                return(
                <Card>
                    {person.img}
                    <PersonInfo>
                        <div >
                            <p style={{fontFamily: 'ITC Grouch', color: "white", fontSize: "20px", marginTop: "5px", fontWeight: 'bolder'}}>{person.name}</p>
                            <p style={{fontFamily: 'ITC Grouch', color: "white", marginTop: "-20px"}}>{person.area}</p>
                        </div>
                        <a style ={{color: "white"}} href={person.link}>{person.icon}</a>
                    </PersonInfo>

                </Card> )
                })}
            </CardContainer>  
            )}
            <BottomDiv>
                <p style={{margin: '52px 30px 0 0'}}>Didact was developed in Lambda Labs</p>
                <LambdaImage src={LambdaLogo} />
            </BottomDiv>

        </div>
    )
}

export default About;