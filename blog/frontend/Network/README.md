# 计算机网络基础

## 分类

### 三种交换方式

| 电路交换（电信网，电话）| 报文交换 | 分组交换（互联网）|
| ----------- | ----------- | ----------- |
| 建立连接的 | 无需建立连接的 |无需建立连接的 |
| 时延短 | 时延长 | 时延长 |
| 无额外的信息传递 | 额外信息传递（整个报文发送） | 大量额外信息传递（每个分组都要） |

### 网络种类

- 交换技术：电路交换网络、报文交换网络、分组交换网络
- 范围：WAN 广域网 、LAN 局域网、MAN 城域网、PAN(WPAN)个域网
- 拓扑：网状、总线、星型、环状

## 网络的性能指标

- 速率：连接在计算机网络上的主机在数字信道上传送数据的速率。
- 带宽：网络的通信线路传送数据的能力（单位时间内从网络中的某一个点到另外一个点所能通过的最高数据率,带宽的单位为 bit/s）
- 吞吐量：单位时间内通过某个网络（通信线路、接口）的实际的数据量。
- 时延：
    - 发送时延：主机或路由器发送数据帧所需要的时间。
    - 传播时延：电磁波在信道中传播一定的距离需要花费的时间。
    - 处理时延：主机或者路由器接受到分组时要花费一定的时间去处理。
    - 排队时延：分组在网络传输时，进入路由器后要在输入队列中排队等待处理，路由器确定转发接口后，还要在输出队列中排队等待转发，这就是排队时延。
- 时延带宽积（传播时延）
- 往返时间
- 利用率：信道利用率并非越高越好，因为引起的时延也会迅速增加
- 丢包率

## 网络体系

实际的TCP/IP协议簇
| 应用层 | 运输层 | 网际层 | 网络接口层（物理层 + 数据链路层） |
| ----------- | ----------- | ----------- |----------- |
| 解决通过应用进程的交互来实现特定的网络应用的问题 | 解决进程之间基于网络的通信问题 | 解决分组在多个网络上传输以及路由的问题 |解决使用何种信号传输比特以及分组在一个网络上的传输问题 |

- 两台计算机连接，采用什么传输媒体（双绞线），什么物理接口（RJ45），什么信号（高低电平表示0、1比特）？物理层

- 如何标识网络中的各主机（MAC地址），如何从数据中提取出地址数据来，信号冲突如何解决（争用信道）？数据链路层

- 如何标识网络以及网络中的各主机（IP地址），如何转发分组（路由选择）？网络层

- 如何标识哪个进程处理分组？传输错误如何处理？运输层

- 通过不同的协议来完成特定的网络应用，万维网HTTP邮件SMTP文件FTP？应用层

![](https://frontend-alex.gitee.io/drawing-bed/network/basis/network_osi.png)

## 物理层

### 传输方式

- 串行传输、并行传输
- 同步传输、异步传输
- 单工通信、半双工通信、全双工通信

### 编码和调制

- 不归零编码（需要时钟信号）、归零编码（浪费编码资源）、曼彻斯特编码（变化的趋势代表比特）、差分曼彻斯特编码（码元开始和码元结束的状态趋势代表比特）

### 信道的极限容量

奈氏准则 —— 香农公式

## 数据链路层

### 封装成帧

应用层发送数据，会经过计算机网络体系中的分层，不断为其数据添加协议标识，数据链路层在接收网络层封装后的协议数据单元后，会添加帧头、帧尾，再传递给物理层。

接收方的数据链路层如何从物理层中交付的比特流中提取出一个个的帧呢？

- 帧头和帧尾中各含有一字节的帧定界。
- 以太网式前导码加帧间间隔。
- 发送帧之前会进行扫描，帧定界标识会发送错误，所以需要插入一个转义字符。

### 差错检测

帧尾中的检错码（FCS 帧检测序列）+ 检错算法来判断是非误码。

- 奇偶校验：太扯了，不可靠，偶数位发送变化则不会检测出来。
- 循环冗余校验（CRC）：复杂，可靠。

### 可靠传输

丢弃传输错误的帧，如果是可靠的，则会采用一些手段来实现重新发送，来保证数据的完整性。

- 停止——等待协议（SW）
    - 信道利用率太低，每发送一个数据分组需要等待一个确认码的传回时间。
- 回退N帧协议（GBN）
    - 通信信号不好时，信道利用率也不高。。。逻辑复杂，误码影响的牵连数据过多。
- 选择重传协议（SR）
    - ![](https://frontend-alex.gitee.io/drawing-bed/network/basis/SR.png)

### PPP 点对点协议

### ARP 协议

ip 地址 -> MAC 地址

FAQ:

- 防止信号碰撞 CSMA/CD(共享式以太坊) CSMA/CA(802.11局域网)。

- 网桥、交换机的工作原理？

- 集线器（物理层互连设备）与交换机的区别？