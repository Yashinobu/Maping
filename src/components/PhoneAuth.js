// components/PhoneAuth.js
import { useState } from 'react';
import { auth, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider } from '../lib/firebase';
import axios from 'axios';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { useRouter } from "next/navigation";

export default function PhoneAuth() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [codeFlag, setCodeFlag] = useState(false);
    const [codeBtnFlag, setCodeBtnFlag] = useState(true);
    const [verificationId, setVerificationId] = useState('');
    const [phoneFlag, setPhoneFlag] = useState(false)
    const [btnFlag, setBtnFlag] = useState(true)

    const router = useRouter()

    const setupRecaptcha = () => {
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
        setupRecaptcha();
        try {
            const pNumber = "+" + phoneNumber
            const appVerifier = window.recaptchaVerifier;
            const confirmationResult = await signInWithPhoneNumber(auth, pNumber.trim(), appVerifier);
            console.log('VerificationId', confirmationResult.verificationId);
            setVerificationId(confirmationResult.verificationId);
            console.log('Code send');

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
            const response = await axios.post('http://13.115.207.73:5000/api/verifyPhone', { verificationId, code });
            const { customToken } = response.data;

            await auth.signInWithCustomToken(customToken);
            alert('Phone authentication successful!');
        } catch (error) {
            console.error('Error verifying code:', error);
            alert('Verification failed');
        }
    }

    const handlePhoneChange = (phone) => {
        setPhoneFlag(phone.length <= 7 || phone.length > 15 ? true : false)
        setBtnFlag(phone.length <= 7 || phone.length > 15 ? true : false)
        setPhoneNumber(phone)
    }

    const handleCodeChange = (e) => {
        setCodeFlag(e.target.value.length < 8 ? true : false)
        setCodeBtnFlag(e.target.value.length < 8 ? true : false)
        setCode(e.target.value)
    }

    const handleGoPass = () => {
        setVerificationId("1111111");
    }

    const handleSend = async () => {
        const phone = "+" + phoneNumber
        const password = code
        try {
            const response = await axios.post('http://13.115.207.73:5000/auth/register', { phone, password });
            const { userInfo } = response.data;
            console.log(userInfo)
            router.push('./Home')
        } catch (error) {
            console.log("Error: ", error)
        }
    }

    return (
        <div>
            {verificationId ? null : <div className='flex flex-col relative'>
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
                {btnFlag ? <button className='absolute top-[165px] bg-[#DFDFDF] rounded-md w-full py-2'>次へ</button> : <button className='absolute top-[165px] bg-[#FBB03B] rounded-md w-full py-2' onClick={handleGoPass}>認証コードをおくる</button>}
            </div>}



            {/* Verification code input */}
            {verificationId ? <div className='flex flex-col relative'>
                <div className='flex flex-col relative gap-1'>
                    <label className="font-bold">パスワード</label>
                    <input
                        type="password"
                        value={code}
                        onChange={handleCodeChange}
                        placeholder="Enter your password"
                        className='rounded-md w-full border-solid border-[2px] px-2 py-1 border-[#DFDFDF]'
                    />
                    {codeFlag ? <label className="absolute bottom-[-15px] text-[10px] text-[#f30707]">The password length is more than 8</label> : null}

                </div>
                {codeBtnFlag ? <button className='absolute top-[165px] bg-[#DFDFDF] rounded-md w-full py-2' >次へ</button> : <button className='absolute top-[165px] bg-[#FBB03B] rounded-md w-full py-2' onClick={handleSend}>次へ</button>}

            </div> : null}

        </div >
    );
};
