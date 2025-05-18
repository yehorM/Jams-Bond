gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects3= [];
gdjs.Game_32SceneCode.GDWallObjects1= [];
gdjs.Game_32SceneCode.GDWallObjects2= [];
gdjs.Game_32SceneCode.GDWallObjects3= [];
gdjs.Game_32SceneCode.GDPlantObjects1= [];
gdjs.Game_32SceneCode.GDPlantObjects2= [];
gdjs.Game_32SceneCode.GDPlantObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDProjectileObjects1= [];
gdjs.Game_32SceneCode.GDProjectileObjects2= [];
gdjs.Game_32SceneCode.GDProjectileObjects3= [];
gdjs.Game_32SceneCode.GDLight_9595SentientObjects1= [];
gdjs.Game_32SceneCode.GDLight_9595SentientObjects2= [];
gdjs.Game_32SceneCode.GDLight_9595SentientObjects3= [];
gdjs.Game_32SceneCode.GDDialogTextObjects1= [];
gdjs.Game_32SceneCode.GDDialogTextObjects2= [];
gdjs.Game_32SceneCode.GDDialogTextObjects3= [];
gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects3= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDLight_95959595SentientObjects1Objects = Hashtable.newFrom({"Light_Sentient": gdjs.Game_32SceneCode.GDLight_9595SentientObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogText"), gdjs.Game_32SceneCode.GDDialogTextObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogTextObjects2[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogBoxBackground"), gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText"), gdjs.Game_32SceneCode.GDDialogTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(false);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects1[i].hide();
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDProjectileObjects1Objects = Hashtable.newFrom({"Projectile": gdjs.Game_32SceneCode.GDProjectileObjects1});
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "Right");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDProjectileObjects1, gdjs.Game_32SceneCode.GDProjectileObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDProjectileObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDProjectileObjects2[i].addForce(400, 0, 1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDProjectileObjects1, gdjs.Game_32SceneCode.GDProjectileObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDProjectileObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDProjectileObjects2[i].addForce(-(400), 0, 1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "Up");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDProjectileObjects1, gdjs.Game_32SceneCode.GDProjectileObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDProjectileObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDProjectileObjects2[i].addForce(0, -(400), 1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() == "Down");
}
if (isConditionTrue_0) {
}

}


};gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDLight_9595SentientObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getX() > 480 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[k] = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDLight_9595SentientObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getVariables().getFromIndex(0)).setString("Down");
}
}}

}


};gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDLight_9595SentientObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getY() > 400 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[k] = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDLight_9595SentientObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getVariables().getFromIndex(0)).setString("Left");
}
}}

}


};gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDLight_9595SentientObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getX() < 160 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[k] = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDLight_9595SentientObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getVariables().getFromIndex(0)).setString("Up");
}
}}

}


};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDLight_9595SentientObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getY() < 100 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[k] = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDLight_9595SentientObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getVariables().getFromIndex(0)).setString("Right");
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDProjectileObjects1Objects = Hashtable.newFrom({"Projectile": gdjs.Game_32SceneCode.GDProjectileObjects1});
gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_32SceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogBoxBackground"), gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText"), gdjs.Game_32SceneCode.GDDialogTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Light_Sentient"), gdjs.Game_32SceneCode.GDLight_9595SentientObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getVariables().getFromIndex(0)).setString("Right");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogTextObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Light_Sentient"), gdjs.Game_32SceneCode.GDLight_9595SentientObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDLight_95959595SentientObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11045052);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogBoxBackground"), gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText"), gdjs.Game_32SceneCode.GDDialogTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setBoolean(true);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogTextObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11047476);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Left");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Player move left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Player move right");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Right");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Up");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Player move up");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Down");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Player move down");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.Game_32SceneCode.GDProjectileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDProjectileObjects1Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointX("FirePoint")), (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointY("FirePoint")), "");
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Light_Sentient"), gdjs.Game_32SceneCode.GDLight_9595SentientObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getVariableString(gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getVariables().getFromIndex(0)) == "Right" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[k] = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDLight_9595SentientObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getBehavior("Animation").setAnimationName("Sentient move right");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].addForce(10, 0, 1);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Light_Sentient"), gdjs.Game_32SceneCode.GDLight_9595SentientObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getVariableString(gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getVariables().getFromIndex(0)) == "Down" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[k] = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDLight_9595SentientObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getBehavior("Animation").setAnimationName("Sentient move down");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].addForce(0, 10, 1);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Light_Sentient"), gdjs.Game_32SceneCode.GDLight_9595SentientObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getVariableString(gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getVariables().getFromIndex(0)) == "Left" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[k] = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDLight_9595SentientObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getBehavior("Animation").setAnimationName("Sentient move left");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].addForce(-(10), 0, 1);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Light_Sentient"), gdjs.Game_32SceneCode.GDLight_9595SentientObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getVariableString(gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getVariables().getFromIndex(0)) == "Up" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[k] = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDLight_9595SentientObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getBehavior("Animation").setAnimationName("Sentient move up");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].addForce(0, -(10), 1);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.Game_32SceneCode.GDProjectileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDProjectileObjects1Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointX("FirePoint")), (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointY("FirePoint")), "");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDProjectileObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDProjectileObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 400, 1);
}
}}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDProjectileObjects1.length = 0;
gdjs.Game_32SceneCode.GDProjectileObjects2.length = 0;
gdjs.Game_32SceneCode.GDProjectileObjects3.length = 0;
gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length = 0;
gdjs.Game_32SceneCode.GDLight_9595SentientObjects2.length = 0;
gdjs.Game_32SceneCode.GDLight_9595SentientObjects3.length = 0;
gdjs.Game_32SceneCode.GDDialogTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDDialogTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDDialogTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects3.length = 0;

gdjs.Game_32SceneCode.eventsList6(runtimeScene);
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDProjectileObjects1.length = 0;
gdjs.Game_32SceneCode.GDProjectileObjects2.length = 0;
gdjs.Game_32SceneCode.GDProjectileObjects3.length = 0;
gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length = 0;
gdjs.Game_32SceneCode.GDLight_9595SentientObjects2.length = 0;
gdjs.Game_32SceneCode.GDLight_9595SentientObjects3.length = 0;
gdjs.Game_32SceneCode.GDDialogTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDDialogTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDDialogTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects3.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
