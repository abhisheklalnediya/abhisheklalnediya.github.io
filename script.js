fetch("http://mob-stc.jawwy.tv/", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "nossl": "true",
    "pragma": "no-cache"
  },
  "referrer": "http://localhost:3001/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "omit"
}).then(()=>{
    document.getElementById('status').innerText = 'SUCCESS'
}).catch((e)=>{
    document.getElementById('status').innerText =`ERROR, ${e}`
});