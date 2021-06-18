/**
 * Master Hero
 */
import React from "react"
import styled from "styled-components"
import { SiteSection, SiteContainer } from "./Global/SiteLayout"
import LifeFeatureItem from "./LifeFeatureItem"


const StyledSiteSection = styled( SiteSection )`
    position: relative;

    ::before,
    ::after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX( -50% );
    }

    ::before {
        width: 16rem;
        height: 1px;
        bottom: -5rem;
        z-index: 5;

        background: linear-gradient( 90deg, var( --black ), var( --line-color ), var( --black ) );
    }

    ::after {
        width: 8px;
        height: 8px;
        bottom: calc( -5rem + -4px );
        z-index: 10;

        border-radius: 8px;
        border: 1px solid var( --primary );
        background-color: var( --black );
    }
`


export default function LifeFeature() {
    return (
        <StyledSiteSection>
            <SiteContainer>
                <LifeFeatureItem image="audi-a3.jpg">
                    <h2>Car <del>yobbo</del> enthusiast</h2>
                    <p>Currently the proud keeper of a 2016 A3 Saloon. I’ve always been intrigued by these machines with 4 wheels, from creating my own Disney PIXAR Cars museum as a youngster, to getting behind the wheel at 17.</p>
                    <p>It was with the second car, my 206, that I developed the obsession with taking things apart and putting them back together again, a very therapeutic - and useful - process.</p>
                </LifeFeatureItem>
                <LifeFeatureItem image="fish.png">
                    <h2>Fish whisperer</h2>
                    <p>Currently the proud keeper of a 2016 A3 Saloon. I’ve always been intrigued by these machines with 4 wheels, from creating my own Disney PIXAR Cars museum as a youngster, to getting behind the wheel at 17.</p>
                    <p>It was with the second car, my 206, that I developed the obsession with taking things apart and putting them back together again, a very therapeutic - and useful - process.</p>
                </LifeFeatureItem>
            </SiteContainer>
        </StyledSiteSection>
    )
}
