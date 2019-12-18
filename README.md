# bomb-decorator
> Bomb decorator.

## installation
```bash
npm install -S @feizheng/bomb-decorator
```

## usage
```js
import bomb from '@feizheng/bomb-decorator';

class MyHttp(){
  request(){
    // your codes...
  }

  @bomb
  'post,get,put,delete'(inName){
    return (inUrl,inData) => {
      this.request(inName, inUrl, inData);
    };
  }
}

// const http = new MyHttp();
// Now, http has these methods:

// http.post()
// http.get()
// http.put()
// http.delete()
// http.request()
```
