import request from '@/utils/request'

export function getMessages() {
  return request({
    url: '/vue-element-admin/messages',
    method: 'get'
  })
}

export function addMessage(data) {
  return request({
    url: '/vue-element-admin/message',
    method: 'post',
    data
  })
}

export function deleteMessage(id) {
  return request({
    url: `/vue-element-admin/message/${id}`,
    method: 'delete'
  })
}
