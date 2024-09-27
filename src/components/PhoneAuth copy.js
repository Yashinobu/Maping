// components/PhoneAuth.js
import { useState } from 'react';
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from '../lib/firebase';
import axios from 'axios';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function PhoneAuth() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState('');
    const [phoneFlag, setPhoneFlag] = useState(false)
    const [btnFlag, setBtnFlag] = useState(true)

    const setupRecaptcha = () => {
        if (window.recaptchaVerifier) {
            window.recaptchaVerifier.clear();
        }
        window.recaptchaVerifier = new RecaptchaVerifier(auth,
            'recaptcha-container',
            {
                'size': 'normal',
                'callback': () => {
                    sendCode()
                },
                'expired-callback': function () {
                    // Handle reCAPTCHA expiration
                    console.log('reCAPTCHA expired. Reinitializing...');
                    window.recaptchaVerifier.clear();
                    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
                }
            },
            auth
        );
    };

    const sendCode = async () => {
        console.log("TTTTT")
        setupRecaptcha();
        const appVerifier = window.recaptchaVerifier;
        const pNumber = "+" + phoneNumber
        console.log("!!@", pNumber.trim())

        try {
            console.log("EEEEE")

            const confirmationResult = await signInWithPhoneNumber(auth, pNumber.trim(), appVerifier);
            console.log('Code sent to phone', confirmationResult.verificationId);
            setVerificationId(confirmationResult.verificationId);
            console.log('Code sent to phone1');

        } catch (error) {
            if (error.code === 'auth/internal-error') {
                console.error('Internal error occurred, retrying...');
                setTimeout(() => {
                    sendCode(phoneNumber);  // Retry sending the code
                }, 3000);  // Retry after 3 seconds
            } else {
                console.error('Error sending SMS:', error);
            }
        }
    };

    const verifyCode = async () => {
        try {
            const response = await axios.post('/api/verifyPhone', { verificationId, code });
            const { customToken } = response.data;

            await auth.signInWithCustomToken(customToken);
            alert('Phone authentication successful!');
        } catch (error) {
            console.error('Error verifying code:', error);
            alert('Verification failed');
        }
    }

    const handlePhoneChange = (phone) => {
        console.log("+" + phone)
        setPhoneFlag(phone.length <= 7 || phone.length > 15 ? true : false)
        setBtnFlag(phone.length <= 7 || phone.length > 15 ? true : false)
        setPhoneNumber(phone)
        console.log(phone)
    }

    return (
        <div>
            <div className='flex flex-col relative'>
                <div className="flex flex-col relative gap-1">
                    <label className="font-bold">電話番号</label>
                    <PhoneInput
                        country={"jp"}
                        enableSearch={true}
                        value={phoneNumber}
                        onChange={(phone) => handlePhoneChange(phone)}
                    />
                    {phoneFlag ? <label className="absolute bottom-[-20px] text-[10px] text-[#f30707]">Please input your phone number</label> : null}
                    {/* Recaptcha container */}
                    <div id="recaptcha-container" className='mt-2'></div>
                </div>
                {btnFlag ? <button className='absolute top-[165px] bg-[#DFDFDF] rounded-md w-full py-2'>次へ</button> : <button className='absolute top-[165px] bg-[#FBB03B] rounded-md w-full py-2' onClick={sendCode}>認証コードをおくる</button>}
            </div>


            {/* Verification code input */}
            {/* <div>
                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter verification code"
                />
                <button onClick={verifyCode}>Verify Code</button>
            </div> */}
        </div >
    );
};
