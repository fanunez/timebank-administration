<template>
  <Bar
    v-if="loaded"
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  data:() => {
    return {
        loaded: false,
        chartData: {
            labels: ['Usuarios'],
            datasets: [
              {
                label: ['Azules'],
                data: [ 15 ],
                backgroundColor: ['#4040ff']
              },
              {
                label: ['Naranjos'],
                data: [ 8 ],
                backgroundColor: ['#ffa500']
              }
            ],
        },
        chartOptions: {
            responsive: true
        }
    }
  },
  async mounted () {
    this.loaded = false

    try {
        // axios petition
        // this.chartdata = userlist
        this.loaded = true
    } catch ( error ) {
      console.error( error )
    }
  }
}
</script>