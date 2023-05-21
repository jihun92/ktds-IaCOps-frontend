export default [
  {
    title: '메인',
    to: { name: 'dashboard' },
    icon: { icon: 'mdi-home-outline' },
  },
  {
    title: '프로젝트',
    to: { name: 'project-tab', params: { tab: 'projects' } },
    icon: { icon: 'mdi-home-outline' },
  },
  {
    title: '프로비저닝',
    to: { name: 'terraform-tab', params: { tab: 'portfolio' } },
    icon: { icon: 'mdi-file-document-outline' },
  },
  {
    title: '변경관리',
    to: { name: 'ansible' },
    icon: { icon: 'mdi-file-document-outline' },
  },
]