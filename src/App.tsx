import Wrapper from "./components/Wrapper";
import Title from "./components/Title_component";
import Window from "./components/Main_window";
import edna_logo_gif from  "../images/edna_gif.gif";
import Captcha from "../images/Captcha.png";
import Visibility_On from "../images/visibility-on.svg";
import Visibility_Off from "../images/visibility-off.svg";

import Image_Wrapper from "./components/Image_wrapper";
import Login_Frame from "./components/Login_Frame";
import Input_Field from "./components/Input_Field";
import Small_Grey_Text from "./components/Small_Grey_Text";
import Input_text from "./components/Input_text";
import Bottom_Frame from "./components/Bottom_Frame";
import Forgot_Password from "./components/Forgot_Password";
import Entry_Button from "./components/Entry_Button";
import Sign_In from "./components/Sign_In";
import Footer from "./components/Footer";
import Footer_Text from "./components/Footer_Text";

import {useForm, SubmitHandler} from "react-hook-form";

import React, {useState} from "react";
import Visibility from "./components/Visibility";

export const App = () => {

    //Скрыть-показать пароль
    const [open, setOpen] = useState(false);
    const toggle = () =>{
        setOpen(!open)
    };

    return (
        <div>
            <Wrapper>
                <Window>
                    <Image_Wrapper>
                        <img src={edna_logo_gif} style={{width: '400px', height: '400px'}} alt={''}/>
                    </Image_Wrapper>
                    <Login_Frame>
                        <Title>Вход в аккаунт</Title>

                        <Input_Field>
                            <Small_Grey_Text>Е-mail</Small_Grey_Text>
                            <Input_text placeholder = "company.com"></Input_text>
                            <div style={{height: '1px', alignSelf: 'stretch'}}></div>
                        </Input_Field>

                        <Input_Field>
                            <Small_Grey_Text>Пароль</Small_Grey_Text>
                            <Input_text placeholder = "●●●●●●●●●●●●●●●●" type={(!open ? 'password' : 'text')}></Input_text>
                            <div style={{height: '12px', alignSelf: 'stretch'}}></div>

                            {
                                ///Меняем иконку (открытый закрытый глаз)
                                !open ? <Visibility src={Visibility_On} onClick={toggle}/> : <Visibility src={Visibility_Off} onClick={toggle}/>
                            }

                        </Input_Field>

                        <img src={Captcha} style={{position: 'relative',left: "-3px"}} alt={''}/>


                        <Input_Field>
                            <Small_Grey_Text>Цифры с картинки</Small_Grey_Text>
                            <Input_text placeholder = "00000"></Input_text>
                            <div style={{height: '12px', alignSelf: 'stretch'}}></div>
                        </Input_Field>


                        <Bottom_Frame>
                            <Forgot_Password href={'/'}>Забыли пароль?</Forgot_Password>
                            <Entry_Button href={'/'}>Войти</Entry_Button>
                        </Bottom_Frame>
                        <Sign_In>Еще нет аккаунта?<a href={'/'} style={{color:'black', marginLeft: '3px'}}>Зарегистрируйтесь</a> </Sign_In>
                    </Login_Frame>
                </Window>
            </Wrapper>
            <Footer>
                <Footer_Text>© 2005 – 2020 edna <a href={'/'} style={{color:'#E5E5E5', marginLeft: '3px', textDecoration:"none"}}>Поддержка</a></Footer_Text>
            </Footer>
        </div>
    )
}