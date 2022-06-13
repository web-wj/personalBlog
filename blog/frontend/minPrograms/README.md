---
category:
  - frontend
tag:
  - minPrograms
---

# 小程序

- 最近小程序着急上架审核，遇到了许多奇奇怪怪的问题。

## 审核

### [授权](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html)

- 首先，[小程序登录，用户信息相关接口说明](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801?highLine=%25E6%258E%2588%25E6%259D%2583%25E7%2594%25A8%25E6%2588%25B7%25E4%25BF%25A1%25E6%2581%25AF) 中明确指出了一些授权接口的变动，总之就是逐步不支持 getUserInfo ，改为 getUserProfile 。另外，格外注意不同平台的小程序的支持情况是不同的，需要查看文档。

- 主要涉及到的授权有地理位置、用户信息以及手机号的使用，主要就是之前上架的小程序不受影响，新上架的小程序需要在授权之前加上前置提醒。加前置提醒框的时候，会遇到一个问题，新加的前置提醒框的成功回调中无法继续唤起授权弹框，因为授权的弹框要求必须是用户手动触发。目前的实现效果是两次点击。

### 根据用户 IP 粗略获取地理位置

- 从技术上讲是可以实现的，但是不符合用户信息的使用规范，使用地理位置前需要经过授权。

### 获取手机号

- 用户通过 open-type 的 button 来获取手机号。
`<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber"></button>`触发后，会弹框让用户选择是否授权.用户点击允许后就会从小程序那边获取到数据，但这个数据不是直接的手机号，它是一段加密的数据，这段加密的数据是需要解密才能得到正确的手机号的。[加密数据解密算法](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/signature.html#%E5%8A%A0%E5%AF%86%E6%95%B0%E6%8D%AE%E8%A7%A3%E5%AF%86%E7%AE%97%E6%B3%95)

- 用户授权过手机号后，目前无法从任何的接口中返回授权的状态，再次点击后仍然会弹授权框。业务逻辑实现上：将获取到的手机号存 storage ，当用户授权过时，隐藏掉该 button，这样就避免了弹窗。

## 开发

### 用户在拒绝授权后无法再次弹出授权框

- 有些用户的安全意识特别强，由于小程序本身的授权弹框的提示信息是原生固定的，可能没办法体现小程序的意图，用户可能觉得小程序获取用户信息的动机不纯，所以就会拒绝弹出的授权框。
- 但程序里的某些功能又用到了这些信息，所以需要再次提醒用户，而小程序本身的实现是会 ***记住*** 用户的选择，不再会出现授权弹框了，这时候需要我们唤起用户的授权页面 openSetting ，引导用户重新进行相应权限的授予。
- 微信小程序：开发者可以调用 wx.openSetting 打开设置界面，引导用户开启授权。
