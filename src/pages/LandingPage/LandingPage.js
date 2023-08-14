import React from 'react'
import './landing.css'
import LinkList from '../../components/LinkList/LinkList';

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <div className='mainArea'>
        <div className="moonHolder"></div>
        <h3 className='logo'>Palace D' Alma</h3>
        <div className="mainLinks">
          <LinkList title="OPENINGS" items={['Open 24/7']}/>
          <LinkList title="RAPID LINKS" items={['Virtual Tour','Book now', 'Experiences','Meeting Room']}/>
          <LinkList title="CONTACTS" items={['108A, Muiz Banire Close', 'Lekki Phase 1, Lekki','(+234) 01 23 5432']}/>
        </div>
      </div>
    </div>
  );
}

export default LandingPage