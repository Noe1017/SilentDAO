# 🎬 SilentDAO 演示视频录制指南

## 📹 视频录制准备

### 视频要求
- **时长**: 3-5 分钟
- **格式**: MP4 (1080p 或更高)
- **内容**: 完整演示 SilentDAO 功能
- **配音**: 英文讲解 + 屏幕录制

---

## 🎯 视频脚本（带时间轴）

### 0:00-0:30 开场（30秒）

**画面**: 静音 Logo 展示 + 标题

**配音/字幕**:
```
SilentDAO—Privacy-Preserving Governance Voting on Mantle L2

A decentralized voting system where your identity is protected,
your vote is anonymous, but the result is verifiable.

Built on Mantle Layer 2 for ultra-low gas fees.
```

---

### 0:30-1:15 问题阐述（45秒）

**画面**: 浏览器打开，展示传统 DAO 问题

**操作**:
- 打开以太坊浏览器：https://etherscan.io
- 查看某个 DAO 投票记录（公开可见）
- 显示 Gas 费数据

**配音**:
```
Current DAO governance has three critical problems:

First, public voting enables whale coercion. Large token holders
can see how everyone voted and pressure small holders.

Second, voter intimidation. Your voting record is permanently
on the blockchain, leading to retaliation and blacklistings.

Third, prohibitive gas fees. On Ethereum, a single vote costs
50 to 100 dollars—too expensive for ordinary users.

The result? Only 10% of DAO members vote, and the top 10%
control 80% of the power.
```

---

### 1:15-1:45 解决方案（30秒）

**画面**: 切换到 SilentDAO 首页

**配音**:
```
SilentDAO solves all three problems:

✅ Merkle Tree verification—prove eligibility without revealing identity
✅ Nullifier mechanism—prevent double-voting with cryptographic certainty
✅ Mantle L2 deployment—reduce gas costs by 99.99% to just $0.001 per vote

Let me show you how it works.
```

---

### 1:45-2:20 连接钱包（35秒）

**画面**: 演示钱包连接

**操作**:
1. 点击 "Connect Wallet"
2. MetaMask 弹窗
3. 切换到 Mantle Sepolia（如果需要）
4. 确认连接

**配音**:
```
First, connect your MetaMask wallet.

The system automatically detects if you're on the correct network.
If not, it prompts to switch to Mantle Sepolia Testnet.

Once connected, your address is displayed with a green indicator
showing you're ready to vote.
```

---

### 2:20-3:10 浏览提案（50秒）

**画面**: 展示提案列表

**操作**:
- 向下滚动查看提案
- 展示提案详情
- 显示投票统计

**配音**:
```
Now you can see all active governance proposals.

Each proposal card displays:
• The proposal title and description
• Voting status and time remaining
• Real-time vote tally (For, Against, Abstain)
• An anonymous voting button

All data is read from the smart contract in real-time.
```

---

### 3:10-4:00 匿名投票（50秒）

**画面**: 完整投票流程

**操作**:
1. 点击 "Vote Anonymously"
2. 展示投票选项
3. 选择 "For"
4. 提交投票
5. 显示成功提示

**配音**:
```
Let's vote anonymously. Click the "Vote Anonymously" button.

The voting interface appears with three options: For, Against, or Abstain.

Select "For" to support the proposal.

Important: Your privacy is protected. While your vote is anonymous,
the system prevents double-voting through the Nullifier mechanism.

Submit your vote. The smart contract verifies your Merkle proof
and nullifier, then records your encrypted vote on-chain—all for
approximately $0.001 in gas fees.

Vote submitted successfully!
```

---

### 4:00-4:40 创建提案（40秒）

**画面**: 切换到创建提案

**操作**:
1. 点击 "Create Proposal" 标签
2. 填写提案信息
3. 提交创建

