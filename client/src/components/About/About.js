import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import CollectionsIcon from '@material-ui/icons//Collections';
import { about } from '../../portfolio'
import './About.css'
import { Divider, Button } from "@material-ui/core";
import { contact } from '../../portfolio'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1 id="about__name">
          Hello! I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='group__button'>
          {resume && (
            <a href={resume}>
              <Button type='button'>
                Resume
              </Button>
            </a>
          )}

          <a href={`mailto:${contact.email}`}>
            <Button type='button'>
              Email
            </Button>
          </a>
      </div>

      <div className='group__icon'>
        {social && (
            <>
              {social.github && (
                <a
                  href={social.github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}

              {social.linkedin && (
                <a
                  href={social.linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}

              {social.vsco && (
                <a
                  href={social.vsco}
                  aria-label='vsco'
                  className='link link--icon'
                >
                  <CollectionsIcon />
                </a>
              )}

            </>
          )}
      </div>

    </div>
  )
}

export default About
