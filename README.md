# fixScript

## ENV
node14.19.0

## Usage
- npm install pm2 -g
- npm i

## 启动
安装pm2 
pm2 reload ecosystem.config.js --env production

### 起源
配置文件被人为手动修改后，又因自动更新的配置覆盖掉，进而丢失了手动的配置

### 解决
- 脚本自动新增VPN配置，解决配置被覆盖问题
- 或许有别的方法，暂时没明白