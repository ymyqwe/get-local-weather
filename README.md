# get-local-weather
Nodejs get local weather script

## Usage

### 1. Get local weather

```bash
npx get-local-weather 
# the result is based on your IP address
```


### 2. Search by city
`npx get-local-weather -c {城市}`

or

`get-local-weather -c {城市}`

P.S. 目前仅支持中文搜索

```
Options:

  -h, --help        output usage information
  -V, --version     output the version number
  -c, --city [城市]  query city weather
```

## Install
```bash
$ npm install -g get-local-weather
$ get-local-weather --version
1.0.1
```

    
## Sample Data

```
北京 ⛅️ 8日（今天）  🌡️ 32℃  💧 38  💨 82  🌬 <3级 多云    
===================================================    
北京 ⚡️ 9日（明天）  🌡️ 27℃  🌬 3-4级转<3级 阴转雷阵雨    
北京 ☀️ 10日（后天）  🌡️ 24℃  🌬 3-4级转<3级 晴v
北京 ⛅️ 11日（周四）  🌡️ 24℃  🌬 <3级 多云    
北京 ⛅️ 12日（周五）  🌡️ 23℃  🌬 <3级 多云转晴    
北京 ☀️ 13日（周六）  🌡️ 26℃  🌬 3-4级转<3级 晴    
北京 ⛅️ 14日（周日）  🌡️ 25℃  🌬 3-4级转<3级 多云    
```