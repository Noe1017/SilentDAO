#!/bin/bash

# SilentDAO Demo Script
# 使用方法: bash demo.sh

echo "🎤 SilentDAO 演示脚本"
echo "=================="
echo ""

# 检查依赖
echo "📋 演示前检查..."
echo ""

# 检查前端是否运行
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ 前端应用运行中: http://localhost:3000"
else
    echo "❌ 前端应用未运行"
    echo "   请执行: cd frontend && npm run dev"
    exit 1
fi

# 检查合约地址
CONTRACT_ADDRESS="0x0565862614bABb107df72611922E7d853C39D06a"
echo "✅ 合约地址: $CONTRACT_ADDRESS"
echo "   查看合约: https://sepolia.mantle.xyz/address/$CONTRACT_ADDRESS"
echo ""

# 检查余额
echo "💰 检查钱包余额..."
BALANCE=$(node -e "
const { ethers } = require('ethers');
const provider = new ethers.JsonRpcProvider('https://rpc.sepolia.mantle.xyz');
const address = '0xBebF49CB513fCB4b9F2C71947C46eE7BF098f156';
provider.getBalance(address).then(balance => {
  console.log(ethers.formatEther(balance));
}).catch(err => console.error('0'));
")
echo "   钱包余额: $BALANCE MNT"
echo ""

# 打开浏览器
echo "🌐 打开演示页面..."
echo ""

# macOS
if [[ "$OSTYPE" == "darwin"* ]]; then
    open http://localhost:3000
    open http://localhost:3000/logos.html
    open "https://sepolia.mantle.xyz/address/$CONTRACT_ADDRESS"
fi

# Linux
if [[ "$OSTYPE" == "linux-gnu"* ]]; then
    xdg-open http://localhost:3000
    xdg-open "https://sepolia.mantle.xyz/address/$CONTRACT_ADDRESS"
fi

echo ""
echo "✅ 准备完成！"
echo ""
echo "📝 演示流程："
echo "   1. 展示首页 (http://localhost:3000)"
echo "   2. 连接钱包"
echo "   3. 创建提案"
echo "   4. 匿名投票"
echo "   5. 查看链上数据"
echo ""
echo "📖 查看完整演示指南: cat DEMO_GUIDE.md"
echo ""
echo "🚀 开始演示吧！"
