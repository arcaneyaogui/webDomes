import './index.scss'
// 思路：
// 1. 看官方文档 把echarts加入项目  
// 如何在react获取dom -> useRef
// 在什么地方获取dom节点 -> useEffect
// 2. 不抽离定制化的参数 先把最小化的demo跑起来
// 3. 按照需求，哪些参数需要自定义 抽象出来

import Bar from '@/components/Bar'
const Home = () => {

  return (
    <div>
      {/* 渲染Bar组件 */}
      <Bar
        title='文章中提到最多的编程语言:'
        xData={['java', 'python', 'C/C+++', 'JavaScript', 'go']}
        yData={[60, 37, 66, 14, 95]}
        style={{ width: '800px', height: '500px' }} />
      <Bar
        title='前端框架中受人喜爱的框架:'
        xData={['react', 'vue', 'angular']}
        yData={[60, 80, 30]}
        style={{ width: '800px', height: '300px' }} />
    </div>
  )
}

export default Home