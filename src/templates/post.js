/**
 * Template of a single project
 */
import React from 'react'
import { graphql } from 'gatsby'
import Page from '@components/Global/Page'
import SEO from "@components/_SEO"
import StandardHero from "@components/StandardHero"
import DefaultPageContent from "@components/DefaultPageContent"


const ProjectTemplate = ({ data }) => {

    const { mdx } = data
    const { frontmatter, body } = mdx

    return (
        <Page>
            <SEO title="Project" />
            <StandardHero>
                <h1>{ frontmatter.title }</h1>
                <span>{ frontmatter.date }</span>
            </StandardHero>
            <DefaultPageContent mdxBody={ body } />
        </Page>
    )

}

export default ProjectTemplate

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        slug
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
