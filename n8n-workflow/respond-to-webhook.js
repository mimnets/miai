{
  "nodes": [
    {
      "parameters": {
        "respondWith": "text",
        "responseBody": "={\n  \"response\": \"{{ $json.output }}\",\n  \"status\": \"success\"\n}",
        "options": {
          "responseCode": 200
        }
      },
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1.4,
      "position": [
        -832,
        -496
      ],
      "id": "0229d4b5-49bf-4a8a-996e-f198b3764665",
      "name": "Respond to Webhook"
    }
  ],
  "connections": {},
  "pinData": {},
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "558d88703fb65b2d0e44613bc35916258b0f0bf983c5d4730c00c424b77ca36a"
  }
}
