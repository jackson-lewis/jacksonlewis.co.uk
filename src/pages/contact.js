/**
 * The contact page
 */
import React from "react"
import Page from "@components/Global/Page"
import SEO from "@components/_SEO"
import ContactContent from "@components/Contact"


export default function Contact() {
    return (
       <Page>
            <SEO title="Contact" />
            <ContactContent />
        </Page> 
    )
}
