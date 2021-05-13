const Mock = require('mockjs')
const messages = [
	{
		id:1,
		content:"测试内容",
		send:"admin",
		reception:"1,2,3,4",
		time:"2021-04-21 10:34:20"
	},
	{
		id:2,
		content:"测试内容",
		send:"admin",
		reception:"1,2,3,4",
		time:"2021-04-21 10:34:20"
	},
	{
		id:2,
		content:"测试内容",
		send:"admin",
		reception:"1,2,3,4",
		time:"2021-04-21 10:34:20"
	},
	{
		id:4,
		content:"测试内容",
		send:"admin",
		reception:"1,2",
		time:"2021-04-21 10:34:20"
	},
	{
		id:5,
		content:"测试内容",
		send:"admin",
		reception:"3,4",
		time:"2021-04-21 10:34:20"
	},
	{
		id:6,
		content:"测试内容",
		send:"admin",
		reception:"1,4",
		time:"2021-04-21 10:34:20"
	}
]

module.exports = [
  // 模拟从服务器获取所有发送的通知
  {
    url: '/vue-element-admin/messages',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: messages
      }
    }
  },
  // 发送短信
  {
    url: '/vue-element-admin/message',
    type: 'post',
    response: {
      code: 20000,
      data: {
        key: Mock.mock('@integer(300, 5000)')
      }
    }
  },
  // 删除信息
  {
    url: '/vue-element-admin/message/[A-Za-z0-9]',
    type: 'delete',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  }
]
