import { YN } from '@src/entities/common-enum'
import { Delivery, IDelivery } from '../../delivery'
import { keysToCamel } from '@src/utils/snakeToCamel'
import {
  ADID_RESULT_AGGREGATION,
  DATA_TYPE,
  ICondition,
  IConditionData,
  IValueBox
} from '@src/entities'

// export class ColumnInfo implements ICondition {
//   adidResultAggregation?: ADID_RESULT_AGGREGATION
//   aggrBoxes: any[]
//   allGames: boolean
//   containClosedGames: boolean
//   count: number
//   dataType: DATA_TYPE
//   dateConditionEndPicker: boolean
//   dateConditionStartPicker: boolean
//   detail: boolean
//   details: boolean
//   gamecodes: string[]
//   id: number
//   includeItems: number
//   jobDate: string
//   jsonFilteredKeys: string
//   name: string
//   selected: false
//   showDetails: false
//   valid: true
//   valueBoxes: IValueBox[]
//
//   constructor(data: IConditionData) {
//     this.adidResultAggregation = data.adid_result_aggregation
//     this.aggrBoxes = data.aggr_boxes
//   }
//
//   validate(): boolean {
//     throw new Error('Method not implemented.')
//   }
// }
