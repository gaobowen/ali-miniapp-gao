export default  function dragCaller (startfn, endfn, movefn){
  let caller = {};
  caller.__proto__.mystartDrag = startfn;
  caller.__proto__.myendDrag = endfn;
  caller.__proto__.mymoveDrag = movefn;
  return caller;
}