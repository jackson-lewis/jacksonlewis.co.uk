import React from "react"
import { StyledFooter, Container, Socials } from './styles'


export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <Socials>
                    <a href="https://github.com/jackson-lewis">GitHub</a>
                    &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
                    <a href="https://twitter.com/jacksonrlewis">Twitter</a>
                    &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
                    <a href="https://www.linkedin.com/in/jacksonrlewis/">LinkedIn</a>
                </Socials>
                <p>
                    <small>
                        Built with
                        { ' ' }
                        <a href="https://www.gatsbyjs.org/">Gatsby</a>
                        , hosted on
                        { ' ' }
                        <a href="https://www.netlify.com/">Netlify</a>
                    </small>

                </p>
            </Container>
        </StyledFooter>
    )
}
