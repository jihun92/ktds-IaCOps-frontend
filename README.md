# 배포 하기

위 문서는 IaC Ops front-end 배포 가이드를 작성한 문서 입니다.

## 0. VSC에서 sftp 활용하기

Visual Studio Code (VSC)에서 SFTP(SSH File Transfer Protocol)를 사용하여 원격 서버와 파일을 전송하려면 "SFTP"라는 확장 기능을 설치해야 합니다. 이러한 확장 기능을 통해 VSC에서 원격 서버에 파일을 업로드하거나 다운로드하는 작업을 수행할 수 있습니다.

## 1. 마켓플레이스에서 sftp 확장프로그램 설치


## 2. 왼쪽 사이드바에 sftp 아이콘이 나타난 것을 확인


## 3.  .vscode/sftp.json 파일 확인 및 수정하기

```sh
{
    "name": "Web",
    "host": "www.iacops.site",
    "protocol": "sftp",
    "port": 22,
    "username": "centos",
    "remotePath": "/home/centos", 
    "privateKeyPath": "/Users/seungmi/project/IaCOps-Key.pem", // 자신의 키 경로로 수정하기
    "ignore": [
      ".vscode",
      ".git",
      ".DS_Store",
      "node_modules",
      "!dist/**",
      "!vite.config.js"
    ]
  }
  
```

## 4. 서버 접속 후 /home/centos 내 파일 전체 삭제

## 5. vsc로 돌아와 파일탐색기에서 오른쪽마우스 -->  "Sync Local -> Remote" 클릭 

## 6. 파일 탐색기 하단 done 메시지 확인 후 서버 접속하여 명령어 실행

```sh
npm install 
nohup sudo npm run preview &
```
