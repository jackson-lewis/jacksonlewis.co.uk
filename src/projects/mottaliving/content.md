---
slug: /projects/mottaliving
title: Motta Living
desc: A highly bespoke Woocommerce store, with product data migrated from Magento 1.9.
featuredImage: ./feature.jpg
type: site
tags: ecommerce, wordpress
url: https://mottaliving.co.uk
---

Motta Living, is a successor to DesRes Home, a Magento 1.9 store which needed a completely makeover and transfer from Magento to Woocommerce on WordPress.

## The why

With the end-of-life of Magento 1.9 looming in summer 2020, a new site was on the cards. It was suggested that this would be a good opportunity to move over to Woocommerce, which to many is regarded as easy to use and easier to maintain.

## The how

The project was split in three, I planned to get the non-Woo pages out of the way first, then move onto the Woo templates following the bespoke design which threw its own challenges, and finally end on the real technical work. This project structure worked really well for me and would highly recommend doing so too!

## Best bits

Much of the technical aspect of this site was all-new to me, from importing product data from an existing site, to setting up bespoke functionality not found in standard Woo. While I had previous experience of customisation to Woo, this project was to a much much higher degree.

### Migrating product data from Magento to Woocommerce

The migration process was actually not as daunting as I had originally thought it would be, with massive thanks to the [FG Magento to WooCommerce](https://en-gb.wordpress.org/plugins/fg-magento-to-woocommerce/) plugin by [Frederic Gilles](https://www.fredericgilles.net/). The only real technical work required at this stage was working with the additional attributes of the Magento products which held some of the content.

### Product Gallery Viewer with Glide.js

It has always kinda of bothered me that Woo doesn't come with a good product gallery image viewer, well, it doesn't have one at all. So I wanted to create one from the ground up with the help of [Glide.js](https://glidejs.com/) for handling all of the, you know, sliding. I'm very happy with how it turned out, making use of `backdrop-filter` was perfect for taking focus away from the product page, but still remaining the transparency so the user doesn't feel like they've left the page.

## Final thoughts

By far the most technically challenging project I've worked on to date, the level of Woocommerce customisation required gave me a much stronger understanding of what's achievable with Woo and the amount of effort required to reach the final product. It is very easy to underestimate the shear scale of a Woo project if you don't nail down on the specific details right from the outset, I'm mostly thinking of shipping, *FYI.*