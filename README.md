# bomb-decorator
> Bomb decorator.


## install:
```bash
npm install -S afeiship/bomb-decorator --registry=https://registry.npm.taobao.org
```

## usage:
```js
import bomb from 'bomb-decorator';


class MyHttp(){

  request(){
    // your codes...
  }

  @bomb
  'post,get,put,delete'(inName)=>{
    return (inUrl,inData)=>{
      this.request(inName, inUrl, inData);
    };
  }
  
}
```
