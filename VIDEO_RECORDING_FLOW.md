# 🎬 SilentDAO 视频录制流程

## 📋 录制前准备 (5分钟)

### ✅ 检查清单
- [ ] 前端运行中：`http://localhost:3000`
- [ ] MetaMask 已解锁，切换到 Mantle Sepolia
- [ ] 确保钱包有测试 MNT
- [ ] 关闭浏览器其他标签页
- [ ] 全屏准备 (F11)
- [ ] 打开录制软件

---

## 🎯 录制流程 (6分钟)

### 第1部分：开场展示 (30秒)

**画面：** 首页全屏展示

**操作：**
```
1. 打开 http://localhost:3000
2. 停留 5 秒展示 Logo 和标题
3. 缓慢向下滚动展示数据卡片
```

**讲解：**
```
"Welcome to SilentDAO - a privacy-preserving DAO governance system
built on Mantle Layer 2.

Our core mission: enable anonymous voting with full verifiability,
all for just $0.001 per vote."
```

---

### 第2部分：钱包连接 (45秒)

**操作：**
```
1. 点击 "Connect Wallet"
2. 等待 MetaMask 弹窗 (停顿 2 秒)
3. 点击 "Next" → "Connect"
4. 展示连接成功状态
```

**讲解：**
```
"First, let's connect the wallet.

The system automatically detects the network and prompts to switch
to Mantle Sepolia if needed.

Connected! You can see the wallet address with a green indicator."
```

---

### 第3部分：浏览提案 (45秒)

**操作：**
```
1. 向下滚动到提案列表
2. 鼠标悬停在第一个提案上
3. 停留 3 秒展示提案详情
4. 指向投票统计进度条
```

**讲解：**
```
"Now you can see all active governance proposals.

Each card displays:
- Proposal title and description
- Voting status and time remaining
- Real-time vote tally (For, Against, Abstain)
- Anonymous voting button

All data is read from the smart contract in real-time."
```

---

### 第4部分：匿名投票 (90秒)

**操作：**
```
1. 点击第一个提案的 "Vote Anonymously"
2. 停留 3 秒展示投票界面
3. 鼠标依次指向三个选项 (Against → For → Abstain)
4. 点击 "For"
5. 停顿 1 秒
6. 点击 "Submit Vote"
7. 等待成功提示 (2秒)
```

**讲解：**
```
"Let's vote anonymously. Click the 'Vote Anonymously' button.

You'll see three options: Against, For, or Abstain.

Select 'For' to support the proposal.

Important: Your privacy is protected through Merkle Tree verification.
The contract verifies you're eligible to vote without revealing
your identity.

A Nullifier prevents double-voting - each address can vote only
once per proposal.

Submit your vote. The smart contract validates everything and
records your encrypted vote on-chain.

Success! All for approximately $0.001 in gas fees."
```

---

### 第5部分：创建提案 (60秒)

**操作：**
```
1. 点击顶部 "Create Proposal" 标签
2. 快速填写表单：
   - Title: "Mantle Ecosystem Fund"
   - Description: "Allocate 5000 MNT to innovative projects"
   - Duration: 选择 "7 Days"
3. 点击 "Create Proposal"
4. 等待成功提示 (2秒)
5. 切换回 "Proposals" 标签展示新提案
```

**讲解：**
```
"SilentDAO also allows administrators to create new proposals.

Fill in the proposal details:
- Title: 'Mantle Ecosystem Fund'
- Description: 'Allocate 5000 MNT to innovative projects'
- Duration: 7 days

Submit to create.

The proposal is immediately added to the voting list, and eligible
voters can begin anonymous voting."
```

---

### 第6部分：合约验证 (45秒)

**操作：**
```
1. 打开新标签页
2. 输入：https://sepolia.mantle.xyz/address/0x0565862614bABb107df72611922E7d853C39D06a
3. (如果打不开) 切换到 http://localhost:3000/contract.html
4. 展示合约地址和功能列表
5. 向下滚动展示安全特性
```

**讲解：**
```
"All operations are publicly verifiable on the blockchain.

This is the SilentDAO smart contract on Mantle Sepolia.

You can verify:
- Contract address and code
- All transactions (create proposals, votes, etc.)
- Complete transparency while maintaining anonymity"

(如果浏览器打不开)
"If the explorer is temporarily unavailable, you can view all
contract details on our verification page."
```

---

### 第7部分：总结 (30秒)

**操作：**
```
1. 回到首页 http://localhost:3000
2. 全屏展示 Logo 和标题
3. 停留 5 秒
```

