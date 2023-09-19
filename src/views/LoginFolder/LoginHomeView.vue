<template>
    <v-sheet  class="mx-auto">
        <v-form @submit.prevent>
            <v-text-field label="Email"></v-text-field>
            <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-form>
        <div class="ant-form-item css-d5t39c ant-form-item-has-success">
            <div class="ant-row ant-form-item-row css-d5t39c">
                <div class="ant-col ant-form-item-control css-d5t39c">
                    <div class="ant-form-item-control-input">
                        <div class="ant-form-item-control-input-content">
                            <div id="login-form_remember" class="ant-row ant-row-space-between css-d5t39c">
                                <label class="ant-checkbox-wrapper ant-checkbox-wrapper-in-form-item css-d5t39c">
                                    <span class="ant-checkbox css-d5t39c">
                                        <input  type="checkbox" id="remember" name="remember" value="remember">
                                    </span>
                                    <span >Remember me</span>
                                </label>
                                <router-link :to="{name: 'reset-password'}" class="my-link_my-link__wIenB undefined" >Forgot Password?</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-btn type="submit" block class="mt-2 button-login">Login</v-btn>
        <div class="ant-form-item css-d5t39c">
            <div class="ant-row ant-form-item-row css-d5t39c">
                <div class="ant-col ant-form-item-control css-d5t39c">
                    <div class="ant-form-item-control-input">
                        <div class="ant-form-item-control-input-content">
                            <div style="text-align: center;">or</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-btn type="button" block class="mt-2 button-google">
            <img  src="../../assets/login/google.png" width="20" height="20" alt="img" style="margin-right: 2px;"/>
            <span>Login with Google</span>
        </v-btn>
        <v-btn type="button" block class="mt-2 button-facebook"> 
            <img src="../../assets/login/fb.png" width="16" height="16" alt="img" style="margin-right: 2px;"/>
            <span>Login with Facebook</span>
        </v-btn>
        <v-btn type="button" block class="mt-2 button-linkedin">
            <img src="../../assets/login/linkedin.png" width="18" height="18" alt="img" style="margin-right: 2px;"/>
            <span>Login with Linkedin</span>
        </v-btn>
        <div class="ant-form-item css-d5t39c ant-form-item-has-success">
            <div class="ant-row ant-form-item-row css-d5t39c">
                <div class="ant-col ant-form-item-control css-d5t39c">
                    <div class="ant-form-item-control-input">
                        <div class="ant-form-item-control-input-content">
                            <div class="ant-row ant-row-center css-d5t39c">
                                <router-link :to="{name: 'registration_view'}"  class="my-link_my-link__wIenB undefined">
                                    Create an account
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </v-sheet>
</template>
<script>
  export default {
    data: () => ({
      firstName: '',
      show1: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
        },
    }),
  }
</script>
<style>
.v-sheet.v-theme--light.mx-auto {
    background-color: transparent;
}
.v-field__field {
    background: #fff ;
}

:where(.css-d5t39c)[class^="ant-row"], :where(.css-d5t39c)[class*=" ant-row"] {
    font-family: Mulish,sans-serif!important;
    font-size: 14px;
    box-sizing: border-box;
}
:where(.css-d5t39c).ant-row {
    display: flex;
    flex-flow: row wrap;
    min-width: 0;
}
:where(.css-d5t39c).ant-row-center {
    justify-content: center;
}
.register-type_registerType__text__nXxzI {
    font-size: 13px;
    margin-top: 16px;
}
:where(.css-d5t39c) a {
    color: #1aa94c;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
    -webkit-text-decoration-skip: objects;
}
[role=button], a, area, button, input:not([type=range]), label, select, summary, textarea {
    touch-action: manipulation;
}

button.v-btn.v-btn--block.v-btn--elevated.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.mt-2.button-login {
    background: #1aa94c;
    color: #fff;
    text-transform: none;

}
button.v-btn.v-btn--block.v-btn--elevated.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.mt-2.button-google {
    background: #dd4b39;
    color: #fff;
    text-transform: none;

}
button.v-btn.v-btn--block.v-btn--elevated.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.mt-2.button-facebook {
    background: #3b5998;
    color: #fff;
    text-transform: none;

}
button.v-btn.v-btn--block.v-btn--elevated.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.mt-2.button-linkedin {
    background: #2b7ab6;
    color: #fff;
    text-transform: none;

}



