
export class CounterService {
  activeToInactive:number=0;
  inactiveToActive:number=0;
activeToInactiveCount(){
this.activeToInactive++;
console.log('activeToInactiveCount {0}',this.activeToInactive)
}
InactiveCountToactive(){
  this.inactiveToActive++;
  console.log('activeToInactiveCount {0}',this.inactiveToActive)
}
}
