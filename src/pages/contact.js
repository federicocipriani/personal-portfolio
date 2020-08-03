import React from 'react';
import Layout from '../components/layout';
import contactStyles from './contact.module.scss';
import Head from '../components/head';
import { useState } from 'react';

class ContactPage extends React.Component {
    // const [messageSent, setMessageSent] = useState(false);

    // const sentMessage = () => {
    //     setMessageSent(!messageSent);
    // };

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        messageSent: false,
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            messageSent: true,
        });
    };

    render() {
        return (
            <Layout>
                <Head title='Contact' />
                <section className='page'>
                    <h1 className='page__title'>Contact</h1>
                    <div className={contactStyles.page__content}>
                        <div className={contactStyles.contact_form}>
                            <h2 className={contactStyles.contact_form__label}>
                                Get in touch!
                            </h2>
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Your name'
                                    className={contactStyles.inputField}
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                />
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    placeholder='Your e-mail'
                                    className={contactStyles.inputField}
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                />
                                <input
                                    type='text'
                                    name='subject'
                                    id='subject'
                                    placeholder='A title'
                                    className={contactStyles.inputField}
                                    value={this.state.subject}
                                    onChange={this.handleInputChange}
                                />
                                <textarea
                                    name='message'
                                    id='message'
                                    rows='5'
                                    placeholder='Message in here!'
                                    className={contactStyles.textArea}
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                />
                                <div className={contactStyles.send_form}>
                                    <button
                                        type='submit'
                                        className={contactStyles.btn_send}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}>
                                        <i class='ri-send-plane-fill'></i>
                                        Send
                                    </button>
                                    <div
                                        className={
                                            this.state.messageSent
                                                ? contactStyles.send_form_messageSent
                                                : contactStyles.send_form_messageNotSent
                                        }>
                                        <i class='ri-check-line'></i>
                                        <p>Message sent!</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className={contactStyles.social_contacts}>
                            <h3>You can also find me here</h3>
                            <div
                                className={
                                    contactStyles.social_contacts__links
                                }>
                                <a
                                    href='https://www.linkedin.com/in/federicocipriani/'
                                    target='_blank'
                                    className={
                                        contactStyles.social_contacts__links__item
                                    }>
                                    <i class='ri-linkedin-line ri-2x'></i>
                                </a>
                                <a
                                    href='https://twitter.com/cipriani_fc'
                                    target='_blank'
                                    className={
                                        contactStyles.social_contacts__links__item
                                    }>
                                    <i class='ri-twitter-line ri-2x'></i>
                                </a>
                                <a
                                    href='https://github.com/federicocipriani'
                                    target='_blank'
                                    className={
                                        contactStyles.social_contacts__links__item
                                    }>
                                    <i class='ri-github-line ri-2x'></i>
                                </a>
                            </div>
                            <h3>or you can drop me an e-mail</h3>
                            <div
                                className={
                                    contactStyles.social_contacts__links
                                }>
                                <a
                                    href='mailto:federicocipriani.fc@gmail.com'
                                    className={
                                        contactStyles.social_contacts__links__item
                                    }>
                                    <i class='ri-mail-send-line ri-2x'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default ContactPage;

{
    /* <form
                            method='post'
                            action='/contact'
                            netlify-honeypot='bot-field'
                            data-netlify='true'
                            name='contact'>
                            <input type='hidden' name='bot-field' />
                            <input
                                type='hidden'
                                name='form-name'
                                value='contact'
                            />

                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Your name'
                                className={contactStyles.inputField}
                            />

                            <input
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Your e-mail'
                                className={contactStyles.inputField}
                            />

                            <input
                                type='text'
                                name='subject'
                                id='subject'
                                placeholder='A title'
                                className={contactStyles.inputField}
                            />

                            <textarea
                                name='message'
                                id='message'
                                rows='5'
                                placeholder='Message in here!'
                                className={contactStyles.textArea}
                            />
                            <div className={contactStyles.send_form}>
                                <button
                                    type='submit'
                                    onClick={sentMessage}
                                    className={contactStyles.btn_send}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}>
                                    <i class='ri-send-plane-fill'></i>
                                    Send
                                </button>
                                <div
                                    className={
                                        messageSent
                                            ? contactStyles.send_form_messageSent
                                            : contactStyles.send_form_messageNotSent
                                    }>
                                    <i class='ri-check-line'></i>
                                    <p>Message sent!</p>
                                </div>
                            </div>
                        </form> */
}
