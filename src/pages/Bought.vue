<template>
  <q-page class='window-height window-width row justify-center items-center'>
    <q-card style="width:80vw;min-width:400px;max-width:1200px">
      <q-card-section>
        <div class='text-h6'>Bought an Item?</div>
        <q-separator />
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class='q-pa-md'>
          <q-stepper v-model='step' ref='stepper' color='primary' animated header-nav>
            <q-step :name='1' title='Product Info' icon='settings' :done='step > 1'>
              <q-input label='Brand' v-model='brand' />
              <q-input label='Item' v-model='item' />
              <q-input label='Size' v-model='size' />
              <q-input label='Category' v-model='category' />
              <q-input label='Purchase Price' type='number' v-model='purchase_price' />
              <div class='text-h6' style='color:#093A3E'>
                Date Listed
                <br />
              </div>
              <q-date v-model='date_listed' />
              <q-input label='Asking Price' v-model='asking_price' />
            </q-step>

            <q-step :name='2' title='Review' icon='create_new_folder' :done='step > 2'>
              <div style='white-space:pre-wrap'>{{error.length > 0?`Error: ${error}`:review}}</div>
            </q-step>
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
  name: 'Bought',
  data () {
    return {
      step: 1,
      brand: '',
      item: '',
      size: '',
      category: '',
      purchase_price: null,
      date_listed: null,
      asking_price: 0,
      review: '',
      error: ''
    }
  },
  methods: {
    async onFinish () {
      await this.generateObj()
      if (this.error.length > 0) {
        return
      }
      const obj = {
        brand: this.brand,
        item: this.item,
        size: this.size || 'N/A',
        category: this.category,
        purchase_price: parseFloat(this.purchase_price),
        date_listed: new Date(this.date_listed).toISOString(),
        asking_price: parseFloat(this.asking_price)
      }
      await this.$axios.post(
        'https://guarded-castle-33109.herokuapp.com/insertOne',
        {
          collection: 'items',
          item: obj
        }
      )
      this.step = 1
      this.brand = ''
      this.item = ''
      this.category = ''
      this.size = ''
      this.purchase_price = null
      this.date_listed = null
      this.asking_price = 0
      this.review = ''
      this.error = ''
      await this.generateObj()
    },
    generateObj () {
      this.error = ''
      this.review = ''
      if (!this.brand) {
        this.error = this.error + ' Brand is empty'
        return
      }
      if (!this.item) {
        this.error = this.error + ' Item is empty'
        return
      }
      if (!this.category) {
        this.error = this.error + ' Category is empty'
        return
      }
      if (!this.purchase_price) {
        this.error = this.error + ' Purchase price is empty'
        return
      }
      if (!this.date_listed) {
        this.error = this.error + ' Listing date is empty'
        return
      }
      if (!this.asking_price) {
        this.error = this.error + ' Asking price is empty'
        return
      }
      this.review = `Brand: ${this.brand}\nCategory: ${this.category}\nItem: ${
        this.item
      }\nSize: ${this.size || 'N/A'}\nPurchase Price: $${
        this.purchase_price
      }\nDate Listed: ${new Date(
        this.date_listed
      ).toLocaleDateString()}\nAsking Price: $${this.asking_price}`
    }
  },
  watch: {
    brand () {
      this.generateObj()
    },
    item () {
      this.generateObj()
    },
    category () {
      this.generateObj()
    },
    size () {
      this.generateObj()
    },
    purchase_price () {
      this.generateObj()
    },
    date_listed () {
      this.generateObj()
    },
    asking_price () {
      this.generateObj()
    }
  },
  mounted () {
    this.generateObj()
  }
}
</script>
