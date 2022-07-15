import React from 'react';
import {Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography} from "@mui/material";

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get('email'),
        password: data.get('password'),
    });
}
const SignUp = () => {
    return (
        <div>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <svg id="회원가입" xmlns="http://www.w3.org/2000/svg" width="203" height="69" viewBox="0 0 203 69">
                    <text id="회원가입" transform="translate(0 55)" fill="#03592c" font-size="58.63" font-family="Pretendard-SemiBold, Pretendard" font-weight="600"><tspan x="0" y="0">회원가입</tspan></text>
                </svg>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <strong>회원정보를 입력해주세요</strong>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="id"
                        label="아이디(영어, 소문자 및 숫자로만, 4~16자리)"
                        name="phone-number"
                        autoComplete="phone-number"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="비밀번호(영어, 숫자, 특수 문자 조합, 8~16자리)"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="pwCheck"
                        label="비밀번호 재확인"
                        type="pwCheck"
                        id="pwCheck"
                        autoComplete="pwCheck"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="name"
                        label="이름"
                        type="name"
                        id="name"
                        autoComplete="name"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="idnumber"
                        label="생년월일 ex) 961228"
                        type="idnumber"
                        id="idnumber"
                        autoComplete="idnumber"
                    />

                <strong>휴대전화 인증</strong>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="phonenum-input"
                        label="전화번호 입력(-제외)"
                        type="phonenum-input"
                        id="phonenum-input"
                        autoComplete="phonenum-input"
                    />
                    <Box>
                        <Button id="인증번호_전송">
                            <svg id="인증번호_전송" data-name="인증번호_전송" xmlns="http://www.w3.org/2000/svg" width="192" height="53" viewBox="0 0 92 20">
                                <g id="인증번호_전송" data-name="인증번호_전송">
                                    <rect id="사각형_24" data-name="사각형 24" width="600" height="61" fill="#1d594d"/>
                                </g>
                                <text id="인증번호_전송" data-name="인증번호 전송" transform="translate(200.25 35.592)" fill="#fff" fontSize="16.854" fontFamily="Pretendard-Regular, Pretendard"><tspan x="-21" y="0">인증번호 전송</tspan></text>
                            </svg>
                        </Button>
                    </Box>
                </Box>
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="auth-input"
                        label="인증번호를 입력"
                        type="auth-input"
                        id="auth-input"
                        autoComplete="phonenum-input"
                    />
                    <Box>
                        <Button id="인증번호_입력">
                            <svg id="인증번호_입력" data-name="버튼 오브젝트(1d594d)" xmlns="http://www.w3.org/2000/svg" width="192" height="53" viewBox="0 0 92 20">
                                <g id="버튼_오브젝트_1d594d_" data-name="버튼 오브젝트(1d594d)">
                                    <rect id="사각형_24" data-name="사각형 24" width="600" height="61" fill="#1d594d"/>
                                </g>
                                <text id="인증번호_입력" data-name="버튼 오브젝트(1d594d)" transform="translate(200.25 35.592)" fill="#fff" fontSize="16.854" fontFamily="Pretendard-Regular, Pretendard"><tspan x="-21" y="0">인증번호 전송</tspan></text>
                            </svg>
                        </Button>
                    </Box>
                </Box>





                    <Box>
                        <Button id="버튼_오브젝트_텍스트-로그인_"
                                type="submit"
                                fullWidth
                                sx={{ mt: 3, mb: 2 }}>
                            <svg id="버튼_오브젝트_텍스트-로그인_" data-name="버튼 오브젝트(텍스트-로그인)" xmlns="http://www.w3.org/2000/svg" height="61" viewBox="0 0 400.5 61">
                                <g id="버튼_오브젝트_1d594d_" data-name="버튼 오브젝트(1d594d)">
                                    <rect id="사각형_24" data-name="사각형 24" width="600" height="61" fill="#1d594d"/>
                                </g>
                                <text id="로그인" transform="translate(200.25 35.592)" fill="#fff" fontSize="16.854" fontFamily="Pretendard-Regular, Pretendard"><tspan x="-21" y="0">회원가입</tspan></text>
                            </svg>
                        </Button>
                    </Box>
                </Box>
                </Box>
        </div>
    );
};

export default SignUp;