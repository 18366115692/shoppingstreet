# 购物街
  + 真实数据链接没有在项目中展示，请忽略数据部分

## 如何建立项目
```
npm install
```

### 运行项目
```
npm run serve
```

### 打包项目
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 划分目录结构
1. 所有需要编写的文件都放在src目录下，src作为主目录输出
2. 在src文件夹以下创建文件夹
 + [views文件夹，存放我们页面的视图](#views)
 + [common文件夹，存放公共js常量](#common)
 + [router文件夹，存放路由文件](#router)
 + [store文件夹，存放vuex数据](#store)
 + [network文件夹，存放网络请求数据](#network)
 + [assets文件夹，存放字体和一些静态图片资源](#assets)
 + [components文件夹，存放一些公共组件资源](#components)
3. <span id='components'>在components文件夹下创建common和content文件夹</span>
 + common存放所有项目的公共组件
 + content存放当前项目的公共组件
4. <span id='views'>在views文件夹中创建项目所需要展示的文件</span>
 + crat存放的是购物车里面的组件
 + category存放的是分类页面的组件
 + details存放的是详情界面的组件
 + home存放的是主页界面的组件
 + profile存放的是个人界面的组件
5. <span id='common'>在common文件夹中存放一些项目公用的js文件</span>
 + mixin.js文件存放着需要混入使用的信息
 + tool.js文件存放着一些封装函数，让组件中使用更方便
6. <span id='router'>在router文件夹中存放一些项目中路由的js文件</span>
 + index.js配置项目的路由规则
7. <span id='store'>在store文件夹中存放项目使用Vuex的文件</span>
 + actions.js文件相当于vue中的data模块
 + mutations.js文件相当于vue中的methods模块
 + getters.js文件相当于vue中的computed模块
 + mutation-types.js文件是存储Vuex中使用变量转换的文件
 + index.js统一配置并输出Vuex中的配置文件
8. <span id='network'>在network文件夹中存放项目使用网络请求的文件</span>
 + request.js文件是配置网络请求文件
 + home.js文件是首页请求数据的配置文件
 + detail.js文件是详情请求数据的配置文件
9. <span id='assets'>在assets文件夹中存放项目使用静态资源的文件</span>
 + css文件存放项目中使用的样式文件
 + image文件存放项目中使用的图片文件

## 上下导航栏
1. 上下导航栏分别抽离成两个公用组件
 + 顶部导航栏使用插槽的方式，来展示顶部导航栏信息，顶部导航栏分左中右格式
 + 底部导航栏使用插槽的方式，来展示底部当行懒信息，底部导航栏根据需要展示的内容来决定

## 首页
1. 轮播图
 + 抽离单独的公用组件，因为该组件在其他项目中都有用到
 + 在轮播图公用组件中，使用index.js将轮播图组件统一导出
2. 中部导航栏
 + 抽离成单独的组件，使用插槽的方式展示不同分类所展示的信息
 + 在首页中将展示的信息通过父子组件传值的方式，传递到子组件
 + 通过点击不同的值，修改对应的index值，来匹配高亮对应项
3. 首页商品信息
 + 商品数据的请求，通过封装network中的js文件，来请求网络数据
 + 数据展示，通过弹性布局来展示
 + 通过子组件向父组件传递点击效果，实现路由的点击跳转
 + [添加lazy-load懒加载功能，实现快速加载](#lazy)
4. 移动端滚动效果
 + [通过better-scroll插件实现移动界面更好滚动效果](#better)

## 详情界面
1. 顶部导航栏
 + 和首页的方式一样，直接导入公共组件即可
2. 轮播图
 + 接收父组件传递过来的数据，进行轮播图展示
3. 关于顶部导航点击效果
 + 首先通过滚动组件监听滚动区域的高度
 + 然后点击对应名称时，将滚动条滚动对应高度，来实现点击对应名称，显示对应信息
 + 当滚动条滚动到一定位置时，改变导航栏中的index值，来实现数据对应
4. 底部导航栏
 + 针对购物车做了点击操作，点击购物车，触发Toast弹屏
 + [并且给vuex中添加商品的对应信息，方便数据在购物车界面展示](#vuex)

## 购物车界面
1. 数据展示
 + 当没有添加购物车的时候，展示购物车已清空
 + 当已经有购物车数据的时候，展示物品信息
2. 物品信息
 + 勾选商品功能，默认是勾选的，当再次点击时，取消勾选，同时变动结算处显示的价格
 + 购物车列表右下角的数量按钮，点击调用vuex中的方法，给对应的商品添加数量
 + 点击删除按钮，调用vuex中的方法，直接清除对应的数据
3. 全选按钮
 + 通过计算，当所有商品都勾选的时候，全选按钮自动勾选，当有一件商品没有勾选时，全选按钮取消勾选
 + 同时，结算处的价格会统计当前选中商品的价格总和

## <span id='vuex'>[关于Vuex](https://vuex.vuejs.org/zh/)</span>
1. 主要用于存储vue中一些共享数据，当一些组件之间不是父子关系，但需要实现数据共享，则可以直接通过vuex来获取数据
2. 在vuex中存储或者获取数据时，不推荐直接通过组件直接获取，而是通过调用mutations中的方法，来对数据做存取操作

## <span id='better'>[关于better-scroll](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/#better-scroll%20%E6%98%AF%E4%BB%80%E4%B9%88)</span>
1. 更好实现移动端滚动屏幕效果

## <span id='lazy'>[关于lazy-load](https://github.com/hilongjw/vue-lazyload)</span>
1. 实现图片懒加载功能
2. 节约界面首次加载响应时间































