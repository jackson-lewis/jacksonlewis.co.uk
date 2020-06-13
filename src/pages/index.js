/**
 * index.js
 * 
 * The default template for home
 */

// Core
import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import { getCLS, getFID, getLCP } from "web-vitals";

// Page components
import Layout from "../components/base/layout";
import Image from 'gatsby-image';
import GetWindowSize from '../components/window-size'

// Styles
import Styles from '../styles/templates/feature.module.scss';


const Page = ( { data } ) => {

    const [ contentClass, setContentClass ] = useState( Styles.content )

    const windowSize = GetWindowSize();


    useEffect( () => {

        getCLS( console.log )
        getFID( console.log )
        getLCP( console.log )

        /**
         * Add a class to fade in the content after 500ms
         */
        setTimeout( e => {
            setContentClass( contentClass => `${contentClass} ${Styles.loaded}` );
        }, 500 );
    }, [] );

    
    return (
        <Layout>
            <SEO
                title={ `Full Stack Dev` }
            />
            <div className={ Styles.imageWrapper }>
                { windowSize.width >= 1024 ? 
                    <Image
                    fluid={ data.file.large.fluid }
                    key={ `image-header` }
                    durationFadeIn={ 1000 }
                    className={ Styles.image }
                    style={{ transform: `translate3d( 0, 0%, 0 )` }}
                    />
                    :
                    <Image
                        fluid={ data.file.small.fluid }
                        key={ `image-header` }
                        durationFadeIn={ 1000 }
                        className={ Styles.image }
                        style={{ transform: `translate3d( 0, 0%, 0 )` }}
                        />
                }
                
            </div>

            <div className={ Styles.contentWrapper }>
                <div className={ contentClass }>
                    <span className={ Styles.logo }>JACKSON LEWIS<span style={{color: '#f10986'}}>.</span></span>
                    <h1 className={ Styles.h1 }>Full Stack Dev</h1>
                    <p>An ever-growing developer, dabbling at both an agency and as a freelancer. Striving to make the web a faster and more enjoyable space.</p>
                    <hr className={ Styles.hr__narrow } />
                    <p>Away from the screen there’s a good chance I’ll be cleaning my beloved car, or spending some downtime with my aquatic friends.</p>
                    <hr className={ Styles.hr__narrow } />
                    <a href={ `mailto:hello@jacksonlewis.co.uk?subject=Let's Talk&body=Hey!` } className={ `link-arrow` }>hello@jacksonlewis.co.uk</a><br />
                    <a href={ `https://github.com/jackson-lewis` } className={ `link-arrow` }>GitHub</a><br />
                    <a href={ `https://www.linkedin.com/in/jacksonrlewis/` } className={ `link-arrow` }>LinkedIn</a>
                </div>
            </div>

        </Layout>
    )
}
export default Page


export const query = graphql`
    query {
        file(relativePath: {eq: "JACKSON.jpg"}) {
            small: childImageSharp {
                fluid(maxWidth: 1024) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            },
            large: childImageSharp {
                fluid(maxWidth: 960, maxHeight: 1080) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;
