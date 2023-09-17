'use client'

import { useEffect, useRef } from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import { robotoMono } from '../../../app/fonts'

interface Project {
    title: string
    description?: string | ReadonlyArray<string>
    date: string
    stack?: ReadonlyArray<string>,
    link?: string
}

const projectData: Array<Project> = [
    {
        title: 'Raptor SDK',
        description: [
            'Built in-house as an end-to-end suite of packages, that has become an integral part of day-to-day operations. For the developers, marketers and end-users.',
            'The biggest achievement of the SDK by far is the commitment to meaningful change in an era of automation and forward-thinking, with plans to explore AI integration.',
            'A page builder tool which transformed how websites are built, allowing marketing teams to construct pages with flexibility without developer intervention.',
            'Delivered company-wide presentation explaining the purpose and benefits of the SDK.'
        ],
        date: '2018 -',
        stack: [
            'bash',
            'webpack',
            'JavaSript',
            'SCSS',
            'PHP',
            'WordPress',
            'Next.js',
            'Node.js'
        ]
    },
    {
        title: 'Care Concern Group',
        description: [
            'Care homes websites on the same design with unique branding capabilities for each, built in its entirety from the ground up as we took the plunge into the headless ecosystem.',
            'Next.js frontend, with Styled Components for styling, paired with WordPress as the CMS over a GraphQL connection.',
            'Scalability is the key factor for success on the account, currently operating ~50 websites.'
        ],
        date: '2021 -',
        stack: [
            'Next.js',
            'GraphQL',
            'JavaSript',
            'Styled Components',
            'SCSS',
            'PHP',
            'WordPress'
        ],
        link: 'https://penrosecourt.com'
    },
    {
        title: 'Hosting Migration',
        description: [
            'Leading a large-scale hosting migration plan, involving ~150 websites. I led the initial scoping meetings and created the strategies for migrations, as well as sharing company-wide bulletins.',
            'The move is seeing websites receive core/plugin updated more regularly thanks to a new automated tool, saving man-hours in the support team.',
            'Other tasks now handled by the platform include: environment provisioning, SSL setup, developer access, server updates. In total saving a projected ~£10K annually.'
        ],
        date: '2023'
    }
]

function ProjectDesc({desc}: {desc?: string | ReadonlyArray<string>}) {
    if (!desc) {

    }

    if (Array.isArray(desc)) {
        return (
            <>
                {desc.map(descLine => (
                    <p key={descLine.slice(0,10)}>{descLine}</p>
                ))}
            </>
        )
    }

    return (
        <p>{desc}</p>
    )
}

export default function Projects() {
    const headingRef = useRef<HTMLDivElement>(null)
    const loopRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.boundingClientRect.y < 0) {
                        headingRef.current?.classList.add(styles.sticky)
                    } else {
                        headingRef.current?.classList.remove(styles.sticky)
                    }
                })
            },
            {
                threshold: [0, 1]
            }
        )

        const target = document.querySelector(`.${styles.loop}`)

        if (target) {
            observer.observe(target)
        }
    }, [loopRef])

    return (
        <div className={`section ${robotoMono.variable}`}>
            <div className={`container ${styles.container}`}>
                <div ref={headingRef} className={styles.heading}>
                    <h2>Projects</h2>
                    <p>A collection of what I&apos;ve worked on over the years, from in-house tools to client sites.</p>
                </div>
                <ul ref={loopRef} className={styles.projects}>
                    {projectData.map(project => (
                        <li key={project.title.replace(/\s/, '_')} className={styles.project}>
                            <div className={styles['project-heading']}>
                                <h3>{project.title}</h3>
                                {project.date ? (
                                    <span className={styles.date}>{project.date}</span>
                                ) : null}
                            </div>
                            <ProjectDesc desc={project.description} />
                            {project.stack ? (
                                <ul className={styles.stack}>
                                    {project.stack?.map(item => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            ) : null}
                            {project.link ? (
                                <Link href={project.link}>View project</Link>
                            ) : null}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}