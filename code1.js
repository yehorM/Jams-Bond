gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2= [];
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects3= [];
gdjs.Game_32SceneCode.GDWallOldObjects1= [];
gdjs.Game_32SceneCode.GDWallOldObjects2= [];
gdjs.Game_32SceneCode.GDWallOldObjects3= [];
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
gdjs.Game_32SceneCode.GDExplosionObjects1= [];
gdjs.Game_32SceneCode.GDExplosionObjects2= [];
gdjs.Game_32SceneCode.GDExplosionObjects3= [];
gdjs.Game_32SceneCode.GDEnemyTowerObjects1= [];
gdjs.Game_32SceneCode.GDEnemyTowerObjects2= [];
gdjs.Game_32SceneCode.GDEnemyTowerObjects3= [];
gdjs.Game_32SceneCode.GDTowerSiteObjects1= [];
gdjs.Game_32SceneCode.GDTowerSiteObjects2= [];
gdjs.Game_32SceneCode.GDTowerSiteObjects3= [];
gdjs.Game_32SceneCode.GDConfirmBubbleObjects1= [];
gdjs.Game_32SceneCode.GDConfirmBubbleObjects2= [];
gdjs.Game_32SceneCode.GDConfirmBubbleObjects3= [];
gdjs.Game_32SceneCode.GDPlayerTowerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerTowerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerTowerObjects3= [];
gdjs.Game_32SceneCode.GDOptionsBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDOptionsBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDOptionsBackgroundObjects3= [];
gdjs.Game_32SceneCode.GDOptionsTitleObjects1= [];
gdjs.Game_32SceneCode.GDOptionsTitleObjects2= [];
gdjs.Game_32SceneCode.GDOptionsTitleObjects3= [];
gdjs.Game_32SceneCode.GDBackButtonObjects1= [];
gdjs.Game_32SceneCode.GDBackButtonObjects2= [];
gdjs.Game_32SceneCode.GDBackButtonObjects3= [];
gdjs.Game_32SceneCode.GDToggleMusicSliderObjects1= [];
gdjs.Game_32SceneCode.GDToggleMusicSliderObjects2= [];
gdjs.Game_32SceneCode.GDToggleMusicSliderObjects3= [];
gdjs.Game_32SceneCode.GDOptionsButtonObjects1= [];
gdjs.Game_32SceneCode.GDOptionsButtonObjects2= [];
gdjs.Game_32SceneCode.GDOptionsButtonObjects3= [];
gdjs.Game_32SceneCode.GDWallObjects1= [];
gdjs.Game_32SceneCode.GDWallObjects2= [];
gdjs.Game_32SceneCode.GDWallObjects3= [];
gdjs.Game_32SceneCode.GDBridgeObjects1= [];
gdjs.Game_32SceneCode.GDBridgeObjects2= [];
gdjs.Game_32SceneCode.GDBridgeObjects3= [];
gdjs.Game_32SceneCode.GDDoorObjects1= [];
gdjs.Game_32SceneCode.GDDoorObjects2= [];
gdjs.Game_32SceneCode.GDDoorObjects3= [];
gdjs.Game_32SceneCode.GDCrateObjects1= [];
gdjs.Game_32SceneCode.GDCrateObjects2= [];
gdjs.Game_32SceneCode.GDCrateObjects3= [];


gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDOptionsButtonObjects1Objects = Hashtable.newFrom({"OptionsButton": gdjs.Game_32SceneCode.GDOptionsButtonObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBackButtonObjects1Objects = Hashtable.newFrom({"BackButton": gdjs.Game_32SceneCode.GDBackButtonObjects1});
gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWallOldObjects1Objects = Hashtable.newFrom({"WallOld": gdjs.Game_32SceneCode.GDWallOldObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDLight_95959595SentientObjects1Objects = Hashtable.newFrom({"Light_Sentient": gdjs.Game_32SceneCode.GDLight_9595SentientObjects1});
gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDLight_95959595SentientObjects1Objects = Hashtable.newFrom({"Light_Sentient": gdjs.Game_32SceneCode.GDLight_9595SentientObjects1});
gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

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


};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDProjectileObjects1Objects = Hashtable.newFrom({"Projectile": gdjs.Game_32SceneCode.GDProjectileObjects1});
gdjs.Game_32SceneCode.eventsList7 = function(runtimeScene) {

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
/* Reuse gdjs.Game_32SceneCode.GDProjectileObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDProjectileObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDProjectileObjects1[i].addForce(0, 400, 1);
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDProjectileObjects1Objects = Hashtable.newFrom({"Projectile": gdjs.Game_32SceneCode.GDProjectileObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDProjectileObjects1Objects = Hashtable.newFrom({"Projectile": gdjs.Game_32SceneCode.GDProjectileObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDLight_95959595SentientObjects1Objects = Hashtable.newFrom({"Light_Sentient": gdjs.Game_32SceneCode.GDLight_9595SentientObjects1});
gdjs.Game_32SceneCode.eventsList8 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList9 = function(runtimeScene) {

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


};gdjs.Game_32SceneCode.eventsList10 = function(runtimeScene) {

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


};gdjs.Game_32SceneCode.eventsList11 = function(runtimeScene) {

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


};gdjs.Game_32SceneCode.eventsList12 = function(runtimeScene) {

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


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.Game_32SceneCode.GDExplosionObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDProjectileObjects2Objects = Hashtable.newFrom({"Projectile": gdjs.Game_32SceneCode.GDProjectileObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyTowerObjects2Objects = Hashtable.newFrom({"EnemyTower": gdjs.Game_32SceneCode.GDEnemyTowerObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTowerSiteObjects2Objects = Hashtable.newFrom({"TowerSite": gdjs.Game_32SceneCode.GDTowerSiteObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTowerSiteObjects2Objects = Hashtable.newFrom({"TowerSite": gdjs.Game_32SceneCode.GDTowerSiteObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTowerSiteObjects2Objects = Hashtable.newFrom({"TowerSite": gdjs.Game_32SceneCode.GDTowerSiteObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTowerSiteObjects2Objects = Hashtable.newFrom({"TowerSite": gdjs.Game_32SceneCode.GDTowerSiteObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDConfirmBubbleObjects2Objects = Hashtable.newFrom({"ConfirmBubble": gdjs.Game_32SceneCode.GDConfirmBubbleObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDConfirmBubbleObjects1Objects = Hashtable.newFrom({"ConfirmBubble": gdjs.Game_32SceneCode.GDConfirmBubbleObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerTowerObjects1Objects = Hashtable.newFrom({"PlayerTower": gdjs.Game_32SceneCode.GDPlayerTowerObjects1});
gdjs.Game_32SceneCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("EnemyTower"), gdjs.Game_32SceneCode.GDEnemyTowerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Projectile"), gdjs.Game_32SceneCode.GDProjectileObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDProjectileObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDEnemyTowerObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDEnemyTowerObjects2 */
/* Reuse gdjs.Game_32SceneCode.GDProjectileObjects2 */
gdjs.Game_32SceneCode.GDTowerSiteObjects2.length = 0;

{for(var i = 0, len = gdjs.Game_32SceneCode.GDEnemyTowerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDEnemyTowerObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTowerSiteObjects2Objects, (( gdjs.Game_32SceneCode.GDEnemyTowerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyTowerObjects2[0].getPointX("")) + 30, (( gdjs.Game_32SceneCode.GDEnemyTowerObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDEnemyTowerObjects2[0].getPointY("")) + 100, "");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDProjectileObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDProjectileObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDTowerSiteObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTowerSiteObjects2[i].getBehavior("Resizable").setSize(311, 342);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TowerSite"), gdjs.Game_32SceneCode.GDTowerSiteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTowerSiteObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDTowerSiteObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTowerSiteObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTowerSiteObjects2[i].getBehavior("Animation").setAnimationName("highlighted");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TowerSite"), gdjs.Game_32SceneCode.GDTowerSiteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTowerSiteObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDTowerSiteObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTowerSiteObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTowerSiteObjects2[i].getBehavior("Animation").setAnimationName("Default");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TowerSite"), gdjs.Game_32SceneCode.GDTowerSiteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTowerSiteObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDTowerSiteObjects2 */
gdjs.Game_32SceneCode.GDConfirmBubbleObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDConfirmBubbleObjects2Objects, (( gdjs.Game_32SceneCode.GDTowerSiteObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDTowerSiteObjects2[0].getPointX("")), (( gdjs.Game_32SceneCode.GDTowerSiteObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDTowerSiteObjects2[0].getPointY("")) - 150, "");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDConfirmBubbleObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDConfirmBubbleObjects2[i].getBehavior("Resizable").setSize(311, 342);
}
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber((( gdjs.Game_32SceneCode.GDTowerSiteObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDTowerSiteObjects2[0].getPointX("")));
}{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber((( gdjs.Game_32SceneCode.GDTowerSiteObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDTowerSiteObjects2[0].getPointY("")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ConfirmBubble"), gdjs.Game_32SceneCode.GDConfirmBubbleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDConfirmBubbleObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDConfirmBubbleObjects1 */
gdjs.copyArray(runtimeScene.getObjects("TowerSite"), gdjs.Game_32SceneCode.GDTowerSiteObjects1);
gdjs.Game_32SceneCode.GDPlayerTowerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerTowerObjects1Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(4)) - 10, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) - 90, "");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerTowerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerTowerObjects1[i].getBehavior("Resizable").setSize(337, 355);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDConfirmBubbleObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDConfirmBubbleObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDTowerSiteObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTowerSiteObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Game_32SceneCode.GDWallObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWallObjects1Objects = Hashtable.newFrom({"Wall": gdjs.Game_32SceneCode.GDWallObjects1});
gdjs.Game_32SceneCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Game_32SceneCode.GDWallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWallObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDWallObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWallObjects1Objects, false);
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Game_32SceneCode.GDDoorObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDoorObjects2Objects = Hashtable.newFrom({"Door": gdjs.Game_32SceneCode.GDDoorObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCrateObjects1Objects = Hashtable.newFrom({"Crate": gdjs.Game_32SceneCode.GDCrateObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDProjectileObjects1Objects = Hashtable.newFrom({"Projectile": gdjs.Game_32SceneCode.GDProjectileObjects1});
gdjs.Game_32SceneCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Game_32SceneCode.GDDoorObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDoorObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDDoorObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDDoorObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDoorObjects2[i].getBehavior("Animation").setAnimationName("Open");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Game_32SceneCode.GDDoorObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDDoorObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDDoorObjects2[i].getBehavior("Animation").getAnimationName() == "Closed" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDDoorObjects2[k] = gdjs.Game_32SceneCode.GDDoorObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDDoorObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDDoorObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDDoorObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Crate"), gdjs.Game_32SceneCode.GDCrateObjects1);
gdjs.copyArray(runtimeScene.getObjects("Projectile"), gdjs.Game_32SceneCode.GDProjectileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCrateObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDProjectileObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCrateObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDProjectileObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCrateObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCrateObjects1[i].getBehavior("Animation").setAnimationName("Broken");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDProjectileObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDProjectileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Game_32SceneCode.eventsList16 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Game_32SceneCode.GDBackButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogBoxBackground"), gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogText"), gdjs.Game_32SceneCode.GDDialogTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Light_Sentient"), gdjs.Game_32SceneCode.GDLight_9595SentientObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBackground"), gdjs.Game_32SceneCode.GDOptionsBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsTitle"), gdjs.Game_32SceneCode.GDOptionsTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("ToggleMusicSlider"), gdjs.Game_32SceneCode.GDToggleMusicSliderObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getVariables().getFromIndex(0)).setString("Right");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogBoxBackgroundObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDDialogTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDDialogTextObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Footstep");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Option Layer");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDOptionsBackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDOptionsBackgroundObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDOptionsTitleObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDOptionsTitleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDToggleMusicSliderObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDToggleMusicSliderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBackButtonObjects1[i].hide();
}
}}

}


{


gdjs.Game_32SceneCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("OptionsButton"), gdjs.Game_32SceneCode.GDOptionsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDOptionsButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Game_32SceneCode.GDBackButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsBackground"), gdjs.Game_32SceneCode.GDOptionsBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsTitle"), gdjs.Game_32SceneCode.GDOptionsTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("ToggleMusicSlider"), gdjs.Game_32SceneCode.GDToggleMusicSliderObjects1);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Option Layer");
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_32SceneCode.GDOptionsBackgroundObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDOptionsBackgroundObjects1[0] : null), true, "Option Layer", 0);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDOptionsBackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDOptionsBackgroundObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDOptionsTitleObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDOptionsTitleObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDToggleMusicSliderObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDToggleMusicSliderObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBackButtonObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButton"), gdjs.Game_32SceneCode.GDBackButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBackButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBackButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("OptionsBackground"), gdjs.Game_32SceneCode.GDOptionsBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("OptionsTitle"), gdjs.Game_32SceneCode.GDOptionsTitleObjects1);
gdjs.copyArray(runtimeScene.getObjects("ToggleMusicSlider"), gdjs.Game_32SceneCode.GDToggleMusicSliderObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Option Layer");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDOptionsBackgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDOptionsBackgroundObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDOptionsTitleObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDOptionsTitleObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDToggleMusicSliderObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDToggleMusicSliderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBackButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBackButtonObjects1[i].hide();
}
}}

}


