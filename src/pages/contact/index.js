import React, { useRef } from 'react';
import { withTranslation } from 'react-i18next';

import { navigate } from 'gatsby-link';

import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';

import facebook from '../../img/social/facebook.svg';
import instagram from '../../img/social/instagram.svg';
import twitter from '../../img/social/twitter.svg';
import linkedIn from '../../img/social/linkedIn.svg';
import youtube from '../../img/social/youtube.svg';

import Layout from '../../components/Layout';
import CustomNavbar from '../../components/CustomNavbar';
import Container from '../../components/Container';
import './style.sass';

const ContactPage = ({ t }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_r951ybm',
        'template_yy8hgea',
        form.current,
        '8WALsufFZOplDZPVf'
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate(form.current.getAttribute('action'));
        },
        (error) => {
          toast.error(t('contactSendError'));
        }
      );
  };

  return (
    <Layout>
      <ToastContainer />
      <Container>
        <CustomNavbar className="navbar-nopadding" />
      </Container>
      <div className="contact-container section">
        <Container>
          <h1 className="contact-title">{t('contactTitle')}</h1>
          <p className="text-us">{t('textUs')}</p>
          <form
            ref={form}
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={sendEmail}
            className="contact-form gc-form"
          >
            {/* left side */}
            <div className="info-container">
              <div className="info-left">
                <div>
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </div>
                  <div className="field">
                    <label className="contact-labels" htmlFor={'name'}>
                      {t('contactName')}
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="contact-labels" htmlFor={'email'}>
                      {t('contactEmail')}
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                </div>

                <div className="socials-container">
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-evenly',
                    }}
                  >
                    <p className="socials-text">+595 981 931 249</p>
                    <p className="socials-text">+595 981 631 303</p>
                    <p className="socials-text">contacto@girlscode.com.py</p>
                  </div>
                  <div className="socials socials-icon-container">
                    <a
                      title="Twitter"
                      href="https://twitter.com/pygirlscode"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img className="icon-color" src={twitter} alt="Twitter" />
                    </a>
                    <a
                      title="Facebook"
                      href="https://www.facebook.com/girlscodepy/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="icon-color"
                        src={facebook}
                        alt="Facebook"
                      />
                    </a>
                    <a
                      title="Instagram"
                      href="https://www.instagram.com/girlscodepy/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="icon-color"
                        src={instagram}
                        alt="Instagram"
                      />
                    </a>
                    <a
                      title="LinkedIn"
                      href="https://www.linkedin.com/company/girls-code/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="icon-color"
                        src={linkedIn}
                        alt="LinkedIn"
                      />
                    </a>
                    <a
                      title="Youtube"
                      href="https://www.youtube.com/channel/UCP6E5xXwLJ6OWtM4E1DSQvw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img className="icon-color" src={youtube} alt="youtube" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="field info-right">
                <label className="contact-labels" htmlFor={'message'}>
                  {t('contactMessage')}
                </label>
                <div className="control text-area-container">
                  <textarea
                    className="textarea"
                    name={'message'}
                    id={'message'}
                    required={true}
                  />
                </div>
              </div>
            </div>

            <div className="field">
              <button
                className="gc-button is-link is-dark-purple"
                type="submit"
              >
                {t('contactSend')}
              </button>
            </div>
          </form>
        </Container>
      </div>
    </Layout>
  );
};

export default withTranslation()(ContactPage);
