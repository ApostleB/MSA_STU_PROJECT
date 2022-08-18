'use strict'

const net = require('net');
const tcpClient = require('./client.js');

class tcpServer{
    constructor(name, port, urls){

        this.context = {
            port: port,
            name: name,
            urls: urls
        }
        this.merge = {};
        this.server = net.createConnection
    }
}

module.exports = tcpClient;