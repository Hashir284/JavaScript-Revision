const user = {
  name: "Hashir",
  showName() {
    console.log(this.name);
  },
};
// setTimeout(user.showName, 1000);
// Output
// undefined
// Kyun? Kyunki showName ko callback ke taur par pass kiya gaya, isliye this object se alag ho gaya.
// Solution using bind()
// setTimeout(user.showName.bind(user), 1000);


let func = user.showName
func()
func = user.showName.bind(user)
func()