gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.GDNewSpriteObjects1= [];
gdjs.Game_32OverCode.GDNewSpriteObjects2= [];
gdjs.Game_32OverCode.GDNewTextObjects1= [];
gdjs.Game_32OverCode.GDNewTextObjects2= [];
gdjs.Game_32OverCode.GDGreenButtonObjects1= [];
gdjs.Game_32OverCode.GDGreenButtonObjects2= [];
gdjs.Game_32OverCode.GDTransitionPainterObjects1= [];
gdjs.Game_32OverCode.GDTransitionPainterObjects2= [];
gdjs.Game_32OverCode.GDPlayerObjects1= [];
gdjs.Game_32OverCode.GDPlayerObjects2= [];
gdjs.Game_32OverCode.GDCameraTargetObjects1= [];
gdjs.Game_32OverCode.GDCameraTargetObjects2= [];
gdjs.Game_32OverCode.GDKoboldMonsterObjects1= [];
gdjs.Game_32OverCode.GDKoboldMonsterObjects2= [];
gdjs.Game_32OverCode.GDArcherMonsterObjects1= [];
gdjs.Game_32OverCode.GDArcherMonsterObjects2= [];
gdjs.Game_32OverCode.GDTrollMonsterObjects1= [];
gdjs.Game_32OverCode.GDTrollMonsterObjects2= [];
gdjs.Game_32OverCode.GDTowerSiteObjects1= [];
gdjs.Game_32OverCode.GDTowerSiteObjects2= [];
gdjs.Game_32OverCode.GDEnemyTowerObjects1= [];
gdjs.Game_32OverCode.GDEnemyTowerObjects2= [];
gdjs.Game_32OverCode.GDDragonFireballObjects1= [];
gdjs.Game_32OverCode.GDDragonFireballObjects2= [];
gdjs.Game_32OverCode.GDSpellSigilObjects1= [];
gdjs.Game_32OverCode.GDSpellSigilObjects2= [];
gdjs.Game_32OverCode.GDSpearSigilObjects1= [];
gdjs.Game_32OverCode.GDSpearSigilObjects2= [];
gdjs.Game_32OverCode.GDSpearsObjects1= [];
gdjs.Game_32OverCode.GDSpearsObjects2= [];
gdjs.Game_32OverCode.GDWoodRedBarObjects1= [];
gdjs.Game_32OverCode.GDWoodRedBarObjects2= [];
gdjs.Game_32OverCode.GDGoldGreenBarObjects1= [];
gdjs.Game_32OverCode.GDGoldGreenBarObjects2= [];
gdjs.Game_32OverCode.GDWallTileObjects1= [];
gdjs.Game_32OverCode.GDWallTileObjects2= [];
gdjs.Game_32OverCode.GDSandyFloorObjects1= [];
gdjs.Game_32OverCode.GDSandyFloorObjects2= [];
gdjs.Game_32OverCode.GDWallDiagonalNEObjects1= [];
gdjs.Game_32OverCode.GDWallDiagonalNEObjects2= [];
gdjs.Game_32OverCode.GDWallDiagonalNWObjects1= [];
gdjs.Game_32OverCode.GDWallDiagonalNWObjects2= [];
gdjs.Game_32OverCode.GDWallDiagonalSEObjects1= [];
gdjs.Game_32OverCode.GDWallDiagonalSEObjects2= [];
gdjs.Game_32OverCode.GDWallDiagonalSWObjects1= [];
gdjs.Game_32OverCode.GDWallDiagonalSWObjects2= [];
gdjs.Game_32OverCode.GDDragonMonsterObjects1= [];
gdjs.Game_32OverCode.GDDragonMonsterObjects2= [];
gdjs.Game_32OverCode.GDRockObjects1= [];
gdjs.Game_32OverCode.GDRockObjects2= [];
gdjs.Game_32OverCode.GDMouseIconObjects1= [];
gdjs.Game_32OverCode.GDMouseIconObjects2= [];
gdjs.Game_32OverCode.GDSpawningTargetKoboldObjects1= [];
gdjs.Game_32OverCode.GDSpawningTargetKoboldObjects2= [];
gdjs.Game_32OverCode.GDSpawningTargetTrollObjects1= [];
gdjs.Game_32OverCode.GDSpawningTargetTrollObjects2= [];
gdjs.Game_32OverCode.GDSpawningTargetArcherObjects1= [];
gdjs.Game_32OverCode.GDSpawningTargetArcherObjects2= [];
gdjs.Game_32OverCode.GDSpawningTargetDragonObjects1= [];
gdjs.Game_32OverCode.GDSpawningTargetDragonObjects2= [];
gdjs.Game_32OverCode.GDFriendlyFireballObjects1= [];
gdjs.Game_32OverCode.GDFriendlyFireballObjects2= [];
gdjs.Game_32OverCode.GDCameraTargetFloorObjects1= [];
gdjs.Game_32OverCode.GDCameraTargetFloorObjects2= [];
gdjs.Game_32OverCode.GDShockwaveEffectObjects1= [];
gdjs.Game_32OverCode.GDShockwaveEffectObjects2= [];
gdjs.Game_32OverCode.GDExplosionParticlesObjects1= [];
gdjs.Game_32OverCode.GDExplosionParticlesObjects2= [];
gdjs.Game_32OverCode.GDWhiteFlashOverlayObjects1= [];
gdjs.Game_32OverCode.GDWhiteFlashOverlayObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TransitionPainter"), gdjs.Game_32OverCode.GDTransitionPainterObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDTransitionPainterObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDTransitionPainterObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.4, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\ditty.mp3", 1, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Game_32OverCode.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDGreenButtonObjects1[k] = gdjs.Game_32OverCode.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(false);
}
{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDNewTextObjects1.length = 0;
gdjs.Game_32OverCode.GDNewTextObjects2.length = 0;
gdjs.Game_32OverCode.GDGreenButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDGreenButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDTransitionPainterObjects1.length = 0;
gdjs.Game_32OverCode.GDTransitionPainterObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects2.length = 0;
gdjs.Game_32OverCode.GDCameraTargetObjects1.length = 0;
gdjs.Game_32OverCode.GDCameraTargetObjects2.length = 0;
gdjs.Game_32OverCode.GDKoboldMonsterObjects1.length = 0;
gdjs.Game_32OverCode.GDKoboldMonsterObjects2.length = 0;
gdjs.Game_32OverCode.GDArcherMonsterObjects1.length = 0;
gdjs.Game_32OverCode.GDArcherMonsterObjects2.length = 0;
gdjs.Game_32OverCode.GDTrollMonsterObjects1.length = 0;
gdjs.Game_32OverCode.GDTrollMonsterObjects2.length = 0;
gdjs.Game_32OverCode.GDTowerSiteObjects1.length = 0;
gdjs.Game_32OverCode.GDTowerSiteObjects2.length = 0;
gdjs.Game_32OverCode.GDEnemyTowerObjects1.length = 0;
gdjs.Game_32OverCode.GDEnemyTowerObjects2.length = 0;
gdjs.Game_32OverCode.GDDragonFireballObjects1.length = 0;
gdjs.Game_32OverCode.GDDragonFireballObjects2.length = 0;
gdjs.Game_32OverCode.GDSpellSigilObjects1.length = 0;
gdjs.Game_32OverCode.GDSpellSigilObjects2.length = 0;
gdjs.Game_32OverCode.GDSpearSigilObjects1.length = 0;
gdjs.Game_32OverCode.GDSpearSigilObjects2.length = 0;
gdjs.Game_32OverCode.GDSpearsObjects1.length = 0;
gdjs.Game_32OverCode.GDSpearsObjects2.length = 0;
gdjs.Game_32OverCode.GDWoodRedBarObjects1.length = 0;
gdjs.Game_32OverCode.GDWoodRedBarObjects2.length = 0;
gdjs.Game_32OverCode.GDGoldGreenBarObjects1.length = 0;
gdjs.Game_32OverCode.GDGoldGreenBarObjects2.length = 0;
gdjs.Game_32OverCode.GDWallTileObjects1.length = 0;
gdjs.Game_32OverCode.GDWallTileObjects2.length = 0;
gdjs.Game_32OverCode.GDSandyFloorObjects1.length = 0;
gdjs.Game_32OverCode.GDSandyFloorObjects2.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalNEObjects1.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalNEObjects2.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalNWObjects1.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalNWObjects2.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalSEObjects1.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalSEObjects2.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalSWObjects1.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalSWObjects2.length = 0;
gdjs.Game_32OverCode.GDDragonMonsterObjects1.length = 0;
gdjs.Game_32OverCode.GDDragonMonsterObjects2.length = 0;
gdjs.Game_32OverCode.GDRockObjects1.length = 0;
gdjs.Game_32OverCode.GDRockObjects2.length = 0;
gdjs.Game_32OverCode.GDMouseIconObjects1.length = 0;
gdjs.Game_32OverCode.GDMouseIconObjects2.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetKoboldObjects1.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetKoboldObjects2.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetTrollObjects1.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetTrollObjects2.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetArcherObjects1.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetArcherObjects2.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetDragonObjects1.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetDragonObjects2.length = 0;
gdjs.Game_32OverCode.GDFriendlyFireballObjects1.length = 0;
gdjs.Game_32OverCode.GDFriendlyFireballObjects2.length = 0;
gdjs.Game_32OverCode.GDCameraTargetFloorObjects1.length = 0;
gdjs.Game_32OverCode.GDCameraTargetFloorObjects2.length = 0;
gdjs.Game_32OverCode.GDShockwaveEffectObjects1.length = 0;
gdjs.Game_32OverCode.GDShockwaveEffectObjects2.length = 0;
gdjs.Game_32OverCode.GDExplosionParticlesObjects1.length = 0;
gdjs.Game_32OverCode.GDExplosionParticlesObjects2.length = 0;
gdjs.Game_32OverCode.GDWhiteFlashOverlayObjects1.length = 0;
gdjs.Game_32OverCode.GDWhiteFlashOverlayObjects2.length = 0;

gdjs.Game_32OverCode.eventsList1(runtimeScene);
gdjs.Game_32OverCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDNewTextObjects1.length = 0;
gdjs.Game_32OverCode.GDNewTextObjects2.length = 0;
gdjs.Game_32OverCode.GDGreenButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDGreenButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDTransitionPainterObjects1.length = 0;
gdjs.Game_32OverCode.GDTransitionPainterObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects2.length = 0;
gdjs.Game_32OverCode.GDCameraTargetObjects1.length = 0;
gdjs.Game_32OverCode.GDCameraTargetObjects2.length = 0;
gdjs.Game_32OverCode.GDKoboldMonsterObjects1.length = 0;
gdjs.Game_32OverCode.GDKoboldMonsterObjects2.length = 0;
gdjs.Game_32OverCode.GDArcherMonsterObjects1.length = 0;
gdjs.Game_32OverCode.GDArcherMonsterObjects2.length = 0;
gdjs.Game_32OverCode.GDTrollMonsterObjects1.length = 0;
gdjs.Game_32OverCode.GDTrollMonsterObjects2.length = 0;
gdjs.Game_32OverCode.GDTowerSiteObjects1.length = 0;
gdjs.Game_32OverCode.GDTowerSiteObjects2.length = 0;
gdjs.Game_32OverCode.GDEnemyTowerObjects1.length = 0;
gdjs.Game_32OverCode.GDEnemyTowerObjects2.length = 0;
gdjs.Game_32OverCode.GDDragonFireballObjects1.length = 0;
gdjs.Game_32OverCode.GDDragonFireballObjects2.length = 0;
gdjs.Game_32OverCode.GDSpellSigilObjects1.length = 0;
gdjs.Game_32OverCode.GDSpellSigilObjects2.length = 0;
gdjs.Game_32OverCode.GDSpearSigilObjects1.length = 0;
gdjs.Game_32OverCode.GDSpearSigilObjects2.length = 0;
gdjs.Game_32OverCode.GDSpearsObjects1.length = 0;
gdjs.Game_32OverCode.GDSpearsObjects2.length = 0;
gdjs.Game_32OverCode.GDWoodRedBarObjects1.length = 0;
gdjs.Game_32OverCode.GDWoodRedBarObjects2.length = 0;
gdjs.Game_32OverCode.GDGoldGreenBarObjects1.length = 0;
gdjs.Game_32OverCode.GDGoldGreenBarObjects2.length = 0;
gdjs.Game_32OverCode.GDWallTileObjects1.length = 0;
gdjs.Game_32OverCode.GDWallTileObjects2.length = 0;
gdjs.Game_32OverCode.GDSandyFloorObjects1.length = 0;
gdjs.Game_32OverCode.GDSandyFloorObjects2.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalNEObjects1.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalNEObjects2.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalNWObjects1.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalNWObjects2.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalSEObjects1.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalSEObjects2.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalSWObjects1.length = 0;
gdjs.Game_32OverCode.GDWallDiagonalSWObjects2.length = 0;
gdjs.Game_32OverCode.GDDragonMonsterObjects1.length = 0;
gdjs.Game_32OverCode.GDDragonMonsterObjects2.length = 0;
gdjs.Game_32OverCode.GDRockObjects1.length = 0;
gdjs.Game_32OverCode.GDRockObjects2.length = 0;
gdjs.Game_32OverCode.GDMouseIconObjects1.length = 0;
gdjs.Game_32OverCode.GDMouseIconObjects2.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetKoboldObjects1.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetKoboldObjects2.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetTrollObjects1.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetTrollObjects2.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetArcherObjects1.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetArcherObjects2.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetDragonObjects1.length = 0;
gdjs.Game_32OverCode.GDSpawningTargetDragonObjects2.length = 0;
gdjs.Game_32OverCode.GDFriendlyFireballObjects1.length = 0;
gdjs.Game_32OverCode.GDFriendlyFireballObjects2.length = 0;
gdjs.Game_32OverCode.GDCameraTargetFloorObjects1.length = 0;
gdjs.Game_32OverCode.GDCameraTargetFloorObjects2.length = 0;
gdjs.Game_32OverCode.GDShockwaveEffectObjects1.length = 0;
gdjs.Game_32OverCode.GDShockwaveEffectObjects2.length = 0;
gdjs.Game_32OverCode.GDExplosionParticlesObjects1.length = 0;
gdjs.Game_32OverCode.GDExplosionParticlesObjects2.length = 0;
gdjs.Game_32OverCode.GDWhiteFlashOverlayObjects1.length = 0;
gdjs.Game_32OverCode.GDWhiteFlashOverlayObjects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
