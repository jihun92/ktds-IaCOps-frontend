import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import mock from '@/@fake-db/mock'

const projects = [
  {
    id: 1,
    projectGroup: 'Demo Group',
    projectName: 'Demo Project',
    avatar: avatar1,
  },
  {
    id: 2,
    projectGroup: 'Demo Group 2',
    projectName: 'Demo Project 2',
    avatar: avatar2,
  },
  {
    id: 3,
    projectGroup: 'Demo Group 3 ',
    projectName: 'Demo Project 3',
    avatar: avatar3,
  },
]


mock.onGet('/pages/projects/list').reply(200, { projects })

