const azure_identity = require('@azure/identity')
const az_key_vault = require('@azure/keyvault-secrets')

const credential = new azure_identity.DefaultAzureCredential();

const vaultName = "kvlt-aman";
const url = `https://${vaultName}.vault.azure.net`;

const client = new az_key_vault.SecretClient(url, credential);

const secretName = "AzureSettingSecrets";

async function main() {
  await client.beginDeleteSecret(secretName);
}

main();