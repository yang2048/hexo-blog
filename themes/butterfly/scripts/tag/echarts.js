/**
 * echarts
 * {% echarts 400 '85%' %}
 * height: 
 * height : 
 */

'use strict'

function echartsMaps (args, content) {
  let id = 'echarts' + ((Math.random() * 9999) | 0)
  let options = {}
  let height = args[0] || 400
  let width = args[1] || '85%'
  
  if (content.length) {
    options = content;
  }
  
  var template = `<div class="${id}" id="${id}" style="width: ${width}; height: ${height}px; margin: 0 auto"></div>`
  template += `<script crossorigin="anonymous" src="${hexo.theme.config.CDN.echarts_js}"></script>`
  template += `<script type="text/javascript">
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('${id}'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(${options});
  </script>`
  return template
}
hexo.extend.tag.register('echarts', echartsMaps, { async: true, ends: true })
