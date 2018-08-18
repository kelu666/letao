$(function(){
  
  $('#from').bootstrapValidator({
        fields:{
            username:{
              validators:{
                notEmpty:{
                  message:'用户名不能为空'
                },
                stringLength:{
                  min:2,
                  max:6,
                  message:'用户名长度在2-6之间'
                }
              }

            },
            password:{
              validators:{
                notEmpty:{
                  message:'用户名不能为空'
                },
                stringLength:{
                  min:6,
                  max:12,
                  message:'用户名长度在2-6之间'
                }
              }
            }
        }
    })
})