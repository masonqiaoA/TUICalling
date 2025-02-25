// components/tui-calling/TUICalling/component/calling.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isSponsor: {
      type: Boolean,
      value: false,
    },
    pusher: {
      type: Object,
    },
    callType: {
      type: Number,
    },
    remoteUsers: {
      type: Array,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    accept(event) {
      const data = {
        name: 'accept',
        event,
      }
      this.triggerEvent('callingEvent', data)
    },
    hangup(event) {
      const data = {
        name: 'hangup',
        event,
      }
      this.triggerEvent('callingEvent', data)
    },
    reject(event) {
      const data = {
        name: 'reject',
        event,
      }
      this.triggerEvent('callingEvent', data)
    },
    handleErrorImage(e) {

    },
    toggleSwitchCamera(event) {
      const data = {
        name: 'toggleSwitchCamera',
        event,
      }
      this.triggerEvent('callingEvent', data)
    },
    switchAudioCall(event) {
      const data = {
        name: 'switchAudioCall',
        event,
      }
      this.triggerEvent('callingEvent', data)
    },
  },
})
