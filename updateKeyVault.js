const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const credential = new DefaultAzureCredential();

const vaultName = "<YOUR KEYVAULT NAME>";
const url = `https://${vaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

const secretName = "MySecretName";

async function main() {
  const result = await client.getSecret(secretName);
  await client.updateSecretProperties(secretName, result.properties.version, { enabled: false });
}

main();