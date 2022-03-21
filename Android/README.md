# TUICalling Android 示例工程快速跑通

本文档主要介绍如何快速跑通TUICalling 示例工程，体验高质量视频/语音通话，更详细的TUICalling组件接入流程，请点击腾讯云官网文档： [**TUICalling 组件 Android 接入说明** ](https://cloud.tencent.com/document/product/647/42045)...



## 目录结构

```
TUICalling
├─ App          // 主面板，音视频通话场景入口
├─ Debug        // 调试相关
└─ Source       // 实时语音/视频通话业务逻辑
```

## 环境准备
- 最低兼容 Android 4.1（SDK API Level 16），建议使用 Android 5.0 （SDK API Level 21）及以上版本
- Android Studio 3.5及以上版本
- App 要求 Android 4.1及以上设备

## 运行示例

### 第一步：创建TRTC的应用
1. 一键进入腾讯云实时音视频控制台的[应用管理](https://console.cloud.tencent.com/trtc/app)界面，选择创建应用，输入应用名称，例如 `TUIKitDemo` ，单击 **创建**；
2. 点击对应应用条目后**应用信息**，具体位置如下下图所示：
    <img src="https://qcloudimg.tencent-cloud.cn/raw/62f58d310dde3de2d765e9a460b8676a.png" width="900">
3. 进入应用信息后，按下图操作，记录SDKAppID和密钥：g
    <img src="https://qcloudimg.tencent-cloud.cn/raw/bea06852e22a33c77cb41d287cac25db.png" width="900">

>! 本功能同时使用了腾讯云 [实时音视频 TRTC](https://cloud.tencent.com/document/product/647/16788) 和 [即时通信 IM](https://cloud.tencent.com/document/product/269) 两个基础 PaaS 服务，开通实时音视频后会同步开通即时通信 IM 服务。 即时通信 IM 属于增值服务，详细计费规则请参见 [即时通信 IM 价格说明](https://cloud.tencent.com/document/product/269/11673)。


[](id:ui.step2)
### 第二步：下载源码，配置工程
1. 克隆或者直接下载此仓库源码，**欢迎 Star**，感谢~~
2. 找到并打开 `Android/Debug/src/main/java/com/tencent/liteav/debug/GenerateTestUserSig.java` 文件。
3. 配置 `GenerateTestUserSig.java` 文件中的相关参数：
	<img src="https://main.qcloudimg.com/raw/f9b23b8632058a75b78d1f6fdcdca7da.png" width="900">
	- SDKAPPID：默认为占位符（PLACEHOLDER），请设置为步第一步中记录下的 SDKAppID。
	- SECRETKEY：默认为占位符（PLACEHOLDER），请设置为步第一步中记录下的密钥信息。

### 第三步：编译运行
使用 Android Studio（3.5 以上的版本）打开源码目录 `TUICalling/Android`，待Android Studio工程同步完成后，连接真机单击 **运行按钮** 即可开始体验本APP。

### 第四步：示例体验

Tips：TUICalling 通话体验，至少需要两台设备，如果用户A/B分别代表两台不同的设备：

**设备 A（userid：222）**

- 步骤 1：在欢迎页，输入用户名(<font color=red>请确保用户名唯一性，不能与其他用户重复</font>)，比如111； 
- 步骤 2：根据不同的场景&业务需求，进入不同的场景界面，比如视频通话；
- 步骤3：输入要拨打的用户B的userid，点击搜索，然后点击呼叫；

**设备 B（userid：222）**

- 步骤1：输入用户名(<font color=red>请确保用户名唯一性，不能与其他用户重复</font>)，比如222； 
- 步骤 2：步骤2、进入主页，等待接听来电即可；



## 常见问题

- [TUI 场景化解决方案常见问题](https://cloud.tencent.com/developer/article/1952880)
- [联系我们](https://cloud.tencent.com/document/product/647/70641)

