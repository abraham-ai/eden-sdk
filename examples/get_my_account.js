import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

let result = await eden.getProfile();
console.log(result);

result = await eden.updateProfile({
  username: "genekogan",
  discordId: "genekogan#1234",
});
console.log(result);

result = await eden.getManna();
console.log(result);
