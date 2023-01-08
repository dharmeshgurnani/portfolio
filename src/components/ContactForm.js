import React, { useState } from 'react';
import $ from 'jquery';
import '../client/scss/components/ContactForm.scss'
import '../client/components/ContactForm.js'
import eventEmitter from '../../src/utils/EventEmitter.js'
import { AwesomeButtonProgress } from 'react-awesome-button';

/* TODO: [bug] api calls not happing on first call
** [Description] page gets reloaded form is able to submit only if its been refreshed once thorough the bug.  
*/

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <form id='ContactForm' className="ContactForm" data-aos="flip-left">
      <div className="form-group">
        <label htmlFor="name">
          Your Name
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="email">
          Your Email
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="message">
          Your message
          <textarea
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <AwesomeButtonProgress
        type="primary"
        action={(element, next) => {
          var eventObject = {
            initator:element,
            element:$("#ContactForm"),
          }
          eventEmitter.emit('contact.submit', eventObject);
          eventEmitter.on('contact.submit.success', () => {
            next();
          });
        }}
      >
        Send Message
      </AwesomeButtonProgress>
    </form>
  );
}
