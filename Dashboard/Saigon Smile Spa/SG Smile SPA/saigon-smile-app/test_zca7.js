import { Zalo } from 'zca-js';
import fs from 'fs';

(async () => {
    try {
        const credentialsRaw = fs.readFileSync('zalo_credentials.json', 'utf8');
        const credentials = JSON.parse(credentialsRaw);
        const zalo = new Zalo();
        const api = await zalo.login(credentials);
        
        console.log("send functions:", Object.keys(api).filter(k => k.startsWith('send')));
        process.exit(0);
    } catch (err) {
        console.error("Lỗi:", err);
    }
})();
