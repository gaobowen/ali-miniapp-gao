Component({
  mixins: [],
  data: {
    x: 0,
    y: 0,
    stayStyle: { opacity: 1 },
    moveStyle: { opacity: 1 },
    moveOpacity: 0.3
  },
  props: {},
  didMount() {
    this.setData({
      styleObj: {
        ...this.props.styleObj,
        width: this.props.width,
        height: this.props.height,
      },
      moveOpacity : this.props.showMove == "false" ? 0 : 0.3
    })
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    startDrag(e) {
      this.data.x = e.detail.pageX;
      this.data.y = e.detail.pageY;
      let start = {
        ...this.data.moveStyle,
        opacity: this.data.moveOpacity,
        zIndex: 999999,
        transform: 'translate(10px, 10px)'
      };
      this.setData({ moveStyle: start });
      if (this.props.startDrag && this.props.startDrag.mystartDrag)
        this.props.startDrag.mystartDrag({ 
          ...e.detail, 
          eventName: 'startDrag',
          tagObj: this.props.tagObj
        });
    },
    dragging(e) {
      if (this.data.moveStyle.zIndex !== 999999) return;
      let x = e.changedTouches[0].pageX;
      let y = e.changedTouches[0].pageY;
      let dx = x - this.data.x + 10;
      let dy = y - this.data.y + 10;
      let move = {
        ...this.data.moveStyle,
        transform: `translate(${dx}px, ${dy}px)`
      };
      this.setData({ moveStyle: move });
      if (this.props.moveDrag && this.props.startDrag.mymoveDrag)
      this.props.moveDrag.mymoveDrag({ 
        ...e.changedTouches[0], 
        eventName: 'moveDrag',
        tagObj: this.props.tagObj 
      });
    },
    endDrag(e) {
      let end = {
        ...this.data.moveStyle,
        x: 0,
        y: 0,
        opacity: 1,
        zIndex: 1,
        transform: 'translate(0, 0)'
      };
      this.setData({ moveStyle: end });
      if (this.props.endDrag && this.props.endDrag.myendDrag)
        this.props.endDrag.myendDrag({ 
          ...e.changedTouches[0], 
          eventName: 'endDrag',
          tagObj: this.props.tagObj 
        });
    }
  },
});
