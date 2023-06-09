import React from 'react';
import {BsFillTelephoneFill, BsFillEnvelopeFill} from 'react-icons/bs'


import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(faTrash, faPhone, faEnvelope)

const Head = () => {
    return (
        <>
            <section className={"head"}>
                <div className={"container d_flex"}>
                    <div className="left row">
                        {/*<FontAwesomeIcon icon="trash" />*/}
                        <i>
                            {/*<FontAwesomeIcon icon="phone" />*/}
                            <BsFillTelephoneFill></BsFillTelephoneFill>
                        </i>
                        <label>+88012 3457 7894</label>
                        <i>
                            {/*<FontAwesomeIcon icon="envelope" />*/}
                            <BsFillEnvelopeFill></BsFillEnvelopeFill>
                        </i>
                        <label>example@gmail.com</label>
                        {/*<i className="fa fa-envelope"></i>*/}
                    </div>
                    <div className={"right row RText"}>
                        <label>Theme FAQ'S</label>
                        <label>Need Helps</label>
                        <span></span>
                        <label htmlFor={""}>EN</label>
                        <span></span>
                        <label htmlFor={""}>USD</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export  default Head