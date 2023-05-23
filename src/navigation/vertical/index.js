export default [
  {
    title: '메인',
    to: { name: 'index' },
    icon: { icon: 'mdi-home-outline' },
  },
  {
    title: '프로젝트',
    to: { name: 'project-tab', params: { tab: 'projects' } },
    icon: { icon: 'mdi-home-outline' },
  },
  {
    title: '프로비저닝',
    to: { name: 'terraform-tab', params: { tab: 'project' } },
    icon: { icon: 'mdi-file-document-outline' },
  },
  {
    title: '변경관리',
    to: { name: 'ansible-tab', params: { tab: 'parameter' } },
    icon: { icon: 'mdi-file-document-outline' },
  },
]
