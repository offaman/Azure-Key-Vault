const azure_identity = require('@azure/identity')
const az_key_vault = require('@azure/keyvault-secrets')




// async function secretinfo(){
//     client.getSecret('AzurePractice').then(res =>{
//     pass = res.value
//     }).catch(err=>{
//         console.log("error")
//         console.log(err)
//     })
// }

async function secretinfo(secretName){
    const credential = new azure_identity.DefaultAzureCredential();
    const client = new az_key_vault.SecretClient('https://kvlt-aman.vault.azure.net/',credential)
    const user = await client.getSecret(secretName)
    return user.value
}

(async () => {
    console.log(await secretinfo('AzurePractice'))
    console.log(await secretinfo('AzureSettingSecrets'))
})()

module.exports = secretinfo

module.exports = {secretinfo};



