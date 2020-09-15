<template>
  <q-page class='window-height window-width row justify-center items-center'>
    <q-card style='width:80vw;max-width:1200px' flat bordered>
      <q-card-section style='background-color:#093A3E'>
        <q-table
          color='primary'
          title='Summary'
          :columns='summary_columns'
          :data='[{items_sold, revenue, profit, avg_listing_duration}]'
        ></q-table>
      </q-card-section>
      <q-card-section style='background-color: #3AAFB9'>
        <q-table color='primary' :title='title' :columns='columns' :data='data'>
          <template v-slot:header='props'>
            <q-tr :props='props'>
              <q-th auto-width />
              <q-th v-for='col in props.cols' :key='col.name' :props='props'>{{ col.label }}</q-th>
            </q-tr>
          </template>
          <template v-slot:body='props'>
            <q-tr :props='props'>
              <q-td auto-width>
                <q-btn
                  size='sm'
                  color='accent'
                  round
                  dense
                  @click='props.row.expand = !props.row.expand'
                  :icon="props.row.expand ? 'remove' : 'add'"
                />
              </q-td>
              <q-td v-for='col in props.cols' :key='col.name' :props='props'>{{ col.value }}</q-td>
            </q-tr>
            <q-tr v-show='props.row.expand' :props='props'>
              <q-td colspan='100%'>
                <div class='text-left'>Brand: {{ props.row.brand }}</div>
                <div class='text-left'>Item: {{ props.row.item }}</div>
                <div class='text-left'>Size: {{ props.row.size }}</div>
                <div class='text-left'>Category: {{ props.row.category }}</div>
                <div
                  class='text-left'
                >Date Listed: {{ new Date(props.row.date_listed).toLocaleDateString() }}</div>
                <div
                  class='text-left'
                >Date Sold: {{ new Date(props.row.date_sold).toLocaleDateString() }}</div>
                <div class='text-left text-negative'>Purchase Price: ${{ props.row.purchase_price }}</div>
                <div class='text-left text-negative'>E or P Fee: ${{ props.row.ep_fee }}</div>
                <div class='text-left text-negative'>Paypal Fee: ${{ props.row.paypal_fee }}</div>
                <div class='text-left text-negative'>Shipping Fee: ${{ props.row.shipping_cost }}</div>
                <div class='text-left text-positive'>Shipping Price: ${{ props.row.shipping_price }}</div>
                <div class='text-left text-positive'>Sold Price: ${{ props.row.sold_price }}</div>
                <div class='text-left'>Platform: {{ props.row.platform }}</div>
              </q-td>
            </q-tr>
          </template>
        </q-table>
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
      items_sold: 0,
      revenue: 0,
      avg_listing_duration: 0,
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
          style: 'width: 500px',
          format: val => `$${val}`
        },
        {
          name: 'profit',
          label: 'Total Profit',
          field: 'profit',
          required: true,
          sortable: true,
          style: 'width: 500px',
          format: val => `$${val}`
        },
        {
          name: 'avg_listing_duration',
          label: 'Average Listing Duration',
          field: 'avg_listing_duration',
          required: true,
          sortable: true,
          style: 'width: 500px',
          format: val => `${val} days.`
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
          name: 'date_sold',
          label: 'Sold Date',
          field: 'date_sold',
          required: true,
          sortable: true,
          style: 'width: 500px',
          format: val => `${!val ? '' : new Date(val).toLocaleDateString()}`
        },
        {
          name: 'sold_price',
          label: 'Sold Price',
          field: 'sold_price',
          required: true,
          sortable: true,
          style: 'width: 500px',
          format: val => `$${val}`
        },
        {
          name: 'net_profit',
          label: 'Net Profit',
          field: 'net_profit',
          required: true,
          sortable: true,
          style: 'width: 500px',
          format: val => `$${val}`
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
    let items = await this.$axios.post(
      'https://guarded-castle-33109.herokuapp.com/find',
      {
        collection: 'items'
      }
    )
    items = items.data
    const data = items
    for (const d in data) {
      console.log(
        (new Date(data[d].date_sold).getTime() -
          new Date(data[d].date_listed).getTime()) /
          (1000 * 60 * 60 * 24)
      )
      data[d].expand = false
      data[d].net_profit =
        data[d].sold_price +
        data[d].shipping_price -
        data[d].purchase_price -
        data[d].ep_fee -
        data[d].paypal_fee -
        data[d].shipping_cost
      data[d].listing_duration =
        (new Date(data[d].date_sold).getTime() -
          new Date(data[d].date_listed).getTime()) /
        (1000 * 60 * 60 * 24)
    }
    this.items_sold = data.length
    this.revenue = data.reduce((a, b) => a + b.sold_price, 0)
    this.profit = data.reduce((a, b) => a + b.net_profit, 0)
    const listingDuration = data.reduce((a, b) => a + b.listing_duration, 0)
    console.log(data)
    this.avg_listing_duration =
      Math.round((10 * listingDuration) / data.length) / 10
    this.data = data
  }
}
</script>
