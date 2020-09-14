<template>
  <q-page class='window-height window-width row justify-center items-center'>
    <q-card style='width:80vw;min-width:400px;max-width:1200px'>
      <q-card-section>
        <div class='text-h6'>Sold an Item?</div>
        <q-separator />
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class='q-pa-md'>
          <q-stepper v-model='step' ref='stepper' color='primary' animated header-nav>
            <q-step :name='1' title='Sale Info' icon='settings' :done='step > 1'>
              <q-select label='Select Product' :options='boughtProducts' v-model='item' />
              <span>
                <strong>Date Sold:</strong>
              </span>
              <br />
              <q-date v-model='date_sold' :options='optionsFn' />
              <q-input label='Sold Price' v-model='sold_price' type='number' />
              <q-input label='Shipping Price' v-model='shipping_price' type='number' />
              <q-input label='E or P Fee' v-model='ep_fee' type='number' />
              <q-input label='Paypal Fee' v-model='paypal_fee' type='number' />
              <q-input label='Shipping Cost' v-model='shipping_cost' type='number' />
              <q-input label='Platform Sold On' v-model='shipping_cost' />
            </q-step>

            <q-step :name='2' title='Review' icon='create_new_folder' :done='step > 2'>step 2</q-step>
            <template v-slot:navigation>
              <q-stepper-navigation>
                <q-btn
                  @click='step !== 2 ? $refs.stepper.next(): onFinish()'
                  color='primary'
                  :label="step === 2 ? 'Finish' : 'Continue'"
                />
                <q-btn
                  v-if='step > 1'
                  flat
                  color='primary'
                  @click='$refs.stepper.previous()'
                  label='Back'
                  class='q-ml-sm'
                />
              </q-stepper-navigation>
            </template>
          </q-stepper>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Sold',
  data () {
    return {
      step: 1,
      boughtProducts: [],
      item: null,
      date_sold: null,
      sold_price: '',
      shipping_price: '',
      ep_fee: '',
      paypal_fee: '',
      shipping_cost: ''
    }
  },
  methods: {
    optionsFn (date) {
      if (!this.item || !this.item.date_listed) return false
      if (new Date(date).getTime() > new Date().getTime()) return false
      return (
        new Date(date).getTime() > new Date(this.item.date_listed).getTime()
      )
    },
    async getBoughtItems () {
      let items = await this.$axios.post(
        'https://guarded-castle-33109.herokuapp.com/find',
        {
          collection: 'items'
        }
      )
      items = items.data
      this.boughtProducts = items.map(i => {
        return { ...i, label: i.item, value: i._id }
      })
    }
  },
  watch: {},
  async mounted () {
    await this.getBoughtItems()
  }
}
</script>
