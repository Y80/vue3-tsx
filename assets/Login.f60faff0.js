import{r as e,h as a,i as s,d as n,e as r,j as l,F as i,I as o,B as t}from"./vendor.78de62db.js";/* empty css              *//* empty css              */import{s as d,r as u}from"./index.fc03a1d2.js";var m="_login_1wbe2_1";const h={username:{required:!0,message:"账号不能为空",trigger:"blur"},password:{required:!0,message:"密码不能为空",trigger:"blur"}};function p(){const n=e({username:"admin",password:"123456"}),r=a(!1);return{model:n,rules:h,handleFinish:function(){var e,a;r.value=!0,(e=n.username,a=n.password,new Promise(((s,n)=>{setTimeout((()=>{"admin"===e&&"123456"===a?s({token:"this is a token string",username:"y80",role:"Admin"}):n(new Error("密码或账户错误"))}),2e3)}))).then((e=>{s.success("登录成功"),d.dispatch("setToken",e).then((()=>{u.push("/home")}))})).catch((e=>{s.error(e.message)})).finally((()=>{r.value=!1}))},handleFinishFailed:function(){s.warn("请检查您的输入")},submitting:r}}var c=n({setup:function(){const e=p();return()=>r("div",{class:m},[r("h1",null,[l("后台管理系统")]),r(i,{model:e.model,rules:e.rules,onFinish:e.handleFinish,onFinishFailed:e.handleFinishFailed,labelCol:{span:4},wrapperCol:{span:20}},{default:()=>[r(i.Item,{label:"账号",name:"username"},{default:()=>[r(o,{allowClear:!0,value:e.model.username,onChange:a=>{e.model.username=a.target.value}},null)]}),r(i.Item,{label:"密码",name:"password"},{default:()=>[r(o.Password,{name:"password",value:e.model.password,onChange:a=>{e.model.password=a.target.value}},null)]}),r(t,{type:"primary",htmlType:"submit",size:"large",block:!0,loading:e.submitting.value},{default:()=>[l("登录")]})]})])}});export default c;
