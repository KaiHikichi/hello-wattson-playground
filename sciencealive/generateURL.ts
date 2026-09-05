import { getPlaygroundUrl } from 'livecodes';



let url = getPlaygroundUrl({
    appUrl: 'http://localhost:8080',
    config: 
    {
        "languages": ["py", "js"],
        "activeEditor": "script",
        "script": {
            "language": "javascript",
            "content": "hello"
        },
        "welcome": false,
        "allowLangChange": false,
        "recoverUnsaved": false
    },
});

console.log(url);