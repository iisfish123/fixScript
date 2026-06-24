# fixScript

## 背景

vpn托管配置了`自动更新`每次自动更新后都丢失了手动配置的信息。
为了解决上述问题，开发了这个定时器。

## ENV

node14.19.0

## Usage

```sh
- npm install pm2 -g
- npm i
```

## 启动

- 安装pm2

```sh
pm2 reload ecosystem.config.js --env production
```

### 设置开机自启动

- pm2保存信息

```sh
pm2 save
```

- 设置pm2开机自启动命令

```sh
pm2 startup
```

- startup后，输出一条需要你再执行的命令，按它提示的命令继续即可。如

```sh
sudo env PATH=$PATH:/Users/xxxxx/.nvm/versions/node/v22.21.1/bin /Users/xxxxx/.nvm/versions/node/v22.21.1/lib/node_modules/pm2/bin/pm2 startup launchd -u xxxxx --hp /Users/xxxx
```

### 关闭开机自启动

- pm2 unstartup：移除开机自动启动的系统启动脚本

```sh
pm2 unstartup
```

- pm2 save：更新 PM2 的保存状态，避免下次又被恢复

```sh
pm2 save
```

### 解决

- 脚本自动新增VPN配置，解决配置被覆盖问题
- 或许有别的方法，暂时没明白