**讲解：**
```
"SilentDAO achieves the perfect balance of privacy and transparency:

✅ Anonymity - protect voter identity through Merkle Trees
✅ Verifiability - on-chain, transparent results
✅ Affordability - $0.001 per vote on Mantle L2

Built for the Mantle Global Hackathon 2025.

Vote Anonymously. Govern Securely.

Thank you!"
```

---

## 🎬 录制技巧

### ✅ DO
- **慢速操作** - 每个操作后停顿 1-2 秒
- **清晰点击** - 鼠标移动要稳，不要乱晃
- **全屏录制** - 使用 F11 全屏模式
- **声音清晰** - 说话靠近麦克风
- **适当停顿** - 重要信息后停顿强调

### ❌ DON'T
- **操作太快** - 观众跟不上
- **说话太快** - 像在赶时间
- **展示错误** - 出错重新录
- **多余操作** - 不要来回切换标签
- **露出隐私** - 不要展示完整私钥或敏感信息

---

## 📝 快速参考脚本

### 完整版 (6分钟)

```
[0:00-0:30] 开场展示
"Welcome to SilentDAO - privacy-preserving governance on Mantle L2.
Anonymous voting, verifiable results, $0.001 per vote."

[0:30-1:15] 钱包连接
"Connect wallet. Auto-switch to Mantle Sepolia. Green indicator shows ready."

[1:15-2:00] 浏览提案
"View all active proposals with real-time vote tallies from smart contract."

[2:00-3:30] 匿名投票
"Click vote anonymously. Select 'For'. Merkle Tree protects identity.
Nullifier prevents double-voting. Submit for $0.001. Success!"

[3:30-4:30] 创建提案
"Admin creates proposal. Fill details. Submit. Immediately appears in list."

[4:30-5:15] 合约验证
"All operations verifiable on-chain. View contract address, code, transactions."

[5:15-5:45] 总结
"SilentDAO = Anonymity + Verifiability + Affordability.
Vote Anonymously. Govern Securely. Thank you!"
```

### 简化版 (3分钟)

```
"SilentDAO enables anonymous DAO voting on Mantle L2.

[Connect wallet]
"Connect and switch to Mantle network automatically."

[View proposals]
"Browse active proposals with real-time voting data."

[Vote]
"Click vote, select choice, submit. Merkle Tree ensures anonymity
while Nullifier prevents double-voting. All for $0.001."

[Create proposal]
"Admin creates proposals for community voting."

[Verify]
"Everything is on-chain and verifiable."

[End]
"SilentDAO - anonymous, verifiable, affordable. Thank you!"
```

---

## 🔧 技术要点总结

**讲解时强调的技术亮点：**

1. **Merkle Tree 验证** (2句话)
   - "Proves eligibility without revealing identity"
   - "Cryptographic proof of voter eligibility"

2. **Nullifier 防双投** (1句话)
   - "Each address generates unique hash, prevents double-voting"

3. **Mantle L2 低成本** (2句话)
   - "Gas reduced from $50 to $0.001"
   - "99.99% cost reduction enables mass participation"

4. **链上可验证** (1句话)
   - "All votes recorded on-chain, transparent and verifiable"

---

## ⏰ 时间分配建议

| 部分 | 时长 | 累计 |
|------|------|------|
| 开场 | 30秒 | 0:30 |
| 连接钱包 | 45秒 | 1:15 |
| 浏览提案 | 45秒 | 2:00 |
| 投票演示 | 90秒 | 3:30 |
| 创建提案 | 60秒 | 4:30 |
| 合约验证 | 45秒 | 5:15 |
| 总结 | 30秒 | 5:45 |
| **总计** | **5分45秒** | |

---

## 🎯 录制检查清单

### 录制前 (✅)
- [ ] 前端应用运行正常
- [ ] MetaMask 已配置好
- [ ] 测试所有功能
- [ ] 清理浏览器
- [ ] 准备好讲解稿
- [ ] 录制软件就绪

### 录制中 (✅)
- [ ] 语速适中
- [ ] 操作不要太快
- [ ] 停顿展示关键信息
- [ ] 不要出错
- [ ] 声音清晰

### 录制后 (✅)
- [ ] 检查视频质量
- [ ] 剪辑多余部分
- [ ] 添加字幕（可选）
- [ ] 导出 MP4 (1080p)
- [ ] 测试播放

---

## 🚀 快速开始

1. **打开所有页面**
   ```
   - http://localhost:3000 (主应用)
   - http://localhost:3000/contract.html (合约验证)
   - MetaMask (已解锁)
   ```

2. **开始录制**

3. **按照流程一步步操作**

4. **出错就重来** (多录几次选最好的)

5. **简单剪辑** (删除头尾多余部分)

---

**准备好了吗？开始录制吧！** 🎬

记住：宁可慢一点，不要出错。多录几次，选最好的版本！
