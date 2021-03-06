import Mock from 'mockjs'
import { resultSuccess, getRequestToken } from '../_util'

const Random = Mock.Random

const token = Random.string('upper', 32, 32)

const adminInfo = {
  userId: '1',
  username: 'admin',
  realName: 'Admin',
  avatar: Random.image(),
  desc: 'manager',
  password: Random.string('upper', 4, 16),
  token,
  roles: [
    {
      roleName: '主控台',
      value: 'dashboard_console',
    },
    {
      roleName: '监控页',
      value: 'dashboard_monitor',
    },
    {
      roleName: '工作台',
      value: 'dashboard_workplace',
    }
  ],
}

export default [
  {
    url: '/api/login',
    timeout: 1000,
    method: 'post',
    response: () => {
      return resultSuccess({ token });
    },
  },
  {
    url: '/api/admin_info',
    timeout: 1000,
    method: 'get',
    response: () => {
      // const token = getRequestToken(request);
      // if (!token) return resultError('Invalid token');
      return resultSuccess(adminInfo);
    },
  },
]
