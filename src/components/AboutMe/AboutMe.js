import React from 'react'
import * as S from './AboutMe.styles'
import logoGithub from '../../svg/github.svg';
import logolinkedin from '../../svg/linkedin.svg';
import logoUdemy from '../../svg/udemy.svg';
import logoYt from '../../svg/youtube.svg';


const AboutMe = () => {

const socialNetworks = [
    {
        name: 'Github',
        links: 'https://github.com/julianaquin',
        logo: logoGithub
    },
    {
        name: 'linkedIn',
        links: 'https://www.linkedin.com/in/juliana-varela-q7/',
        logo: logolinkedin
    },
    {
        name: 'Udemy',
        links: 'https://www.li',
        logo: logoUdemy
    },
    {
        name: 'Youtube',
        links: 'https://www.li',
        logo: logoYt
    }

]

    return(
        <S.ContainerAboutMe>
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p> 👋🏻 Hello, I'm</p>
                        <p>Juliana</p>
                        <p>Frontend developer</p>
                    </S.Title>
                    <S.DescriptionText>
                        lorem ipsum asdasdadasdsd
                    </S.DescriptionText>
                    <S.ContainerIcons>
                        {socialNetworks.map((network, index) => (
                            <a key={index} 
                                href={network.links}
                                target="_blank" rel="noreferrer"
                            >
                                <img src={network.logo} alt={network.name}/>
                            </a>
                            ))}
                    </S.ContainerIcons>
                </S.ContainerText>
                <S.ContainerImage>
                    <img src='/fotojuli.jpg' />

                </S.ContainerImage>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    )
}

export default AboutMe;