/**
 * Template of a single project
 */
import React from 'react'
import { graphql } from 'gatsby'
import Page from '@components/Page'
import SEO from "@components/Seo"
import StandardHero from "@components/StandardHero"
import DefaultPageContent from '@components/DefaultPageContent'


const ProjectTemplate = ({ data }) => {

    const { mdx } = data
    const { frontmatter, body } = mdx

    return (
        <Page>
            <SEO title={ frontmatter.title } />
            <StandardHero>
            <h1>{ frontmatter.title }</h1>
            </StandardHero>
            <DefaultPageContent body={ body } />
        </Page>
    )

}

export default ProjectTemplate

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        slug
        title
      }
    }
  }
`
