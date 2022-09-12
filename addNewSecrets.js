const  DefaultAzureCredential  = require("@azure/identity");
const  SecretClient  = require("@azure/keyvault-secrets");

const credential = new DefaultAzureCredential();

const vaultName = "kvlt-aman";
const url = `https://kvlt-aman.vault.azure.net/`;
const client = new SecretClient(url, credential);


//setting secret value
const secretName = "AzureSettingSecrets";

async function generateNewSecret() {
  const result = await client.setSecret(secretName, "MySecretValue");
  console.log("result: ", result);
}

generateNewSecret()
