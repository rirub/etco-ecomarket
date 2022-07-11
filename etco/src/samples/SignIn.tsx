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
    const LogIn = () => {
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

                <svg id="로그인_메인_로고_텍스트" data-name="로그인 / 메인 로고 텍스트" xmlns="http://www.w3.org/2000/svg" width="165" height="71" viewBox="0 0 165 71">
                    <text id="Log_In" data-name="Log In" transform="translate(0 57)" fill="#03592c" font-size="58.63" font-family="Pretendard-SemiBold, Pretendard" font-weight="600"><tspan x="0" y="0">Log In</tspan></text>
                </svg>

                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />

                    <Button id="버튼_오브젝트_텍스트-로그인_">
                    <svg id="버튼_오브젝트_텍스트-로그인_" data-name="버튼 오브젝트(텍스트-로그인)" xmlns="http://www.w3.org/2000/svg" width="400.5" height="61" viewBox="0 0 400.5 61">
                        <g id="버튼_오브젝트_1d594d_" data-name="버튼 오브젝트(1d594d)">
                        <rect id="사각형_24" data-name="사각형 24" width="400.5" height="61" fill="#1d594d"/>
                        </g>
                        <text id="로그인" transform="translate(200.25 35.592)" fill="#fff" fontSize="16.854" fontFamily="Pretendard-Regular, Pretendard"><tspan x="-21" y="0">로그인</tspan></text>
                    </svg>
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Box sx={{alignItems: 'center'}}>
                        <Button id="그룹23" >
                            <svg id="그룹23" xmlns="http://www.w3.org/2000/svg" width="47.165" height="47.165" viewBox="0 0 47.165 47.165">
                                <g id="그룹_23" data-name="그룹 23" transform="translate(-860.725 -970.961)">
                                    <circle id="타원_1" data-name="타원 1" cx="23.582" cy="23.582" r="23.582" transform="translate(860.725 970.961)" fill="#fff100"/>
                                    <g id="그룹_22" data-name="그룹 22">
                                        <g id="그룹_21" data-name="그룹 21">
                                            <g id="그룹_20" data-name="그룹 20">
                                                <g id="그룹_19" data-name="그룹 19">
                                                    <g id="그룹_18" data-name="그룹 18">
                                                        <path id="패스_44" data-name="패스 44" d="M884.343,982.309c-7.33-.028-13.287,4.639-13.309,10.428-.014,3.723,2.435,7,6.124,8.872l-1.269,4.664a.377.377,0,0,0,.6.422l5.391-3.609a16.9,16.9,0,0,0,2.388.183c7.327.028,13.29-4.636,13.312-10.431S891.67,982.337,884.343,982.309Z" fill="#381e1e"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Button>
                        <Button id="그룹29">
                        <svg id="그룹29" xmlns="http://www.w3.org/2000/svg" width="47.165" height="47.165" viewBox="0 0 47.165 47.165">
                            <g id="그룹_29" data-name="그룹 29" transform="translate(-1012.111 -970.961)">
                                <circle id="타원_3" data-name="타원 3" cx="23.582" cy="23.582" r="23.582" transform="translate(1012.111 970.961)" fill="#e6e6e6"/>
                                <g id="그룹_28" data-name="그룹 28">
                                    <path id="패스_46" data-name="패스 46" d="M1030.235,989.043a.246.246,0,0,0,.032-.02,7.433,7.433,0,0,1,2.222-1.531,7.627,7.627,0,0,1,3.776-.672,7.793,7.793,0,0,1,1.575.278,7.62,7.62,0,0,1,2.414,1.181,6.535,6.535,0,0,1,.879.748c.025.027.045.073.1.02q.459-.471.924-.934.933-.93,1.869-1.858c.251-.25.5-.5.756-.748.065-.063.048-.094-.006-.149-.254-.256-.525-.494-.8-.726a12.612,12.612,0,0,0-2.259-1.515,13.173,13.173,0,0,0-2.2-.911,12.513,12.513,0,0,0-3.15-.558,13.064,13.064,0,0,0-1.4.006,13.586,13.586,0,0,0-1.393.154,12.885,12.885,0,0,0-5.924,2.64,8.722,8.722,0,0,0-1.035.934,8.362,8.362,0,0,0-.821.883,12.686,12.686,0,0,0-1.544,2.316,13.171,13.171,0,0,0-.88,2.137,12.486,12.486,0,0,0-.562,3.163,13.3,13.3,0,0,0,.007,1.4,13.587,13.587,0,0,0,.154,1.394,12.872,12.872,0,0,0,2.641,5.926,8.633,8.633,0,0,0,.934,1.034c.131.148.276.281.42.416a12.613,12.613,0,0,0,1.454,1.155,13,13,0,0,0,3.762,1.766,12.351,12.351,0,0,0,2.837.469c.468.021.94.019,1.41-.007a13.259,13.259,0,0,0,1.406-.154,12.86,12.86,0,0,0,5.924-2.64,8.625,8.625,0,0,0,1.052-.952,7.728,7.728,0,0,0,.8-.865,12.621,12.621,0,0,0,1.534-2.294,12.792,12.792,0,0,0,1.151-3.13,11.635,11.635,0,0,0,.3-2.472c0-.382.01-.763-.011-1.146a15.568,15.568,0,0,0-.2-1.641c-.018-.11-.062-.139-.171-.139q-6.183-.014-12.365-.037c-.118,0-.145.033-.145.147q0,2.434-.014,4.87c0,.117.031.146.146.146q2.39,0,4.781.011c.753,0,1.506.006,2.259.006.092,0,.115.012.077.111a7.864,7.864,0,0,1-1,1.854,9.039,9.039,0,0,1-.789.926c-.148.137-.289.282-.444.41a7.981,7.981,0,0,1-2,1.232,7.692,7.692,0,0,1-3.592.592,7.867,7.867,0,0,1-1.575-.279,7.639,7.639,0,0,1-2.3-1.1,8.469,8.469,0,0,1-1.049-.877c-.137-.147-.281-.288-.409-.443a8.218,8.218,0,0,1-1.152-1.818,7.732,7.732,0,0,1-.687-2.82,7.56,7.56,0,0,1,.115-1.75,7.731,7.731,0,0,1,1.367-3.2A8.874,8.874,0,0,1,1030.235,989.043Z" fill="#fefefe"/>
                                    <path id="패스_47" data-name="패스 47" d="M1041.169,1000.033a9.039,9.039,0,0,0,.789-.926,7.864,7.864,0,0,0,1-1.854c.038-.1.015-.111-.077-.111-.753,0-1.506,0-2.259-.006q-2.391-.006-4.781-.011c-.115,0-.147-.029-.146-.146q.012-2.434.014-4.87c0-.114.027-.147.145-.147q6.183.024,12.365.037c.109,0,.153.029.171.139a15.568,15.568,0,0,1,.2,1.641c.021.383.014.764.011,1.146a11.635,11.635,0,0,1-.3,2.472,12.792,12.792,0,0,1-1.151,3.13,12.621,12.621,0,0,1-1.534,2.294,7.728,7.728,0,0,1-.8.865Z" fill="#4285f3"/>
                                    <path id="패스_48" data-name="패스 48" d="M1035.01,1007.439a12.351,12.351,0,0,1-2.837-.469,13,13,0,0,1-3.762-1.766,12.613,12.613,0,0,1-1.454-1.155c-.144-.135-.289-.268-.42-.416.14-.132.282-.261.419-.4.248-.247.492-.5.741-.749.2-.2.414-.4.618-.6.256-.254.507-.513.763-.767q.3-.3.6-.587c.176-.172.34-.356.526-.518a8.469,8.469,0,0,0,1.049.877,7.639,7.639,0,0,0,2.3,1.1,7.867,7.867,0,0,0,1.575.279,7.692,7.692,0,0,0,3.592-.592,7.981,7.981,0,0,0,2-1.232c.155-.128.3-.273.444-.41l3.633,3.653a8.625,8.625,0,0,1-1.052.952,12.86,12.86,0,0,1-5.924,2.64,13.259,13.259,0,0,1-1.406.154" fill="#34a753"/>
                                    <path id="패스_49" data-name="패스 49" d="M1030.2,1000.012c-.186.162-.35.346-.526.518q-.3.292-.6.587c-.256.254-.507.513-.763.767-.2.2-.414.4-.618.6-.249.248-.493.5-.741.749-.137.136-.279.265-.419.4a8.633,8.633,0,0,1-.934-1.034,12.872,12.872,0,0,1-2.641-5.926,13.587,13.587,0,0,1-.154-1.394,13.3,13.3,0,0,1-.007-1.4,12.486,12.486,0,0,1,.562-3.163,13.171,13.171,0,0,1,.88-2.137,12.686,12.686,0,0,1,1.544-2.316,8.362,8.362,0,0,1,.821-.883c.031.034.062.069.094.1l1.626,1.635,1.907,1.924a8.874,8.874,0,0,0-.8.934,7.731,7.731,0,0,0-1.367,3.2,7.56,7.56,0,0,0-.115,1.75,7.732,7.732,0,0,0,.687,2.82,8.218,8.218,0,0,0,1.152,1.818C1029.923,999.724,1030.067,999.865,1030.2,1000.012Z" fill="#fabb05"/>
                                    <path id="패스_50" data-name="패스 50" d="M1030.235,989.043l-1.907-1.924-1.626-1.635c-.032-.033-.063-.068-.094-.1a8.722,8.722,0,0,1,1.035-.934,12.885,12.885,0,0,1,5.924-2.64,13.586,13.586,0,0,1,1.393-.154,13.064,13.064,0,0,1,1.4-.006,12.513,12.513,0,0,1,3.15.558,13.173,13.173,0,0,1,2.2.911,12.612,12.612,0,0,1,2.259,1.515c.276.232.547.47.8.726.054.055.071.086.006.149-.256.246-.505.5-.756.748q-.935.929-1.869,1.858-.465.464-.924.934c-.053.053-.073.007-.1-.02a6.535,6.535,0,0,0-.879-.748,7.62,7.62,0,0,0-2.414-1.181,7.793,7.793,0,0,0-1.575-.278,7.627,7.627,0,0,0-3.776.672,7.433,7.433,0,0,0-2.222,1.531A.246.246,0,0,1,1030.235,989.043Z" fill="#e94335"/>
                                </g>
                            </g>
                        </svg>
                        </Button>
                        <Button id="그룹27">
                            <svg id="그룹27" xmlns="http://www.w3.org/2000/svg" width="47.165" height="47.165" viewBox="0 0 47.165 47.165">
                                <g id="그룹_27" data-name="그룹 27" transform="translate(-936.418 -970.961)">
                                    <circle id="타원_2" data-name="타원 2" cx="23.582" cy="23.582" r="23.582" transform="translate(936.418 970.961)" fill="#49b648"/>
                                    <g id="그룹_26" data-name="그룹 26">
                                        <g id="그룹_25" data-name="그룹 25">
                                            <g id="그룹_24" data-name="그룹 24">
                                                <path id="패스_45" data-name="패스 45" d="M950.412,985.774c.014,5.847,0,11.694,0,17.541,2.19.012,4.383.009,6.571,0,.033-2.9-.04-5.8.039-8.7.719,1,1.374,2.051,2.107,3.044,1.226,1.9,2.614,3.7,3.792,5.636,2.205.058,4.41,0,6.616.034.023-.275.047-.548.047-.824-.032-5.58.026-11.161-.03-16.74-2.182-.017-4.361,0-6.541-.009-.017,2.915.017,5.831-.019,8.744-2.025-2.882-3.94-5.85-6.013-8.7C954.8,985.708,952.6,985.778,950.412,985.774Z" fill="#fff"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Button>
                    </Box>
                </Box>
            </Box>
            </div>
        );
    };

export default LogIn;