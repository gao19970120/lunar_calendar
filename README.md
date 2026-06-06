# 数据来源
https://6tail.cn/calendar/api.html#overview.html  
https://github.com/6tail/lunar-python

# 农历万年历

## 当前仓库说明
这个仓库现在包含两部分内容：

1. `custom_components/lunar_calendar`
   后端农历集成，保持和主线功能同步。
2. `custom_components/new_lunar`
   从旧版前端卡片中独立拆出的万年历卡片资源，专门用于保留自定义平板/手机卡片样式与交互，避免被主线前端覆盖。

`new_lunar` 是一个纯前端资源包，不替代 `lunar_calendar` 的实体与数据来源。  
也就是说：

- 后端实体继续使用 `sensor.lunar_calendar`
- 日期实体继续使用 `date.lunar_tap_date`
- 页面卡片改为引用 `custom:new-*` 系列

## 功能清单
1、本地计算，没有api  
2、万年历：支持年、月无限制翻页  
3、日历显示内容：阳历、农历、节气、节日、生日/纪念日、假期调休  
4、老黄历显示内容：宜忌、相冲、吉神凶煞、彭祖百忌、福神等  
5、生日/纪念日维护：新增、修改、删除  
6、配套平板端UI、手机端UI  

## 注意事项  
1、添加集成以后，确保万年历实体是默认的 sensor.lunar_calendar  
2、添加集成以后，确保万年历日期是默认的 date.lunar_tap_date  
3、维护生日相关后，需要手动重载集成  

## 如何下载
1、先添加自定义集成 https://github.com/xiaoshi930/lunar_calendar  ，后在HACS中搜索"万年历"，安装此集成，重启Home Assistant  
2、将 `lunar_calendar` 文件夹复制到你的 Home Assistant 配置目录下的 `custom_components` 文件夹中，重启 Home Assistant

## NEW 独立前端卡片
如果你希望使用本仓库保留下来的独立前端卡片，而不是主线自带的前端资源，请额外复制：

`custom_components/new_lunar`

当前前端资源推荐放到 Home Assistant 的 `www/new_lunar` 目录，并在 Lovelace 资源中加载：

`/local/new_lunar/new-lunar-calendar-card.js`

不要使用 `/config/custom_components/new_lunar/www/...` 作为 Lovelace 资源地址；在部分 Home Assistant 环境中，这个路径会返回 HTML 页面而不是 JavaScript 文件，导致卡片无法注册。

### YAML 示例

#### 平板小卡
~~~
type: custom:new-lunar-calendar-pad-date
mode: A
~~~

#### 平板弹出主卡
~~~
type: custom:new-lunar-calendar-pad
theme: '[[[ return theme() ]]]'
~~~

#### 手机小卡
~~~
type: custom:new-lunar-calendar-phone-date
theme: '[[[ return theme() ]]]'
~~~

#### 手机主卡
~~~
type: custom:new-lunar-calendar-phone
theme: '[[[ return theme() ]]]'
~~~

#### 日历主体
~~~
type: custom:new-lunar-calendar
theme: '[[[ return theme() ]]]'
~~~

#### 生日卡
~~~
type: custom:new-birthday-card
theme: '[[[ return theme() ]]]'
~~~

## 配套UI
### 配套UI1：平板端时间显示
![image](https://github.com/xiaoshi930/lunar_calendar/blob/main/image/pad_date.png)  


### 配套UI2：平板端弹出菜单（也可以单独使用）
![image](https://github.com/xiaoshi930/lunar_calendar/blob/main/image/pad.png)  

**引用示例（单独使用）**
~~~
type: custom:lunar-calendar-pad
theme: '[[[ return theme() ]]]'    # 选项on是白色，选项off是黑色，也可以引用全局函数：'[[[ return theme()]]]'
~~~

  
### 配套UI3：手机端日期显示
![image](https://github.com/xiaoshi930/lunar_calendar/blob/main/image/phone_date.png)  

**引用示例**
~~~
type: custom:lunar-calendar-phone-date
theme: '[[[ return theme() ]]]'    # 选项on是白色，选项off是黑色，也可以引用全局函数：'[[[ return theme()]]]'
~~~

  
### 配套UI4：手机端弹出菜单（也可以单独使用）
![image](https://github.com/xiaoshi930/lunar_calendar/blob/main/image/phone.png)  

**引用示例（单独使用）**
~~~
type: custom:lunar-calendar-phone
theme: '[[[ return theme() ]]]'    # 选项on是白色，选项off是黑色，也可以引用全局函数：'[[[ return theme()]]]'
~~~

  
### 配套UI5：日历部分单独使用
![image](https://github.com/xiaoshi930/lunar_calendar/blob/main/image/calendar.png)  

**引用示例（单独使用）**
~~~
type: custom:lunar-calendar
theme: '[[[ return theme() ]]]'    # 选项on是白色，选项off是黑色，也可以引用全局函数：'[[[ return theme()]]]'
~~~

