export default  function dragCaller (startfn, endfn){
  let caller = {};
  caller.__proto__.mystartDrag = startfn;
  caller.__proto__.myendDrag = endfn;
  return caller;
}