import React from 'react';
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';

export default function SocialLinks(props) {
  return (
    <div>
        <ul className='social-media-items'>
            <li>
                <a href={props.git} target='_blank'><BsGithub /></a>
            </li>
            <li>
                <a href={props.linedIn} target='_blank'><BsLinkedin /></a>
            </li>
            <li>
                <a href={props.twitter} target='_blank'><BsTwitter /></a>
            </li>
            <li>
                <a href={props.instagram} target='_blank'><BsInstagram /></a>
            </li>
        </ul>
    </div>
  )
}
