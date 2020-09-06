/**
 * The contact page
 */
import React from "react"
import Page from "@components/Page"
import SEO from "@components/SEO"
import ContactContent from "@components/Contact"


const Contact = () => (
    <Page>
        <SEO title="Contact" />
        <ContactContent />
    </Page>
)


export default Contact
