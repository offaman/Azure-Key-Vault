const azure_identity = require('@azure/identity')
const az_key_vault = require('@azure/keyvault-secrets')

const credential = new azure_identity.DefaultAzureCredential();

const vaultName = "kvlt-aman";
const url = `https://kvlt-aman.vault.azure.net/`;

const client = new az_key_vault.SecretClient(url, credential);

const secretName = "AzureSettingSecrets";

async function getSecret() {
  const specificSecret = await client.getSecret(secretName);
  console.log(specificSecret);
}

getSecret('AzurePractice');