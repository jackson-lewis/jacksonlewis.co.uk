'use client'

import {useEffect, useRef} from 'react'
import styles from './index.module.scss'
import Link from 'next/link'
import {robotoMono} from '../../../app/fonts'

interface Project {
    title: string
    description?: string | ReadonlyArray<string>
    date: string
    stack?: ReadonlyArray<string>,
    link?: string
}

const projectData: Project[] = [
  {
    title: 'Sumzy - Personal Finance Tracker',
    description: [
      'Featuring a Next.js (App Router) frontend with SWR for data fetching, and a Node.js microservice architecture using Express, JWT for authentication and Nodemailer for emails.',
      'Written in TypeScript and containerised with Docker. PostgreSQL is used as the database, managed via Prisma, with RabbitMQ used for communication between microservices.',
      'Testing is handled using Jest and React Testing Library, using mocks where required, all integrated into CI deployments.',
      'The infrastructure utilizes the following AWS services: ECS, ECR, ELB, RDS, MQ, ACM, Route 53, and IAM.'
    ],
    date: '2024 -',
    stack: [
      'TypeScript',
      'Node.js',
      'Next.js',
      'Docker',
      'AWS',
      'Supabase',
      'PostgreSQL',
      'Prisma',
      'Jest',
      'React Testing Library'
    ],
    'link': 'https://sumzy.vercel.app'
  },
  {
    title: 'Raptor - Web SDK',
    description: [
      'Built in-house as an end-to-end suite of packages, that has become an integral part of day-to-day operations. For the developers, marketers and end-users.',
      'The biggest achievement of the SDK by far is the commitment to meaningful change in an era of automation and forward-thinking, with plans to explore AI integration.',
      'A page builder tool which transformed how websites are built, allowing marketing teams to construct pages with flexibility without developer intervention.',
      'Delivered company-wide presentation explaining the purpose and benefits of the SDK.'
    ],
    date: '2018 -',
    stack: [
      'TypeScript',
      'Next.js',
      'Node.js',
      'bash',
      'webpack',
      'scss',
      'php',
      'MySQL',
      'WordPress',
    ]
  },
  {
    title: 'CCG - Next.js Website Cluster',
    description: [
      'Care homes websites on the same design with unique branding capabilities for each, built in its entirety from the ground up as we took the plunge into the headless ecosystem.',
      'Next.js frontend, with Styled Components for styling, paired with WordPress as the CMS over a GraphQL connection.',
      'Scalability is the key factor for success on the account, currently operating ~50 websites.'
    ],
    date: '2021 -',
    stack: [
      'Next.js',
      'GraphQL',
      'JavaScript',
      'scss',
      'php',
      'WordPress'
    ],
    link: 'https://penrosecourt.com'
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
      (entries) => {
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
          <p>A collection of my very best work, from personal projects to in-house products to client websites.</p>
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