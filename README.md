# fengmao-ui

## [Vue2 基于 Element-ui 基础组件传送门]

> 基于 Element-ui 二次封装基础组件地址

> 基于 ant-design-vue 二次封装基础组件地址(期待中)

## 介绍

> 基于 vue3+ ts+ Element-plus 二次封装组件

这是我在学习 Vue3 中基于[Element-plus](https://element-plus.org/zh-CN/) 二次封装基础组件文档，希望对你有用。Table 组件使用方式：

### TTable 参数配置

---

### 1、代码示例

```html
<t-table
  :table="table"
  :columns="table.columns"
  @size-change="handlesSizeChange"
  @page-change="handlesCurrentChange"
/>
```

### 1、代码示例（表格内操作栏数据可用插槽）

```html
<t-table
  title=""
  columnSetting
  :table="table"
  :columns="table.columns"
  @size-change="getList"
  @page-change="getList"
  :columnSetBind="{
    btnTxt: ' ',
    title: '自定义列',
    type: 'primary',
    icon: 'Edit'
  }"
>
  </template>
  <!-- 操作列使用插槽（偷懒），后续考虑会做成table中配置项配置 -->
  <template #tablebar>
    <el-table-column :width="300" align="center" label="操作">
      <template #default="scope">
        <el-button
          v-hasPermi="['system:role:update']"
          link
          type="primary"
          @click="openForm('update', scope.row.id)"
        >
          编辑
        </el-button>
      </template>
    </el-table-column>
  </template>
</t-table>
```

### 2、配置参数（Table Attributes）

| 参数                    | 说明                                                                           | 类型         | 默认值    |
| :---------------------- | :----------------------------------------------------------------------------- | :----------- | :-------- |
| table                   | 表格数据对象                                                                   | Object       | {}        |
| ---data                 | 展示数据                                                                       | Array        | []        |
| ---toolbar              | 表格外操作栏选中表格某行，可以将其数据传出                                     | Array        | []        |
| ---operator             | 表格内操作栏数据                                                               | Array        | []        |
| -------show             | 表格内操作栏根据状态显示                                                       | Object       | -         |
| -------noshow           | 表格内操作栏根据多种状态不显示                                                 | Array        | -         |
| ---operatorConfig       | 表格内操作栏样式                                                               | Object       | -         |
| ---firstColumn          | 表格首列(序号 index,复选框 selection）排列                                     | object       | -         |
| ---total                | 数据总条数                                                                     | Number       | -         |
| ---pageSize             | 页数量                                                                         | Number       | -         |
| ---currentPage          | 是否需要显示切换页条数                                                         | Number       | -         |
| columns                 | 表头信息                                                                       | Array        | []        |
| ----sort                | 排序 （设置：sort:true）                                                       | Boolean      | false     |
| ----renderHeader        | 列标题 Label 区域渲染使用的 Function(val) 可以用 jsx 方式                      | Function     | -         |
| ----bind                | el-table-column Attributes                                                     | Object       | -         |
| ----noShowTip           | 是否换行 （设置：noShowTip:false 换行，不设置自动隐藏）                        | Boolean      | -         |
| ----slotName            | 插槽显示此列数据（其值是具名作用域插槽                                         | String       | -         |
| ----isShowHidden        | 是否动态显示隐藏列设置（隐藏/显示列）                                          | Boolean      | false     |
| ----slotNameMerge       | 合并表头插槽显示此列数据（其值是具名作用域插槽）                               | String       | -         |
| ----------scope         | 具名插槽获取此行数据必须用解构接收{scope}.row 是当前行数据 }                   | Object       | -         |
| ----canEdit             | 是否开启单元格编辑功能                                                         | Boolean      | false     |
| ----configEdit          | 表格编辑配置（开启编辑功能有效）                                               | Object       | -         |
| ----------label         | placeholder 显示                                                               | String       | -         |
| ----------editComponent | 组件名称可直接指定全局注册的组件，也可引入'element/abtd'如：'a-input/el-input' | String       | -         |
| ----------eventHandle   | 第三方 UI 的 事件（返回两个参数，第一个自己自带，第二个 scope）                | Object       | -         |
| ----------bind          | 第三方 UI 的 Attributes，如 el-input 中的 clearable 清空功能                   | Object       | -         |
| ----------event         | 触发 handleEvent 事件的标志                                                    | String       | -         |
| ----------type          | 下拉或者复选框显示（select-arr/select-obj/checkbox）                           | String       | -         |
| ----------list          | 下拉选择数据源名称                                                             | String       | -         |
| ----------arrLabel      | type:select-arr 时对应显示的中文字段                                           | String       | -         |
| ----------arrKey        | type:select-arr 时对应显示的数字字段                                           | String       | -         |
| ----filters             | 字典过滤                                                                       | Object       | -         |
| ----------list          | listTypeInfo 里面对应的下拉数据源命名                                          | String       | -         |
| ----------key           | 数据源的 key 字段                                                              | String       | 'value'   |
| ----------label         | 数据源的 label 字段                                                            | String       | 'label'   |
| listTypeInfo            | 下拉选择数据源                                                                 | Object       | -         |
| footer                  | 底部操作区（默认隐藏，使用插槽展示“保存”按钮）                                 | slot         | -         |
| isKeyup                 | 单元格编辑是否开启键盘事件                                                     | Boolean      | false     |
| isShowFooterBtn         | 是否显示保存按钮                                                               | Boolean      | false     |
| title                   | 表格左上标题                                                                   | String /slot | -         |
| isShowPagination        | 是否显示分页(默认显示分页)                                                     | Boolean      | true      |
| isPaginationCumulative  | 序列号显示是否分页累加                                                         | Boolean      | false     |
| isTableColumnHidden     | 是否开启合计行隐藏复选框/单选框                                                | Boolean      | false     |
| isCopy                  | 是否允许双击单元格复制                                                         | Boolean      | false     |
| rowClickRadio           | 是否开启点击整行选中单选框                                                     | Boolean      | true      |
| columnSetting           | 是否显示设置（隐藏/显示列）                                                    | Boolean      | false     |
| name                    | 与 columnSetting 配合使用标记隐藏/显示列唯一性                                 | String       | title     |
| isRowSort               | 是否开启行拖拽(`row-key` 需要设置)                                             | Boolean      | false     |
| isTree                  | 是否开启 Tree-table 样式                                                       | Boolean      | false     |
| columnSetBind           | 列设置按钮配置（继承`el-button`所有属性）                                      | Object       | -         |
| ----btnTxt              | 按钮显示文字                                                                   | String       | '列设置'  |
| ----title               | 点击按钮下拉显示 title                                                         | String       | '列设置'  |
| ----size                | el-button 的 size                                                              | String       | 'default' |
| ----icon                | el-button 的 icon                                                              | String       | 'Setting' |

### 3、events 其他事件按照 el-table 直接使用（如 sort-change 排序事件）

| 事件名      | 说明                 | 返回值                                        |
| :---------- | :------------------- | :-------------------------------------------- |
| page-change | 当前页码             | 当前选中的页码                                |
| save        | 保存按钮             | 编辑后的所有数据                              |
| handleEvent | 单个输入触发事件     | configEdit 中的 event 值和对应输入的 value 值 |
| radioChange | 单选选中事件         | 返回当前选中的整行数据                        |
| rowSort     | 行拖拽排序后触发事件 | 返回排序后的 table 数据                       |

### 4、Methods 方法

| 事件名             | 说明                         | 参数 |
| :----------------- | :--------------------------- | :--- |
| clearSelection     | 用于多选表格，清空用户的选择 | -    |
| clearSort          | 清空排序条件                 | -    |
| toggleRowSelection | 取消某一项选中项             | -    |
| toggleAllSelection | 全部选中                     | -    |

## npm 方式安装使用

```shell
npm i fengmao-ui
```

## 全局注册使用

> ### 前提条件：使用项目必须全局注册 Element-plus 组件库

```js
// 在main.js中按下引入
import fengmaoUi from 'fengmao-ui'
import 'fengmao-ui/lib/style.css'
Vue.use(fengmaoUi)
```

## 按需引入

```js
// 在main.js中按下引入
import 'fengmao-ui/lib/style.css'
// 单个.vue文件引入
;<script setup lang="ts">
  import {(TDetail, TForm)} from "fengmao-ui"
</script>
```

## fengmao-ui Volar 组件类型提示

```js
// 需要在使用的项目的tsconfig.json文件中添加以下
compilerOptions：{
  "types": [
      "fengmao-ui/components.d.ts",
    ],
}

```

## Vue3 + Vite 项目中安装引入报如下错误的解决方法

> #### 把项目的 vite 版本升级到 4+

<img src="./README_GIF/error.png">

## 安装依赖

> ### 注意: 本地环境版本最好安装 [Node.js 16.x+](https://nodejs.org/en)、[pnpm 7.x+](https://github.com/pnpm/pnpm/)

```shell
npm install -g pnpm

pnpm install

```
