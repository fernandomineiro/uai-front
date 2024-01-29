/**
 *
 * SignupProvider
 *
 */

import React from 'react';

import { GoogleIcon, FacebookIcon } from '../Icon';
import { API_URL } from '../../../constants';

const SignupProvider = () => {
  return (
    <div className='signup-provider'>
      <a href={`${API_URL}/auth/google`} className='mb-2 google-btn'>
        <GoogleIcon />
        <span className='btn-text'>Login com Google</span>
      </a>

      <a href={`${API_URL}/auth/facebook`} className='facebook-btn'>
        <FacebookIcon />
        <span className='btn-text'>Login com Facebook</span>
      </a>
    </div>
  );
};

export default SignupProvider;
