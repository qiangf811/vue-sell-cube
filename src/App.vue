<template>
  <div id="app">
    <VHeader :seller="seller"/>
    <!-- <cube-button>你好</cube-button> -->
  </div>
</template>

<script>
import VHeader from './components/Header'
import moment from 'moment'
import { getSeller } from 'api'

export default {
  name: 'app',
  components: {
    VHeader
  },
  data: () => ({
    seller: {}
  }),
  async created () {
    this._getSeller()
    console.log(moment.now())
  },
  methods: {
    async _getSeller () {
      try {
        const seller = await getSeller()
        this.seller = seller
      } catch (error) {}
    }
  }
}
</script>
