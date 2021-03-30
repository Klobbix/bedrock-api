# bedrock-api
Minecraft Bedrock Edition API implementation in Typescript targeting Minecraft Bedrock Edition 1.16.20.

### JavaScript API
https://minecraft.gamepedia.com/Bedrock_Beta_Script_Documentation

### Compiling
When first loading the project you will need to install the various node packages using:

`npm install`

After this, compiling of the project can be done using:

`npm run build`

This will compile the .ts files into the output folder named "dist".

### Packaging
After the source has been compiled, you can manually package the api for
use Minecraft Bedrock Edition projects using the command:

`npm pack`

This will create a .tgz file in your root directory that you can then npm install locally into other projects using:

`npm install ABSOLUTE/PATH/TO/TGZ/File`