**配音**:
```
SilentDAO also allows administrators to create new proposals.

Fill in the proposal details:
• Title: "Mantle Ecosystem Expansion Fund"
• Description: "Allocate 5000 MNT to fund innovative projects"
• Voting duration: 7 days

Click "Create Proposal" to submit.

The proposal is immediately added to the voting list,
and eligible voters can begin anonymous voting.
```

---

### 4:40-5:20 链上验证（40秒）

**画面**: 打开区块链浏览器

**操作**:
- 打开 Mantle 浏览器
- 展示合约地址
- 展示交易记录

**配音**:
```
All operations are publicly verifiable on the blockchain.

This is the SilentDAO smart contract on Mantle Sepolia explorer.

You can see:
• The contract address
• Deployment time
• All transactions (create proposals, votes, etc.)
• The contract code itself

This ensures complete transparency and verifiability while
maintaining voter anonymity.
```

---

### 5:20-5:45 总结（25秒）

**画面**: 回到首页，展示 Logo

**配音**:
```
SilentDAO achieves the perfect balance of privacy and transparency:

✅ Anonymity—protect voter identity
✅ Verifiability—on-chain, transparent results
✅ Affordability—$0.001 per vote

Built for the Mantle Global Hackathon.

Try it yourself at github.com/[your-repo]
```

---

### 5:45-6:00 结尾（15秒）

**画面**: Logo + 联系方式

**配音**:
```
SilentDAO

Vote Anonymously. Govern Securely.

Thank you!
```

**背景音乐**: 淡入，优雅结束

---

## 🎥 录制方案

### 方案 A: 屏幕录制 + 画外音（推荐）

**工具**:
- macOS: 使用 QuickTime Player
- Windows: 使用 OBS Studio

**步骤**:

1. **录制屏幕**
   ```bash
   # macOS
   打开 QuickTime Player → 文件 → 新建屏幕录制

   # Windows
   下载 OBS Studio → 开始录制
   ```

2. **准备配音**
   - 使用 ElevenLabs 生成音频
   - 或自己录制画外音

3. **合成**
   - 使用 iMovie、DaVinci Resolve 或剪映
   - 对齐音频和视频

---

### 方案 B: 实时讲解录制（简单）

**工具**: 任何屏幕录制工具

**步骤**:
1. 打开录制软件
2. 选择录制区域（整个浏览器窗口）
3. 开始录制
4. 一边操作一边讲解
5. 结束录制

**优点**: 一次完成，不需要后期制作

---

### 方案 C: 录制 + 添加字幕（专业）

**工具**:
- 录制: Loom、OBS、或系统自带
- 字幕: 剪映（CapCut）或 Rev.com

**步骤**:
1. 录制演示视频
2. 生成英文字幕（自动识别）
3. 添加中英双语字幕
4. 导出最终视频

---

## 🎬 专业录制技巧

### 录制前准备

1. **清理浏览器**
   ```
   - 关闭不需要的标签页
   - 清除浏览器缓存
   - 关闭通知
   - 全屏模式（F11）
   ```

2. **准备测试环境**
   ```bash
   # 确保前端运行
   cd frontend && npm run dev

   # 确保 MetaMask 解锁
   # 确保有足够 Gas 费
   # 测试所有功能
   ```

3. **检查网络**
   ```
   - 网络连接稳定
   - 前端响应正常
   - MetaMask 正常工作
   ```

---

### 录制时注意

**✅ DO:**
- 使用稳定的鼠标移动
- 操作不要太快
- 停顿展示关键信息
- 清晰点击按钮
- 全屏录制最佳

**❌ DON'T:**
- 移动鼠标太乱
- 操作太快
- 有多余的操作
- 显示个人信息
- 离开演示页面

---

### 声音控制

**配音建议**:
- 语速适中（不要太快）
- 声音清晰自信
- 专业但友好
- 适当停顿强调重点

**背景音乐**:
- 轻柔的科技风音乐
- 音量要低（10-15%）
- 不要干扰讲解

---

## 📝 视频信息清单

在视频描述中包含：

