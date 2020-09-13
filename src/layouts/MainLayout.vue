<template>
  <q-layout view='lHh Lpr lFf'>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon='menu'
          aria-label='Menu'
          @click='leftDrawerOpen = !leftDrawerOpen'
        />

        <q-toolbar-title>Katie App</q-toolbar-title>

        <div>AK43</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model='leftDrawerOpen' show-if-above bordered content-class='bg-grey-1'>
      <q-list>
        <q-item-label header class='text-grey-8'>Essential Links</q-item-label>
        <EssentialLink v-for='link in essentialLinks' :key='link.title' v-bind='link' />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Overview',
    caption: 'Books',
    icon: 'dashboard',
    link: '/#/overview'
  },
  {
    title: 'Bought Item',
    caption: 'Log a purchase',
    icon: 'fiber_new',
    link: '/#/bought'
  },
  {
    title: 'Sold Item',
    caption: 'Log a sale',
    icon: 'attach_money',
    link: '/#/sold'
  }
  // {
  //   title: 'Forum',
  //   caption: 'forum.quasar.dev',
  //   icon: 'record_voice_over',
  //   link: 'https://forum.quasar.dev'
  // },
  // {
  //   title: 'Twitter',
  //   caption: '@quasarframework',
  //   icon: 'rss_feed',
  //   link: 'https://twitter.quasar.dev'
  // },
  // {
  //   title: 'Facebook',
  //   caption: '@QuasarFramework',
  //   icon: 'public',
  //   link: 'https://facebook.quasar.dev'
  // },
  // {
  //   title: 'Quasar Awesome',
  //   caption: 'Community Quasar projects',
  //   icon: 'favorite',
  //   link: 'https://awesome.quasar.dev'
  // }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
