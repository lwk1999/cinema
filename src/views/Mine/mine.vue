<template>
  <div id='main'>
     <Header title='我的'/>
	 <div id="content">
	 	<login/>
	 </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import Header from 'components/Header'
  import TabBar from 'components/TabBar'
  import Login from 'components/Login/login'
	
  export default {
    name: "mine",
	components: {
		Header,
		TabBar,
		Login
	}
  }
</script>

<style scoped="scoped">
</style>
