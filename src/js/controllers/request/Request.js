export class Request{

  static async fetch(url,params){
    let req = await fetch(url, params);
    return await req.json();
  }
}