:where(.css-d5t39c).ant-form-item {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    margin-bottom: 24px;
    vertical-align: top;
}
.ant-form-item {
    margin-bottom: 10px!important;
}
:where(.css-d5t39c)[class^="ant-form"] [class^="ant-form"], :where(.css-d5t39c)[class*=" ant-form"] [class^="ant-form"], :where(.css-d5t39c)[class^="ant-form"] [class*=" ant-form"], :where(.css-d5t39c)[class*=" ant-form"] [class*=" ant-form"] {
    box-sizing: border-box;
}
:where(.css-d5t39c).ant-form-vertical .ant-form-item-row {
    flex-direction: column;
}
:where(.css-d5t39c)[class^="ant-form"] [class^="ant-form"], :where(.css-d5t39c)[class*=" ant-form"] [class^="ant-form"], :where(.css-d5t39c)[class^="ant-form"] [class*=" ant-form"], :where(.css-d5t39c)[class*=" ant-form"] [class*=" ant-form"] {
    box-sizing: border-box;
}
:where(.css-d5t39c).ant-form-item .ant-form-item-control {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
:where(.css-d5t39c).ant-form-item .ant-form-item-control:first-child:not([class^="'ant-col-'"]):not([class*="' ant-col-'"]) {
    width: 100%;
}
:where(.css-d5t39c).ant-form-vertical .ant-form-item .ant-form-item-control {
    width: 100%;
}
:where(.css-d5t39c).ant-form-item .ant-form-item-control-input {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 32px;
}
:where(.css-d5t39c).ant-form-large .ant-form-item .ant-form-item-control-input {
    min-height: 40px;
}
:where(.css-d5t39c).ant-form-item .ant-form-item-control-input-content {
    flex: auto;
    max-width: 100%;
}
:where(.css-d5t39c).ant-row {
    display: flex;
    flex-flow: row wrap;
    min-width: 0;
}
:where(.css-d5t39c).ant-row-space-between {
    justify-content: space-between;
}
:where(.css-d5t39c)[class^="ant-row"] [class^="ant-row"], :where(.css-d5t39c)[class*=" ant-row"] [class^="ant-row"], :where(.css-d5t39c)[class^="ant-row"] [class*=" ant-row"], :where(.css-d5t39c)[class*=" ant-row"] [class*=" ant-row"] {
    box-sizing: border-box;
}

:where(.css-d5t39c).ant-checkbox-wrapper {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    display: inline-flex;
    align-items: baseline;
    cursor: pointer;
}
:where(.css-d5t39c).ant-form label {
    font-size: 14px;
}


:where(.css-d5t39c).ant-checkbox {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    position: relative;
    white-space: nowrap;
    cursor: pointer;
    align-self: start;
    transform: translate(0, 3px);
}
:where(.css-d5t39c)[class^="ant-checkbox"] [class^="ant-checkbox"], :where(.css-d5t39c)[class*=" ant-checkbox"] [class^="ant-checkbox"], :where(.css-d5t39c)[class^="ant-checkbox"] [class*=" ant-checkbox"], :where(.css-d5t39c)[class*=" ant-checkbox"] [class*=" ant-checkbox"] {
    box-sizing: border-box;
}


:where(.css-d5t39c).ant-checkbox .ant-checkbox-input {
    position: absolute;
    inset: 0;
    z-index: 1;
    cursor: pointer;
    opacity: 0;
    margin: 0;
}
:where(.css-d5t39c).ant-form input[type="radio"], :where(.css-d5t39c).ant-form input[type="checkbox"] {
    line-height: normal;
}
:where(.css-d5t39c).ant-checkbox-wrapper.ant-checkbox-wrapper-in-form-item input[type="checkbox"] {
    width: 14px;
    height: 14px;
}
:where(.css-d5t39c).ant-checkbox .ant-checkbox-inner {
    box-sizing: border-box;
    position: relative;
    top: 0;
    inset-inline-start: 0;
    display: block;
    width: 16px;
    height: 16px;
    direction: ltr;
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    border-collapse: separate;
    transition: all 0.3s;
}
:where(.css-d5t39c).ant-checkbox+span {
    padding-inline-start: 8px;
    padding-inline-end: 8px;
}
:where(.css-d5t39c).ant-form-item {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    margin-bottom: 24px;
    vertical-align: top;
}
.ant-form-item {
    margin-bottom: 10px!important;
}
:where(.css-d5t39c).ant-form-vertical .ant-form-item-row {
    flex-direction: column;
}
:where(.css-d5t39c).ant-form-item .ant-form-item-control {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
:where(.css-d5t39c).ant-form-vertical .ant-form-item .ant-form-item-control {
    width: 100%;
}
:where(.css-d5t39c).ant-form-item .ant-form-item-control:first-child:not([class^="'ant-col-'"]):not([class*="' ant-col-'"]) {
    width: 100%;
}

:where(.css-d5t39c).ant-form-item .ant-form-item-control-input {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 32px;
}
:where(.css-d5t39c).ant-form-large .ant-form-item .ant-form-item-control-input {
    min-height: 40px;
}
:where(.css-d5t39c).ant-form-item .ant-form-item-control-input-content {
    flex: auto;
    max-width: 100%;
}
:where(.css-d5t39c).ant-row-center {
    justify-content: center;
}
:where(.css-d5t39c).ant-row {
    display: flex;
    flex-flow: row wrap;
    min-width: 0;
}
:where(.css-d5t39c) a {
    color: #1aa94c;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
    -webkit-text-decoration-skip: objects;
}
</style>