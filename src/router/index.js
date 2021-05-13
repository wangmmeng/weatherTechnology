import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * 没有权限要求的基本页可以访问所有角色
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
	redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/index/index'),
        name: 'Index',
        meta: { title: '首页', icon: 'el-icon-s-home', noCache: true }
      }
    ]
  },
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard',
	alwaysShow: true, // 将始终显示根菜单
	name: 'Dashboard',
	meta: {
		title: '创新动态展示',
		icon: 'component'
	},
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/policy'),
        name: 'Dashboard',
        meta: { title: '政策资讯'}
      },
	  {
        path: 'technology',
        component: () => import('@/views/dashboard/technology'),
        name: 'Technology',
        meta: { title: '科技管理信息'}
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
	redirect: '/documentation',
	alwaysShow: true, // 将始终显示根菜单
	name: 'Documentation',
	meta: { title: '科研项目管理', icon: 'documentation', noCache: true },
    children: [
		{
			path: 'process',
			component: () => import('@/views/documentation/process'),
			name: 'Process',
			meta: { title: '项目申报流程'}
		},
		{
			path: 'collect',
			component: () => import('@/views/documentation/collect'),
			name: 'Collect',
			meta: { title: '指南征集'}
		},
		{
			path: 'application',
			component: () => import('@/views/documentation/application'),
			name: 'Application',
			meta: { title: '项目申报'}
		},
		{
			path: 'project',
			component: () => import('@/views/documentation/project'),
			name: 'Project',
			meta: { title: '立项评审'}
		},
		{
			path: 'taskbook',
			component: () => import('@/views/documentation/taskbook'),
			name: 'Taskbook',
			meta: { title: '任务书签订'}
		},
		{
			path: 'midterm',
			component: () => import('@/views/documentation/midterm'),
			name: 'Midterm',
			meta: { title: '中期检查'}
		},
		{
			path: 'changeProcedure',
			component: () => import('@/views/documentation/changeProcedure'),
			name: 'ChangeProcedure',
			meta: { title: '变更程序及批复'}
		},
		{
			path: 'materials',
			component: () => import('@/views/documentation/materials'),
			name: 'Materials',
			meta: { title: '验收材料提交'}
		},
		{
			path: 'review',
			component: () => import('@/views/documentation/review'),
			name: 'Review',
			meta: { title: '验收评审'}
		},
		{
			path: 'storage',
			component: () => import('@/views/documentation/storage'),
			name: 'Storage',
			meta: { title: '材料电子存储'}
		}
    ]
  },
  {
    path: '/example',
    component: Layout,
	redirect: '/example',
	alwaysShow: true, // 将始终显示根菜单
	name: 'Example',
	meta: { title: '科技成果管理', icon: 'star', noCache: true },
    children: [
		{
			path: 'processManage',
			component: () => import('@/views/example/processManage'),
			name: 'ProcessManage',
			meta: { title: '流程管理'}
		},
		{
			path: 'cognizance',
			component: () => import('@/views/example/cognizance'),
			name: 'Cognizance',
			meta: { title: '成果认定'}
		},
		{
			path: 'access',
			component: () => import('@/views/example/access'),
			name: 'Access',
			meta: { title: '成果准入'}
		},
		{
			path: 'invert',
			component: () => import('@/views/example/invert'),
			name: 'Invert',
			meta: { title: '成果转化'}
		},
		{
			path: 'reward',
			component: () => import('@/views/example/reward'),
			name: 'Reward',
			meta: { title: '科技奖励'}
		},		
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide',
	alwaysShow: true, // 将始终显示根菜单
	name: 'Guide',
	meta: { title: '科研信息综合管理', icon: 'list', noCache: true },
    children: [
      {
        path: 'subject',
        component: () => import('@/views/guide/subject'),
		name: 'Subject',
		meta: { title: '科研项目'}
      },
	  {
        path: 'achievements',
        component: () => import('@/views/guide/achievements'),
		name: 'Achievements',
		meta: { title: '科技成果'}
      },
	  {
        path: 'personnel',
        component: () => import('@/views/guide/personnel'),
		name: 'Personnel',
		meta: { title: '科技人员'}
      },
	  {
        path: 'expert',
        component: () => import('@/views/guide/expert'),
		name: 'Expert',
		meta: { title: '专家'}
      },
	  {
        path: 'unit',
        component: () => import('@/views/guide/unit'),
		name: 'unit',
		meta: { title: '申报单位'}
      }
    ]
  },
]

/**
 * asyncRoutes
 * 需要根据用户角色动态加载的路由
 */
export const asyncRoutes = [
	{
		path: '/permission',
		component: Layout,
		redirect: '/permission/index',
		alwaysShow: true, // 将始终显示根菜单
		name: 'Permission',
		meta: {
			title: '系统管理',
			icon: 'el-icon-s-tools'
		},
		children: [
			{
				path: 'user',
				component: () => import('@/views/permission/user'),
				name: 'UserPermission',
				meta: {
					title: '用户管理',
					roles: ['admin'] 
				}
			},
			{
				path: 'role',
				component: () => import('@/views/permission/role'),
				name: 'RolePermission',
				meta: {
					title: '角色管理',
					roles: ['admin']
				}
			},
			{
				path: 'log',
				component: () => import('@/views/permission/log'),
				name: 'LogPermission',
				meta: {
					title: '日志管理',
					roles: ['admin']
				}
			}
		]
   },
   {
    path: '/message',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/message/index'),
        name: 'Message',
        meta: { title: '信息提醒', icon: 'el-icon-message-solid', noCache: true }
      }
    ]
  },
  // 404页必须放在末尾 !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
