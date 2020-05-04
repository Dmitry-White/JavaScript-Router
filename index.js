const options = {
  mode: "hash",
};

const router = new Router(options);
console.log("Init: ", router);

// router.add('/user', () => {
//   console.log('User!');
// })
// console.log('Add: ', router);

// router.add('/profile', () => {
//   console.log('Profile!');
// })
// console.log('Add: ', router);

// router.add('/user');
// console.log('Remove: ', router);

// router.flush();
// console.log('Flush: ', router);

router.getCurrentRoute();

const userButton = document.querySelector("#user");
userButton.addEventListener("click", () => router.navigateTo("/user"));
