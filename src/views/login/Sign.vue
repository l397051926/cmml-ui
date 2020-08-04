<template>
  <div>
    <div class="sign-name">
      <h1>注册用户</h1>
    </div>
    <div class="sign-form">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="userName">
          <el-input type="userName" v-model="ruleForm.userName" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input type="password" v-model="ruleForm.passWord" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="单位" prop="unit">
          <el-input type="text" v-model="ruleForm.unit" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="text" v-model="ruleForm.email" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input type="text" v-model="ruleForm.phone" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="loginPage">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {request} from '@/utils/request'
  export default {
    name: 'Sign',
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.passWord) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return {
        ruleForm: {
          userName: '',
          passWord: '',
          checkPass: '',
          unit: '',
          phone: '',
          email: ''
        },
        rules: {
          userName: [
            {validator: checkUser, trigger: 'blur'}
          ],
          passWord: [
            {validator: checkPass, trigger: 'blur'}
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('username:  ' + this.ruleForm.userName +
                      ' pass word: ' + this.ruleForm.passWord +
                      'check pass word: ' + this.ruleForm.checkPass +
                      'unit: ' + this.ruleForm.unit +
                      'email: ' + this.ruleForm.email +
                      'phone: ' + this.ruleForm.phone)

            request({
              url: '/user/user-info/add',
              method: 'POST',
              data: {
                userName: this.ruleForm.userName,
                passWord: this.ruleForm.passWord,
                unit: this.ruleForm.unit,
                email: this.ruleForm.email,
                phone: this.ruleForm.phone
              }
            }).then(res => {
              this.$router.replace('/login')
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      loginPage () {
        this.$router.replace('/login')
      }
    }
  }
</script>

<style scoped>
  .sign-name{
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .sign-form {
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
