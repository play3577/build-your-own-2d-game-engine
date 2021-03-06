/* File: Hero.js 
 *
 * Creates and initializes the Hero (Dye)
 * overrides the update function of GameObject to define
 * simple Dye behavior
 */

/*jslint node: true, vars: true */
/*global gEngine: false, GameObject: false, SpriteRenderable: false */
/* find out more about jslint: http://www.jslint.com/help.html */

"use strict";  // Operate in Strict mode such that variables must be declared before used!

function Bullet(bulletTexture, xPox, yPos, flag) {
    this.kDelta = 0.9;

    this.mFlag = flag;
    this.mBullet = new TextureRenderable(bulletTexture);
    this.mBullet.setColor([1, 1, 1, 0.1]);
    this.mBullet.getXform().setPosition(xPox, yPos+7);
    this.mBullet.getXform().setSize(4, 4);
    GameObject.call(this, this.mBullet);
}
gEngine.Core.inheritPrototype(Bullet, GameObject);

Bullet.prototype.update = function () {
    var xform = this.getXform();
    if(this.mFlag === 0){
        xform.incXPosBy(this.kDelta);
    }else if(this.mFlag === 1){
        xform.incXPosBy(-this.kDelta);
    }else if(this.mFlag === 2){
        xform.incYPosBy(this.kDelta);
    }else if(this.mFlag === 3){
        xform.incYPosBy(-this.kDelta);
    }
};