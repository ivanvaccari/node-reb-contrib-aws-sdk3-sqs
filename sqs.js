module.exports = function(RED) {
    function AwsSdk3SqsNode(config) {
        RED.nodes.createNode(this,config);

		this.awsConfig = RED.nodes.getNode(config.server);
		this.region = this.awsConfig.region;
        process.env.AWS_ACCESS_KEY_ID = this.awsConfig.accessKey;
        process.env.AWS_SECRET_ACCESS_KEY = this.awsConfig.secretKey;

		var node = this;
		var AWS = require("@aws-sdk/client-sqs");
        
		if (!AWS) {
			node.warn("Missing AWS credentials");
			return;
		}

        var node = this;
        const SQSClient = new AWS.SQSClient({region: this.region});
        node.on('input', function(msg) {
            msg.AWS = AWS;
            msg.SQSClient = SQSClient;
            node.send(msg);
        });
    }
    RED.nodes.registerType("aws-sdk3-sqs",AwsSdk3SqsNode);
}