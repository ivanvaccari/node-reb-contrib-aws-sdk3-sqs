module.exports = function(RED) {
    function RemoteServerNode(n) {
        RED.nodes.createNode(this,n);
        this.accessKey = this.credentials.accessKey;
        this.secretKey = this.credentials.secretKey;
	    this.region = n.region;
        this.name = n.name;
        this.proxyRequired = n.proxyRequired;
        this.proxy = n.proxy;
    }
    RED.nodes.registerType('aws-sdk3-config',RemoteServerNode,{credentials: {
         accessKey: {type:"text"},
         secretKey: {type:"password"}
     }});
}