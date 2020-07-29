<template>
  <div>
    <div class="login-name">
      <h1>登录页面</h1>
    </div>
    <div class="login-form">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="userName">
          <el-input type="userName" v-model="ruleForm.userName" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input type="password" v-model="ruleForm.passWord" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="signPage">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {request} from '@/utils/request'

  export default {
    name: 'Login',
    data () {
      var checkUser = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'))
        }
        callback()
      }
      var checkPass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('密码不能为空'))
        }
        callback()
      }
      return {
        ruleForm: {
          userName: '',
          passWord: ''
        },
        rules: {
          userName: [
            {validator: checkUser, trigger: 'blur'}
          ],
          passWord: [
            {validator: checkPass, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('username: ' + this.ruleForm.userName + ' pass word:' + this.ruleForm.passWord)
            request({
              url: '/user/login',
              method: 'POST',
              data: {
                userName: this.ruleForm.userName,
                passWord: this.ruleForm.passWord
              }

            }).then(res => {
              this.$store.commit('setToken', res.data.data.token)
              this.$store.commit('setUserName', this.ruleForm.userName)
              this.$router.replace('/home')
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      signPage () {
        this.$router.replace('/sign')
      }
    }
  }
</script>

<style scoped>
  .login-name{
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .login-form {
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
