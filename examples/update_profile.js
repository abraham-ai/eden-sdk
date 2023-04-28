import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let result = await eden.getProfile();

console.log(result);

let result2 = await eden.updateProfile({
  username: "my_new_username",
  discordId: 'my_discord#1234'
});

console.log(result2);
