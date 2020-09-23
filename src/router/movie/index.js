export default {
	path: '/movie',
	component: () => import('views/Movies/movies.vue'),
	children: [
		{
			path: '/movie',
			redirect: '/movie/nowplaying'
		},
		{
			path: 'city',
			component: () => import('components/City/city')
		},
		{
			path: 'nowplaying',
			component: () => import('components/NowPlaying/nowplaying')
		},
		{
			path: 'comingsoon',
			component: () => import('components/ComingSoon/comingsoon')
		},
		{
			path: 'search',
			component: () => import('components/Search/search')
		}
	]
}