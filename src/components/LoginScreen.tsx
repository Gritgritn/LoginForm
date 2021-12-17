import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';

type FormValues = {
  Email: string;
  Password: string;
  Remember: boolean;
};

function LoginScreen() {
    let [loginError, setLoginError] = useState(false);
    let [email, setEmail] = useState('');
    let [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setLoading(true);
        await wait(1000);
        if(data.Email === 'steve.jobs@example.com' && data.Password === 'password'){
            setLoginError(false);
            navigate('/welcome');
        } else {
            setLoginError(true);
            setEmail(data.Email);
        }
        setLoading(false);
    };

  const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {!loginError?'':
                <div className='eror'>
                    <svg className='icon' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#FFC8C8"/><path d="M9.036 13.446V15H10.59V13.446H9.036ZM10.478 8.084V5.004H9.148V8.084L9.498 12.438H10.128L10.478 8.084Z" fill="#EE6565"/></svg>
                    <span className='error__text'>Пользователя {email} не существует</span>
                </div>}
            <p className='form__input-name'>Логин</p>
            <input type="text" placeholder="Email" {...register("Email", {required: 'Обязательное поле', pattern: /^\S+@\S+$/i})} />
            <span className='input__error-message'>{errors.Email?.message}</span>
            <p className='form__input-name'>Пароль</p>
            <input type="password" placeholder="Password" {...register("Password", {required: 'Обязательное поле'})} />
            <span className='input__error-message'>{errors.Password?.message}</span>
            <div className='remember__checkbox'>
                <input id="checkbox" type="checkbox" placeholder="Remember" {...register("Remember", {})} className="checkbox"/>
                <label htmlFor="checkbox">Запомнить меня</label>
            </div>
            <button type="submit" className={!isLoading?'submit':'submit submit__loading'}>Войти</button>
        </form>
  );
}

export default LoginScreen;