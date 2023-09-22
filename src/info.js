export const name = "Name of your plugin";
export const authors = [ "Your name" ];
export const version = "1.0.0";
export const license = "MIT";

export const filename = `my-plugin-v${version}.js`;

/**
 * The following fields determine which OpenRCT2 API version to use. It's best to always target
 * the latest release version, unless you want to use specific versions from a newer develop
 * version. Version 77 equals the v0.4.5 release.
 * @see https://github.com/OpenRCT2/OpenRCT2/blob/v0.4.5/src/openrct2/scripting/ScriptEngine.h#L50
 */
export const targetApiVersion = 77;
export const type = "remote";