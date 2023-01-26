import { useState, useEffect } from 'react'
import styles from '../styles/Global'
import assets from '../assets'

export const Newsletter = ({ status, message, onValidated }) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email
            })
    }

    const clearFields = () => {
        setEmail('');
    }

    return (
        <div className={`${styles.section} ${styles.bgWhite}`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div>
                    <h1 className={`${styles.h1Text} ${styles.blackText}`}>
                        Newsletter
                    </h1>
                    <p className={`${styles.pText} ${styles.blackText}`}>Never miss latest updates</p>
                </div>
                <div className={styles.flexCenter}>
                    <div>
                        <form onSubmit={handleSubmit} >
                            <div className={''}>
                                <input className={styles.inputNews} value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                <button className={styles.btnPrimary}>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Newsletter