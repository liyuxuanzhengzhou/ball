
import DataBus from '../databus'

const BALL_IMG_SRC = 'images/bullet.png'
const BALL_DIAMETER = 30


const __ = {
  speed: Symbol('speed'),
  xspeed: Symbol('xspeed'),
  yspeed: Symbol('yspeed')
}


let databus = new DataBus()

function rnd(start, end) {
  return Math.floor(Math.random() * (end - start) + start)
}

export default class Ball extends Sprite {
  constructor() {
    super(BALL_IMG_SRC, BALL_DIAMETER, BALL_DIAMETER)

  }

  init(speed) {
    this.x = rnd(0 + BALL_DIAMETER, window.innerWidth - BALL_DIAMETER)
    this.y = rnd(0 + BALL_DIAMETER, window.innerHeight - BALL_DIAMETER)

    this[__.speed] = speed
    this[__.xspeed] = speed
    this[__.yspeed] = speed

    this.visible = true
  }

  

  // 每一帧更新子弹位置
  removeSelf() {
   

    // 对象回收
   
      databus.removeBall(this)
  }
update() {

  
}
}