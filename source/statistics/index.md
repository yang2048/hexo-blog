---
title: 统计
date: 2021-02-05 16:14:37
top_img: https://cdn.jsdelivr.net/gh/yang2048/media@master/img/fodder/animals-731213_1280.jpg
---
<script crossorigin="anonymous" integrity="sha512-yYQ6yiWyEH1ciRFahncejaoLxqIQ0pWrG8WSA34dR+UJ9qx08U1fyIt7oGa8PVraTEfH9X+mCjpkuDv5zaCveA==" src="https://lib.baomitu.com/echarts/5.0.2/echarts.common.min.js"></script>

{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

<div class = "text-center"><h1>碎碎念</h1></div><div class = "text-tips">

tips：github登录后按时间正序查看、可点赞加❤️、本插件[地址](https://github.com/removeif/gitalk)..<span id="busuanzi_container_page_pv">「<span id="busuanzi_value_page_pv">+99</span>次查看」</span></div>
<div id="comment-container1"><div class="text-tips">碎碎念加载中，请稍等...</div></div>

<script>
  var data = [{
      name: 'Apples',
      value: 70
  }, {
      name: 'Strawberries',
      value: 68
  }, {
      name: 'Bananas',
      value: 48
  }, {
      name: 'Oranges',
      value: 40
  }, {
      name: 'Pears',
      value: 32
  }, {
      name: 'Pineapples',
      value: 27
  }, {
      name: 'Grapes',
      value: 18
  }];
</script>
{% echarts 400 '90%' %}
{
    title: [{
        text: 'Pie label alignTo',
        left: 'center',
    }, {
        subtext: 'alignTo: "none" (default)',
        left: '16.67%',
        top: '75%',
        textAlign: 'center'
    }, {
        subtext: 'alignTo: "labelLine"',
        left: '50%',
        top: '75%',
        textAlign: 'center'
    }, {
        subtext: 'alignTo: "edge"',
        left: '83.33%',
        top: '75%',
        textAlign: 'center'
    }],
    series: [{
        type: 'pie',
        radius: '25%',
        center: ['50%', '50%'],
        data: data,
        label: {
            position: 'outer',
            alignTo: 'none',
            bleedMargin: 5
        },
        left: 0,
        right: '66.6667%',
        top: 0,
        bottom: 0
    }, {
        type: 'pie',
        radius: '25%',
        center: ['50%', '50%'],
        data: data,
        label: {
            position: 'outer',
            alignTo: 'labelLine',
            bleedMargin: 5
        },
        left: '33.3333%',
        right: '33.3333%',
        top: 0,
        bottom: 0
    }, {
        type: 'pie',
        radius: '25%',
        center: ['50%', '50%'],
        data: data,
        label: {
            position: 'outer',
            alignTo: 'edge',
            margin: 20
        },
        left: '66.6667%',
        right: 0,
        top: 0,
        bottom: 0
    }]
}
{% endecharts %}
<hr>

