const http = require('http')

const GET = `
I can not give you a flag without compensation.

Please use POST!
`

const POST = `FLAG{h77p_h45_53v3n_m37h0d5}`

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write("flag is : CTF_200{w31c0m3_t0_und3r6r0und}")
    res.end()
}).listen(3000)