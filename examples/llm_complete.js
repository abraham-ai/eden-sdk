import {EdenClient} from "eden-sdk";

const eden = new EdenClient();

const prompt = `I am generating text prompts for AI generators. These are descriptions of artworks which are highly detailed and aesthetically imaginative, and diverse. They should start with a description of the content and then a long list of modifiers which elaborate on the style, genre, and medium. They should be creative, bold, evocative, edgy, and eclectic.

Here are some examples.

Prototype of an isometric diorama, particle effects, 2.2 gama, sony a7r7, tamron 10-24mm f/3.5-4.5, iso 3200, extremely detailed, 8k texture, lots of flowers and vibrant plants
A steampunk fox fursona with boots sitting on a vespa moped with sunglasses, vector drawing, graphic novel, grunge, geometric
A cat chef making ramen, cartoon style, comic style, manga style
Sheikh Zayed Grand Mosque in Abu Dhabi, extremely detailed digital painting, matte colors, rim light, beautiful Lighting, 8k, stunning scene, raytracing, octane
Pikachu doing deadlifts and getting swole at a luxury gym, portra 400, gym shot, render in unreal engine
Tall green hedge maze with an evil monster in shadows, light pink smoke, geometric, minimal, vintage, creepy

I want you to generate a list of 10-20 such text prompts.`

let result = await eden.create("complete", {
  prompt: prompt
});
console.log(result);

