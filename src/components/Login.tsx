import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { firebaseAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../service/firebase";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const HeaderText = styled.div`
  width: 100%;
  font-size: 17px;
  color: #868686;
  text-align: center;
  position: absolute;
  top: 20;
  left: 0;
  right: 0;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 1;
  justify-content: center;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 18px;
  border: none;
  border-bottom: 2px solid #E1E1E1;
  height: 50px;
  width: 100%;
  background-color: transparent;

  &::placeholder {
    color: #E1E1E1;
  }
`

const Caption = styled.div`
  width: 100%;
  font-size: 15px;
  color: #868686;
  margin-top: 10px;
`

const SubmitButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  font-size: 15px;
  text-align: center;
  background-color: #000000;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  font-weight: 700;
`

const ChangeButton = styled.span`
  margin-left: 5px;
  font-family: Neo Bold;
`

const ErrorMessage = styled.div`
  color: red;
`

interface FormText {
  headerText: string,
  submitButtonText: string,
  captionText: string,
  changeButtonText: string,
}

interface InputData {
  email: string,
  password: string
}

function Login() {
  const navigate = useNavigate();
  const [formText, setFormText] = useState<FormText>({
    headerText: '로그인', 
    submitButtonText: '로그인',
    captionText: '회원이 아니신가요?',
    changeButtonText: '회원가입'
  });

  const [inputData, setInputData] = useState<InputData>({
    email: '',
    password: ''
  });

  const [errorMsg, setErrorMsg] = useState('')

  const changeFormText = () => {
    setInputData({ email: '', password: '' });
    setErrorMsg('');
    formText.headerText === '로그인' ?
    setFormText({
      headerText: '회원가입',
      submitButtonText: '회원가입',
      captionText: '계정이 이미 있으신가요?',
      changeButtonText: '로그인'
    })
    : 
    setFormText({
      headerText: '로그인', 
      submitButtonText: '로그인',
      captionText: '회원이 아니신가요?',
      changeButtonText: '회원가입'
    });
  }

  const onChangeInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name === "email" ?
    setInputData({
      ...inputData,
      email: e.target.value
    })
    :
    setInputData({
      ...inputData,
      password: e.target.value
    });
  }

  const onClickSubmitButton = async () => {
    setErrorMsg('');
    if(formText.headerText === '로그인') {
      try {
        const currentUser = await signInWithEmailAndPassword(firebaseAuth, inputData.email, inputData.password);
        sessionStorage.setItem("uid", currentUser.user.uid);
        navigate("/");
        setInputData({ email: '', password: '' });
      } catch (e: any) {
        switch (e.code) {
          case 'auth/user-not-found':
            setErrorMsg('계정을 찾을 수 없습니다');
            break;
          case 'auth/wrong-password':
            setErrorMsg('비밀번호를 다시 확인해주세요');
            break;
          default:
            setErrorMsg('잘못된 요청입니다')
        }
      }
    } else if(formText.headerText === '회원가입') {
      try {
        const user = await createUserWithEmailAndPassword(firebaseAuth, inputData.email, inputData.password);
        console.log(user);
        changeFormText();
      } catch (e: any) {
        switch (e.code) {
          case 'auth/weak-password':
            setErrorMsg('비밀번호는 6자리 이상이어야 합니다');
            break;
          case 'auth/invalid-email':
            setErrorMsg('잘못된 이메일 주소입니다');
            break;
          case 'auth/email-already-in-use':
            setErrorMsg('이미 가입되어 있는 계정입니다');
            break;
          default:
            setErrorMsg('잘못된 요청입니다');
        }
      }
    } else {
      setErrorMsg('잘못된 요청입니다.');
    }
  }

  return (
    <Container>
      <HeaderText>{formText.headerText}</HeaderText>
      <InputWrapper>
        <Input 
          placeholder='이메일' 
          name='email' 
          value={inputData.email} 
          onChange={onChangeInputData} 
          autoComplete="false"
        />
        <Input 
          placeholder='비밀번호' 
          name='password' 
          type='password'
          value={inputData.password} 
          onChange={onChangeInputData} 
          autoComplete="false"
        />
        <SubmitButton onClick={onClickSubmitButton}>{formText.submitButtonText}</SubmitButton>
        <Caption>
          {formText.captionText}
          <ChangeButton onClick={changeFormText}>
            {formText.changeButtonText}
          </ChangeButton>
        </Caption>
        <ErrorMessage>{errorMsg}</ErrorMessage>
      </InputWrapper>
    </Container>
  )
}

export default Login;
