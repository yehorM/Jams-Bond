gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.GDNewSpriteObjects1= [];
gdjs.MainMenuCode.GDNewSpriteObjects2= [];
gdjs.MainMenuCode.GDMenuObjects1= [];
gdjs.MainMenuCode.GDMenuObjects2= [];
gdjs.MainMenuCode.GDPlayButtonObjects1= [];
gdjs.MainMenuCode.GDPlayButtonObjects2= [];
gdjs.MainMenuCode.GDQuitButtonObjects1= [];
gdjs.MainMenuCode.GDQuitButtonObjects2= [];


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.MainMenuCode.GDPlayButtonObjects1});
gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

};gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuitButtonObjects1Objects = Hashtable.newFrom({"QuitButton": gdjs.MainMenuCode.GDQuitButtonObjects1});
gdjs.MainMenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MainMenuCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.MainMenuCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


{


gdjs.MainMenuCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("QuitButton"), gdjs.MainMenuCode.GDQuitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_9546MainMenuCode_9546GDQuitButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDMenuObjects1.length = 0;
gdjs.MainMenuCode.GDMenuObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDQuitButtonObjects1.length = 0;
gdjs.MainMenuCode.GDQuitButtonObjects2.length = 0;

gdjs.MainMenuCode.eventsList2(runtimeScene);
gdjs.MainMenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MainMenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MainMenuCode.GDMenuObjects1.length = 0;
gdjs.MainMenuCode.GDMenuObjects2.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects1.length = 0;
gdjs.MainMenuCode.GDPlayButtonObjects2.length = 0;
gdjs.MainMenuCode.GDQuitButtonObjects1.length = 0;
gdjs.MainMenuCode.GDQuitButtonObjects2.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
