<template>
  <q-page class='window-height window-width row justify-center items-center'>
    <q-card style='width:80vw;max-width:1200px' flat bordered>
      <q-card-section style='background-color:#093A3E'>
        <q-table color='primary' title='Summary' :columns='summary_columns' :data='[]' />
      </q-card-section>
      <q-card-section style='background-color: #3AAFB9'>
        <q-table color='primary' :title='title' :columns='columns' :data='data' />
        <div class='text'>
          Bought an Item?
          <a href='/#/bought'>Click Here.</a>
        </div>
        <div class='text'>
          Sold an Item?
          <a href='/#/sold'>Click Here.</a>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Overview',
  data () {
    return {
      title: 'Overview',
      summary_columns: [
        {
          name: 'items_sold',
          label: 'Items Sold',
          field: 'items_sold',
          required: true,
          sortable: true,
          style: 'width: 500px'
        },
        {
          name: 'revenue',
          label: 'Total Revenue',
          field: 'revenue',
          required: true,
          sortable: true,
          style: 'width: 500px'
        },
        {
          name: 'profit',
          label: 'Total Profit',
          field: 'profit',
          required: true,
          sortable: true,
          style: 'width: 500px'
        },
        {
          name: 'avg_listing_duration',
          label: 'Average Listing Duration',
          field: 'avg_listing_duration',
          required: true,
          sortable: true,
          style: 'width: 500px'
        }
      ],
      data: [],
      columns: [
        {
          name: 'item',
          label: 'Item',
          field: 'item',
          required: true,
          sortable: true,
          style: 'width: 500px'
        },
        {
          name: 'category',
          label: 'Category',
          field: 'category',
          required: true,
          sortable: true,
          style: 'width: 500px'
        },
        {
          name: 'purchase_price',
          label: 'Purchase Price',
          field: 'purchase_price',
          required: true,
          sortable: true,
          style: 'width: 500px',
          format: val => `$${val}`
        },
        {
          name: 'date_listed',
          label: 'Date Listed',
          field: 'date_listed',
          required: true,
          sortable: true,
          style: 'width: 500px',
          format: val => `${new Date(val).toLocaleDateString()}`
        },
        {
          name: 'asking_price',
          label: 'Asking Price',
          field: 'asking_price',
          required: true,
          sortable: true,
          style: 'width: 500px',
          format: val => `$${val}`
        },
        {
          name: 'sold_date',
          label: 'Sold Date',
          field: 'sold_date',
          required: true,
          sortable: true,
          style: 'width: 500px'
        },
        {
          name: 'sold_price',
          label: 'Sold Price',
          field: 'sold_price',
          required: true,
          sortable: true,
          style: 'width: 500px'
        },
        {
          name: 'net_profit',
          label: 'Net Profit',
          field: 'net_profit',
          required: true,
          sortable: true,
          style: 'width: 500px'
        },
        {
          name: 'platform',
          label: 'Platform Sold On',
          field: 'platform',
          required: true,
          sortable: true,
          style: 'width: 500px'
        }
      ]
    }
  },
  async mounted () {
    const items = await this.$axios.post('https://guarded-castle-33109.herokuapp.com/find', {
      collection: 'items'
    })
    this.data = items.data
  }
}
</script>
