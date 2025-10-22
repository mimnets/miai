{
  "nodes": [
    {
      "parameters": {
        "promptType": "define",
        "text": "=You receive and response message to {{ $json.body.message }}",
        "options": {
          "systemMessage": "=You are Miai, an intelligent and friendly AI assistant."
        }
      },
      "type": "@n8n/n8n-nodes-langchain.agent",
      "typeVersion": 2.2,
      "position": [
        -1248,
        -496
      ],
      "id": "120f38a3-6d20-4ab1-bdd1-940ae47f2634",
      "name": "AI Agent"
    }
  ],
  "connections": {
    "AI Agent": {
      "main": [
        []
      ]
    }
  },
  "pinData": {},
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "558d88703fb65b2d0e44613bc35916258b0f0bf983c5d4730c00c424b77ca36a"
  }
}
