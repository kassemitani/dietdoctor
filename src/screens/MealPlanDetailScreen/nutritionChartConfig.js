import {processColor} from 'react-native'
import {colors, strings} from '../../constants'

const nutritionChartConfig = {
  legend: {
    enabled: true,
    textSize: 15,
    form: 'CIRCLE',
    horizontalAlignment: 'RIGHT',
    verticalAlignment: 'CENTER',
    orientation: 'VERTICAL',
    wordWrapEnabled: true,
  },
  data: {
    dataSets: [
      {
        values: [],
        config: {
          colors: [
            processColor(colors.yellow),
            processColor('#FFF78C'),
            processColor('#FFD08C'),
            processColor('#8CEAFF'),
            processColor('#FF8C9D'),
          ],
          valueTextSize: 20,
          valueTextColor: processColor(colors.green),
          sliceSpace: 5,
          selectionShift: 13,
          valueFormatter: "#.#'%'",
          valueLineColor: processColor(colors.green),
          valueLinePart1Length: 0.5,
        },
      },
    ],
  },
  highlights: [{x: 2}],
  description: {
    text: strings.mealDetailScreen.averageNutritions,
    textSize: 15,
    textColor: processColor(colors.darkGrey),
  },
}
export default nutritionChartConfig
