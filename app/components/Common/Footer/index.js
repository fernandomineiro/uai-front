/**
 *
 * Footer
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import Newsletter from '../../../containers/Newsletter';

const Footer = () => {
  const infoLinks = [
    { id: 0, name: 'Nosso contato', to: '/contact' },
    { id: 1, name: 'Venda com nós', to: '/sell' },
    { id: 2, name: 'Carros', to: '/shipping' }
  ];

  const footerBusinessLinks = (
    <ul className='support-links'>
      <li className='footer-link'>
        <Link to='/dashboard'>Account Details</Link>
      </li>
      <li className='footer-link'>
        <Link to='/dashboard/orders'>Orders</Link>
      </li>
    </ul>
  );

  const footerLinks = infoLinks.map(item => (
    <li key={item.id} className='footer-link'>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <footer className='footer'>
      <Container>
        <div className='footer-content'>
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>
Atendimento ao Cliente</h3>
            </div>
            <div className='block-content'>
              <ul>{footerLinks}</ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>Links</h3>
            </div>
            <div className='block-content'>
              <ul>{footerLinks}</ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>Notícias</h3>
              <Newsletter />
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <span>© {new Date().getFullYear()} UAI Semi-novos</span>
        </div>
        <ul className='footer-social-item'>
          <li>
            <a href='/#facebook' rel='noreferrer noopener' target='_blank'>
              <span className='facebook-icon' />
            </a>
          </li>
          <li>
            <a href='/#instagram' rel='noreferrer noopener' target='_blank'>
              <span className='instagram-icon' />
            </a>
          </li>
          <li>
            <a href='/#pinterest' rel='noreferrer noopener' target='_blank'>
              <span className='pinterest-icon' />
            </a>
          </li>
          <li>
            <a href='/#twitter' rel='noreferrer noopener' target='_blank'>
              <span className='twitter-icon' />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