{


gdjs.Game_32SceneCode.eventsList2(runtimeScene);
}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_32SceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Light_Sentient"), gdjs.Game_32SceneCode.GDLight_9595SentientObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallOld"), gdjs.Game_32SceneCode.GDWallOldObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDWallOldObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDLight_95959595SentientObjects1Objects, false);
}
}}

}


{


gdjs.Game_32SceneCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Light_Sentient"), gdjs.Game_32SceneCode.GDLight_9595SentientObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDLight_95959595SentientObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12054860);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12057340);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Game_32SceneCode.eventsList5(runtimeScene);
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

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Footstep") > 0.3;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Footstep");
}{gdjs.evtTools.sound.playSound(runtimeScene, "footstep_1.ogg", false, gdjs.randomInRange(90, 115), 1);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Game_32SceneCode.eventsList6(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.Game_32SceneCode.GDProjectileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDProjectileObjects1Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointX("FirePoint")), (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointY("FirePoint")), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "fire_projectile.ogg", false, gdjs.randomInRange(90, 115), gdjs.randomInRange(90, 115));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Shot Cooldown");
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(3).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);
gdjs.Game_32SceneCode.GDProjectileObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDProjectileObjects1Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointX("FirePoint")), (( gdjs.Game_32SceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects1[0].getPointY("FirePoint")), "");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDProjectileObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDProjectileObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 400, 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "fire_projectile.ogg", false, gdjs.randomInRange(90, 115), gdjs.randomInRange(90, 115));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Shot Cooldown");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Shot Cooldown") >= 0.2;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "Shot Cooldown");
}{runtimeScene.getScene().getVariables().getFromIndex(3).setBoolean(false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Light_Sentient"), gdjs.Game_32SceneCode.GDLight_9595SentientObjects1);
gdjs.copyArray(runtimeScene.getObjects("Projectile"), gdjs.Game_32SceneCode.GDProjectileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDProjectileObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDLight_95959595SentientObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDLight_9595SentientObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDProjectileObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getBehavior("Health").Hit(30, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDProjectileObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDProjectileObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Game_32SceneCode.eventsList8(runtimeScene);
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
gdjs.Game_32SceneCode.eventsList9(runtimeScene);} //End of subevents
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
gdjs.Game_32SceneCode.eventsList10(runtimeScene);} //End of subevents
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
gdjs.Game_32SceneCode.eventsList11(runtimeScene);} //End of subevents
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
gdjs.Game_32SceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Light_Sentient"), gdjs.Game_32SceneCode.GDLight_9595SentientObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[k] = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDLight_9595SentientObjects1 */
gdjs.Game_32SceneCode.GDExplosionObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDExplosionObjects1Objects, (( gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[0].getPointX("")), (( gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLight_9595SentientObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLight_9595SentientObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Explosion"), gdjs.Game_32SceneCode.GDExplosionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDExplosionObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDExplosionObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDExplosionObjects1[k] = gdjs.Game_32SceneCode.GDExplosionObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDExplosionObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDExplosionObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDExplosionObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Game_32SceneCode.eventsList13(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList14(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList15(runtimeScene);
}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallOldObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallOldObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallOldObjects3.length = 0;
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
gdjs.Game_32SceneCode.GDExplosionObjects1.length = 0;
gdjs.Game_32SceneCode.GDExplosionObjects2.length = 0;
gdjs.Game_32SceneCode.GDExplosionObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemyTowerObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyTowerObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyTowerObjects3.length = 0;
gdjs.Game_32SceneCode.GDTowerSiteObjects1.length = 0;
gdjs.Game_32SceneCode.GDTowerSiteObjects2.length = 0;
gdjs.Game_32SceneCode.GDTowerSiteObjects3.length = 0;
gdjs.Game_32SceneCode.GDConfirmBubbleObjects1.length = 0;
gdjs.Game_32SceneCode.GDConfirmBubbleObjects2.length = 0;
gdjs.Game_32SceneCode.GDConfirmBubbleObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerTowerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerTowerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerTowerObjects3.length = 0;
gdjs.Game_32SceneCode.GDOptionsBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDOptionsBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDOptionsBackgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDOptionsTitleObjects1.length = 0;
gdjs.Game_32SceneCode.GDOptionsTitleObjects2.length = 0;
gdjs.Game_32SceneCode.GDOptionsTitleObjects3.length = 0;
gdjs.Game_32SceneCode.GDBackButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDToggleMusicSliderObjects1.length = 0;
gdjs.Game_32SceneCode.GDToggleMusicSliderObjects2.length = 0;
gdjs.Game_32SceneCode.GDToggleMusicSliderObjects3.length = 0;
gdjs.Game_32SceneCode.GDOptionsButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDOptionsButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDOptionsButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDBridgeObjects1.length = 0;
gdjs.Game_32SceneCode.GDBridgeObjects2.length = 0;
gdjs.Game_32SceneCode.GDBridgeObjects3.length = 0;
gdjs.Game_32SceneCode.GDDoorObjects1.length = 0;
gdjs.Game_32SceneCode.GDDoorObjects2.length = 0;
gdjs.Game_32SceneCode.GDDoorObjects3.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects1.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects2.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects3.length = 0;

gdjs.Game_32SceneCode.eventsList16(runtimeScene);
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects1.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects2.length = 0;
gdjs.Game_32SceneCode.GDGround_9595TilemapObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallOldObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallOldObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallOldObjects3.length = 0;
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
gdjs.Game_32SceneCode.GDExplosionObjects1.length = 0;
gdjs.Game_32SceneCode.GDExplosionObjects2.length = 0;
gdjs.Game_32SceneCode.GDExplosionObjects3.length = 0;
gdjs.Game_32SceneCode.GDEnemyTowerObjects1.length = 0;
gdjs.Game_32SceneCode.GDEnemyTowerObjects2.length = 0;
gdjs.Game_32SceneCode.GDEnemyTowerObjects3.length = 0;
gdjs.Game_32SceneCode.GDTowerSiteObjects1.length = 0;
gdjs.Game_32SceneCode.GDTowerSiteObjects2.length = 0;
gdjs.Game_32SceneCode.GDTowerSiteObjects3.length = 0;
gdjs.Game_32SceneCode.GDConfirmBubbleObjects1.length = 0;
gdjs.Game_32SceneCode.GDConfirmBubbleObjects2.length = 0;
gdjs.Game_32SceneCode.GDConfirmBubbleObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerTowerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerTowerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerTowerObjects3.length = 0;
gdjs.Game_32SceneCode.GDOptionsBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDOptionsBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDOptionsBackgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDOptionsTitleObjects1.length = 0;
gdjs.Game_32SceneCode.GDOptionsTitleObjects2.length = 0;
gdjs.Game_32SceneCode.GDOptionsTitleObjects3.length = 0;
gdjs.Game_32SceneCode.GDBackButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDToggleMusicSliderObjects1.length = 0;
gdjs.Game_32SceneCode.GDToggleMusicSliderObjects2.length = 0;
gdjs.Game_32SceneCode.GDToggleMusicSliderObjects3.length = 0;
gdjs.Game_32SceneCode.GDOptionsButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDOptionsButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDOptionsButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDBridgeObjects1.length = 0;
gdjs.Game_32SceneCode.GDBridgeObjects2.length = 0;
gdjs.Game_32SceneCode.GDBridgeObjects3.length = 0;
gdjs.Game_32SceneCode.GDDoorObjects1.length = 0;
gdjs.Game_32SceneCode.GDDoorObjects2.length = 0;
gdjs.Game_32SceneCode.GDDoorObjects3.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects1.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects2.length = 0;
gdjs.Game_32SceneCode.GDCrateObjects3.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
