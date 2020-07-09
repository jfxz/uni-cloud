import dayjs from '../util/dayjs.min.js'
// 格式化时间戳
export const formatTimestamp = (timestamp, format = 'YYYY-MM-DD') => {
  if (!timestamp) {
    return ''
  }
  return dayjs(timestamp).format(format)
}