```
📌 Project: SilentDAO
🏆 Hackathon: Mantle Global Hackathon 2025
🌐 Network: Mantle Sepolia Testnet
📝 Contract: 0x0565862614bABb107df72611922E7d853C39D06a
🔗 Explorer: https://sepolia.mantle.xyz/address/0x0565862614bABb107df72611922E7d853C39D06a
💻 GitHub: [your-repo]
📧 Contact: [your-email]

#SilentDAO #Mantle #Hackathon #Web3 #DAO #Governance #Privacy
```

---

## 🎯 录制检查清单

### 录制前 (✅)
- [ ] 前端应用运行正常
- [ ] MetaMask 已解锁并配置
- [ ] 测试所有功能正常
- [ ] 准备好讲解稿
- [ ] 清理浏览器标签页
- [ ] 检查网络连接
- [ ] 全屏准备就绪

### 录制中 (✅)
- [ ] 录制软件运行中
- [ ] 麦克风正常
- [ ] 开始讲解
- [ ] 按脚本操作
- [ ] 适当停顿
- [ ] 不要出错

### 录制后 (✅)
- [ ] 检查视频质量
- [ ] 检查音频清晰
- [ ] 剪辑多余部分
- [ ] 添加字幕（可选）
- [ ] 添加背景音乐
- [ ] 导出 MP4
- [ ] 上传到 YouTube/Vimeo
- [ ] 测试视频播放

---

## ⏰ 推荐录制时间表

### 完整录制时间: 30分钟

**分配**:
- 准备环境: 10分钟
- 正式录制: 15分钟（3-5遍取最佳）
- 简单剪辑: 5分钟

### 高质量录制时间: 1小时

**分配**:
- 准备环境: 10分钟
- 录制演示: 20分钟
- 生成配音: 15分钟
- 剪辑合成: 10分钟
- 最后检查: 5分钟

---

## 🎨 视频规格建议

**最佳设置:**
- 分辨率: 1920x1080 (1080p) 或更高
- 帧率: 30 fps
- 格式: MP4 (H.264)
- 比特率: 8-15 Mbps
- 音频: AAC, 128 kbps, 48 kHz
- 时长: 3-5 分钟

---

## 🚀 快速录制方案（15分钟）

### 第1步: 准备（5分钟）
```bash
1. 打开 http://localhost:3000
2. 解锁 MetaMask
3. 测试所有功能
4. 清理浏览器
5. 打开录制工具
```

### 第2步: 录制（8分钟）
```
1. 开始录制
2. 跟着演示脚本操作
3. 边操作边讲解
4. 出错了就重来
5. 取最佳版本
```

### 第3步: 导出（2分钟）
```
1. 停止录制
2. 检查视频
3. 简单剪辑（删除头尾）
4. 导出 MP4
```

---

## 📤 提交准备

### 视频标题
```
SilentDAO - Privacy-Preserving DAO Governance on Mantle L2
| Mantle Global Hackathon 2025 Submission
```

### 视频描述
```
SilentDAO enables anonymous, verifiable voting for DAOs on Mantle L2.

🔐 Privacy: Merkle Tree verification protects voter identity
✅ Transparency: On-chain results anyone can verify
💰 Low Cost: $0.001 per vote (99.99% cheaper than Ethereum)

Problem: Public voting leads to whale coercion and voter intimidation
Solution: Anonymous voting with cryptographic proof of eligibility
Technology: Solidity + React + Merkle Tree + Mantle L2

Contract: 0x0565862614bABb107df72611922E7d853C39D06a
Explorer: https://sepolia.mantle.xyz/address/0x0565862614bABb107df72611922E7d853C39D06a
GitHub: [your-repo]

#SilentDAO #Mantle #Hackathon #Web3 #DeFi #Governance
```

---

## 🎯 演示流程（跟着做）

现在开始录制！我会一步步指导你...

准备好了吗？告诉我，我们开始第一步！
